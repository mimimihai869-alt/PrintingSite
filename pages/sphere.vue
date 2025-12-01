<script setup>
useHead({
  title: 'Lightning Sphere Test - PrintCo'
})
</script>

<template>
  <div>
    <TheNavbar />

    <!-- Hero Section with Lightning Sphere -->
    <main class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#050d1a] to-[#000510]">
      <!-- Lightning Sphere Background -->
      <LightningSphere
        :intensity-multiplier="1.2"
        :bob-amplitude="0.4"
        :bob-speed="0.9"
        :sphere-scale="1.0"
        :offset-x="0.15"
        :offset-y="0"
      />

      <!-- Hero Content -->
      <div class="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 md:px-8 lg:px-16 max-w-page mx-auto">
        <div class="max-w-2xl">
          <h1
            class="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            style="text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5)"
          >
            Lightning Sphere
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#0088ff]">
              Interactive Demo
            </span>
          </h1>

          <p class="font-body text-lg md:text-xl text-gray-300 mb-8 leading-relaxed" style="text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5)">
            Move your mouse near the sphere to see the electric effect!
            Watch as the lightning intensifies and sparks appear when you get close.
          </p>

          <div class="space-y-4 mb-12">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-[#00d9ff] mt-2 flex-shrink-0"></div>
              <p class="font-body text-base text-gray-400">
                <strong class="text-white">Interactive:</strong> Electric intensity responds to mouse proximity
              </p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-[#00d9ff] mt-2 flex-shrink-0"></div>
              <p class="font-body text-base text-gray-400">
                <strong class="text-white">Animated:</strong> Gentle bobbing and rotation when idle
              </p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-[#00d9ff] mt-2 flex-shrink-0"></div>
              <p class="font-body text-base text-gray-400">
                <strong class="text-white">Performant:</strong> Optimized Three.js with proper resource management
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <BaseButton label="Test Interaction" />
            <button
              class="px-6 py-3 rounded-lg font-body text-base font-medium text-white border-2 border-[#00d9ff] hover:bg-[#00d9ff] hover:text-[#0a1628] transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        <!-- Info Cards -->
        <div class="mt-16 grid md:grid-cols-3 gap-6 w-full">
          <div class="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 class="font-heading text-xl font-bold text-[#00d9ff] mb-2">
              WebGL Powered
            </h3>
            <p class="font-body text-sm text-gray-400">
              Built with Three.js for smooth 3D graphics and real-time rendering
            </p>
          </div>

          <div class="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 class="font-heading text-xl font-bold text-[#00d9ff] mb-2">
              Custom Shaders
            </h3>
            <p class="font-body text-sm text-gray-400">
              GLSL vertex and fragment shaders for electric vein patterns
            </p>
          </div>

          <div class="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 class="font-heading text-xl font-bold text-[#00d9ff] mb-2">
              Particle System
            </h3>
            <p class="font-body text-sm text-gray-400">
              Dynamic sparks that react to interaction intensity
            </p>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div class="w-6 h-10 border-2 border-[#00d9ff]/50 rounded-full flex items-start justify-center p-2">
          <div class="w-1 h-2 bg-[#00d9ff] rounded-full"></div>
        </div>
      </div>
    </main>

    <!-- Additional Info Section -->
    <section class="w-full py-16 md:py-24" style="background-color: var(--color-bg-main)">
      <div class="mx-auto max-w-page px-4">
        <h2 class="font-heading text-h2 text-center mb-12" style="color: var(--color-text-main)">
          Component Features
        </h2>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PaperCard variant="accent-left">
            <h3 class="font-heading text-h4 mb-4" style="color: var(--color-accent-green)">
              Customizable Props
            </h3>
            <ul class="font-body text-p2 space-y-2" style="color: var(--color-text-muted)">
              <li>• Intensity Multiplier</li>
              <li>• Bob Amplitude & Speed</li>
              <li>• Sphere Scale</li>
              <li>• Position Offsets (X, Y)</li>
            </ul>
          </PaperCard>

          <PaperCard variant="accent-left">
            <h3 class="font-heading text-h4 mb-4" style="color: var(--color-accent-green)">
              Performance Optimized
            </h3>
            <ul class="font-body text-p2 space-y-2" style="color: var(--color-text-muted)">
              <li>• Capped pixel ratio (1.5 max)</li>
              <li>• Proper resource disposal</li>
              <li>• Tab visibility handling</li>
              <li>• WebGL fallback support</li>
            </ul>
          </PaperCard>
        </div>

        <div class="mt-12 text-center">
          <p class="font-body text-p1 mb-6" style="color: var(--color-text-muted)">
            This is a test page for the Lightning Sphere component.
            <br />
            Check the component documentation for integration details.
          </p>
          <NuxtLink to="/" class="inline-block">
            <BaseButton label="Back to Home" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<style scoped>
/* Additional animations for scroll indicator */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
