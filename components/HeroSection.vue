<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)
const imagesContainerRef = ref(null)
const heroTextRef = ref(null)
let ctx

// Placeholder services - will be replaced with real data from form
const services = [
  { id: 'business-cards', title: 'Business Cards', image: '/images/business-cards.jpg' },
  { id: 'flyers', title: 'Flyers', image: '/images/flyers.jpg' },
  { id: 'brochures', title: 'Brochures', image: '/images/brochures.jpg' },
  { id: 'posters', title: 'Posters', image: '/images/posters.jpg' },
  { id: 'banners', title: 'Banners', image: '/images/banners.jpg' },
  { id: 'catalogs', title: 'Catalogs', image: '/images/catalogs.jpg' }
]

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Lock scroll initially
  document.body.style.overflow = 'hidden'

  ctx = gsap.context(() => {
    const images = gsap.utils.toArray('.hero-image')

    // Hide hero text and navbar initially
    gsap.set(heroTextRef.value, { opacity: 0, y: 30 })
    gsap.set('.navbar', { opacity: 0 })

    // Set initial state for images - scattered positions with rotation
    images.forEach((image, index) => {
      const angle = (index / images.length) * 360
      const radius = 300
      const randomX = Math.cos(angle * Math.PI / 180) * radius
      const randomY = Math.sin(angle * Math.PI / 180) * radius
      const randomRotation = (Math.random() - 0.5) * 30

      gsap.set(image, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        opacity: 0,
        scale: 0.5
      })
    })

    // Phase 1: Montage - images appear with movement and stack in center
    const montageTimeline = gsap.timeline({
      onComplete: () => {
        // Phase 2: Reorganize to horizontal row
        // Calculate card size to fit viewport
        const gap = 12 // 8-16px gap
        const availableWidth = window.innerWidth * 0.9 // 90% of viewport
        const cardWidth = (availableWidth - (gap * (images.length - 1))) / images.length
        const cardHeight = cardWidth * 1.4 // Maintain aspect ratio (similar to 60vw x 70vh ratio)
        const navbarHeight = 80
        const titleHeight = 180
        const finalY = navbarHeight + titleHeight

        // Show navbar and title as images start arranging
        gsap.to('.navbar', {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        })

        gsap.to(heroTextRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        })

        // Reorganize images into row
        gsap.to(images, {
          x: (index) => {
            const totalWidth = (cardWidth * images.length) + (gap * (images.length - 1))
            const startX = -totalWidth / 2 + (cardWidth / 2)
            return startX + (index * (cardWidth + gap))
          },
          y: finalY,
          rotation: 0,
          scale: cardWidth / (window.innerWidth * 0.6), // Scale to maintain aspect ratio
          duration: 1.2,
          ease: 'power2.inOut',
          onComplete: () => {
            // Phase 3: Enable scroll
            document.body.style.overflow = ''
          }
        })
      }
    })

    // Animate images one by one - with movement toward center
    images.forEach((image, index) => {
      montageTimeline.to(image, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, index * 0.6) // 2x slower stagger
    })
  }, heroRef.value)
})

onUnmounted(() => {
  // Cleanup: restore scroll and revert animations
  document.body.style.overflow = ''
  ctx?.revert()
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen"
    style="background-color: var(--color-bg-main)"
  >
    <!-- Hero Text Content (hidden initially, revealed when reorganizing) -->
    <div
      ref="heroTextRef"
      class="absolute top-20 left-0 right-0 flex flex-col items-center z-10 pointer-events-none px-4"
    >
      <h1
        class="font-heading text-h1 md:text-[60px] text-center mb-3"
        style="color: var(--color-text-main)"
      >
        Printăm orice ai nevoie — rapid, calitativ, profesionist
      </h1>
      <p
        class="font-body text-p1 md:text-[18px] text-center max-w-3xl"
        style="color: var(--color-text-muted)"
      >
        De la cărți de vizită la bannere outdoor — te ajutăm să arăți impecabil
      </p>
    </div>

    <!-- Image Montage Container -->
    <div
      ref="imagesContainerRef"
      class="absolute inset-0 flex items-center justify-center"
    >
      <article
        v-for="(service, index) in services"
        :key="service.id"
        class="hero-image group absolute cursor-pointer"
        style="opacity: 0; width: 60vw; height: 70vh"
        @click="scrollToSection(service.id)"
      >
        <!-- Image Placeholder (replace with real images) -->
        <div
          class="w-full h-full flex items-center justify-center"
          style="background-color: var(--color-bg-alt); border: 2px solid var(--color-border)"
        >
          <span
            class="font-heading text-h2 md:text-h1"
            style="color: var(--color-text-main)"
          >
            {{ service.title }}
          </span>
        </div>

        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
          style="background-color: var(--color-accent-green)"
        >
          <p
            class="font-body text-p1 md:text-[18px] text-center"
            style="color: var(--color-bg-main)"
          >
            {{ service.title }} — Apasă pentru detalii
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero-image {
  will-change: transform, opacity;
}

.hero-image > div {
  border-radius: 4px;
  overflow: hidden;
}
</style>
