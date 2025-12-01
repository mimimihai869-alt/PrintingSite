<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  intensityMultiplier: {
    type: Number,
    default: 1.0
  },
  bobAmplitude: {
    type: Number,
    default: 0.3
  },
  bobSpeed: {
    type: Number,
    default: 0.8
  },
  sphereScale: {
    type: Number,
    default: 1.0
  },
  offsetX: {
    type: Number,
    default: 0.15 // Offset from center (0.15 = 2/3 position)
  },
  offsetY: {
    type: Number,
    default: 0
  }
})

const canvasContainer = ref(null)
const isWebGLAvailable = ref(true)

let scene, camera, renderer, sphere, particleSystem
let animationFrameId = null
let mouseX = 0
let mouseY = 0
let currentIntensity = 0
let targetIntensity = 0
let time = 0

// Sphere positioning in 3D space
const spherePosition = new THREE.Vector3()

// Vertex shader for electric effect
const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  uniform float uTime;
  uniform float uIntensity;

  // Simple 3D noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    vec3 pos = position;

    // Add electric distortion based on intensity
    float noise = snoise(pos * 2.0 + uTime * 0.5);
    float displacement = noise * uIntensity * 0.15;

    pos += normal * displacement;

    vPosition = pos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment shader for electric effect
const fragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  uniform float uTime;
  uniform float uIntensity;
  uniform vec3 uBaseColor;
  uniform vec3 uEmissiveColor;

  // Noise function (simplified for fragment shader)
  float noise(vec2 uv) {
    return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    // Base color - deep navy/blue
    vec3 baseColor = uBaseColor;

    // Electric vein pattern
    vec2 scrollUv = vUv * 3.0 + vec2(uTime * 0.1, uTime * 0.05);
    float pattern = noise(scrollUv);
    pattern += noise(scrollUv * 2.0) * 0.5;
    pattern += noise(scrollUv * 4.0) * 0.25;
    pattern /= 1.75;

    // Create electric veins
    float veins = smoothstep(0.4, 0.6, pattern);
    veins *= (1.0 + uIntensity * 2.0);

    // Rim lighting effect
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    rim = pow(rim, 2.0);

    // Combine effects
    vec3 finalColor = baseColor;
    finalColor += uEmissiveColor * veins * (0.3 + uIntensity * 0.7);
    finalColor += uEmissiveColor * rim * 0.2;

    // Add extra glow on high intensity
    finalColor += uEmissiveColor * uIntensity * 0.3;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch (e) {
    return false
  }
}

function initThreeJS() {
  if (!canvasContainer.value) return

  // Check WebGL support
  if (!checkWebGLSupport()) {
    isWebGLAvailable.value = false
    console.warn('WebGL not available, falling back to simple background')
    return
  }

  // Scene
  scene = new THREE.Scene()

  // Camera
  const aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
  camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
  camera.position.z = 5

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // Cap pixel ratio for performance
  renderer.setClearColor(0x000000, 0) // Transparent background

  canvasContainer.value.appendChild(renderer.domElement)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.3)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0x4a90e2, 0.5)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  const hemisphereLight = new THREE.HemisphereLight(0x0e1a40, 0x000510, 0.4)
  scene.add(hemisphereLight)

  // Create sphere with custom shader material
  const geometry = new THREE.SphereGeometry(1.2 * props.sphereScale, 64, 64)

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uIntensity: { value: 0 },
      uBaseColor: { value: new THREE.Color(0x0a1628) }, // Deep navy
      uEmissiveColor: { value: new THREE.Color(0x00d9ff) } // Electric cyan
    },
    side: THREE.DoubleSide
  })

  sphere = new THREE.Mesh(geometry, material)

  // Position sphere at 2/3 width horizontally (offset to right)
  spherePosition.set(props.offsetX * 2, props.offsetY, 0)
  sphere.position.copy(spherePosition)

  scene.add(sphere)

  // Create particle system for sparks
  createParticleSystem()

  // Start animation loop
  animate()
}

function createParticleSystem() {
  const particleCount = 50
  const particles = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Random positions around sphere
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    const radius = 1.3 + Math.random() * 0.3

    positions[i] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i + 2] = radius * Math.cos(phi)
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x00d9ff,
    size: 0.05,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending
  })

  particleSystem = new THREE.Points(particles, particleMaterial)
  particleSystem.position.copy(spherePosition)
  scene.add(particleSystem)
}

function updateMouseIntensity(clientX, clientY) {
  if (!sphere || !canvasContainer.value) return

  // Get sphere screen position
  const vector = new THREE.Vector3()
  vector.copy(sphere.position)
  vector.project(camera)

  const containerRect = canvasContainer.value.getBoundingClientRect()
  const sphereScreenX = (vector.x + 1) / 2 * containerRect.width + containerRect.left
  const sphereScreenY = (-vector.y + 1) / 2 * containerRect.height + containerRect.top

  // Calculate distance from mouse to sphere
  const dx = clientX - sphereScreenX
  const dy = clientY - sphereScreenY
  const distance = Math.sqrt(dx * dx + dy * dy)

  // Max interaction radius in pixels
  const maxRadius = 200

  // Calculate intensity (1 at center, 0 at radius edge)
  if (distance < maxRadius) {
    targetIntensity = (1 - distance / maxRadius) * props.intensityMultiplier
  } else {
    targetIntensity = 0
  }
}

function handlePointerMove(event) {
  mouseX = event.clientX
  mouseY = event.clientY
  updateMouseIntensity(event.clientX, event.clientY)
}

function handleResize() {
  if (!camera || !renderer || !canvasContainer.value) return

  const width = canvasContainer.value.clientWidth
  const height = canvasContainer.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
}

function animate() {
  animationFrameId = requestAnimationFrame(animate)

  // Skip rendering if tab is not visible
  if (document.hidden) return

  time += 0.016 // ~60fps

  // Smooth intensity transition
  currentIntensity += (targetIntensity - currentIntensity) * 0.1

  if (sphere) {
    // Update shader uniforms
    sphere.material.uniforms.uTime.value = time
    sphere.material.uniforms.uIntensity.value = currentIntensity

    // Idle bobbing animation
    const bobOffset = Math.sin(time * props.bobSpeed) * props.bobAmplitude
    sphere.position.y = spherePosition.y + bobOffset

    // Slow rotation
    sphere.rotation.y += 0.002
    sphere.rotation.x = Math.sin(time * 0.3) * 0.05
  }

  if (particleSystem) {
    // Update particle opacity based on intensity
    particleSystem.material.opacity = currentIntensity * 0.6

    // Position particles with sphere
    particleSystem.position.copy(sphere.position)

    // Rotate particles
    particleSystem.rotation.y += 0.005

    // Jitter particles on high intensity
    if (currentIntensity > 0.3) {
      const positions = particleSystem.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * currentIntensity * 0.02
        positions[i + 1] += (Math.random() - 0.5) * currentIntensity * 0.02
        positions[i + 2] += (Math.random() - 0.5) * currentIntensity * 0.02
      }
      particleSystem.geometry.attributes.position.needsUpdate = true
    }
  }

  renderer.render(scene, camera)
}

function cleanup() {
  // Cancel animation frame
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }

  // Remove event listeners
  window.removeEventListener('resize', handleResize)
  if (canvasContainer.value) {
    canvasContainer.value.removeEventListener('pointermove', handlePointerMove)
  }

  // Dispose Three.js resources
  if (sphere) {
    sphere.geometry.dispose()
    sphere.material.dispose()
  }

  if (particleSystem) {
    particleSystem.geometry.dispose()
    particleSystem.material.dispose()
  }

  if (renderer) {
    renderer.dispose()
    if (canvasContainer.value && renderer.domElement) {
      canvasContainer.value.removeChild(renderer.domElement)
    }
  }

  scene = null
  camera = null
  renderer = null
  sphere = null
  particleSystem = null
}

onMounted(() => {
  initThreeJS()

  if (isWebGLAvailable.value) {
    window.addEventListener('resize', handleResize)
    canvasContainer.value?.addEventListener('pointermove', handlePointerMove)
  }
})

onUnmounted(() => {
  cleanup()
})
</script>

<template>
  <div
    ref="canvasContainer"
    class="lightning-sphere-container"
    :class="{ 'fallback': !isWebGLAvailable }"
  />
</template>

<style scoped>
.lightning-sphere-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: auto;
}

.lightning-sphere-container canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* Fallback for browsers without WebGL */
.lightning-sphere-container.fallback {
  background: radial-gradient(
    circle at 66% 50%,
    rgba(0, 217, 255, 0.1) 0%,
    rgba(10, 22, 40, 0.3) 30%,
    transparent 60%
  );
}

/* Mobile optimization */
@media (max-width: 768px) {
  .lightning-sphere-container {
    /* Slightly reduce visual complexity on mobile if needed */
    opacity: 0.9;
  }
}
</style>
