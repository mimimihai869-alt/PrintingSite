<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Slide data structure - 10 services as slides
// TEMPORARY: Using Unsplash placeholder images for testing
// Replace with real images in public/images/hero/ folder
const slides = [
  {
    id: 'business-cards',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'CĂRȚI DE VIZITĂ',
    description: 'Print de calitate superioară pe diverse materiale',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#business-cards'
  },
  {
    id: 'flyers',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'FLYERE & PLIANTE',
    description: 'De la A6 la A3, diverse finisaje',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#flyers'
  },
  {
    id: 'brochures',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'BROȘURI & CATALOAGE',
    description: 'Legătorie profesională și finisare premium',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#brochures'
  },
  {
    id: 'posters',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'POSTERE & AFIȘE',
    description: 'Format mare până la A0+',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#posters'
  },
  {
    id: 'banners',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'BANNERE OUTDOOR',
    description: 'Rezistente pentru exterior',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#banners'
  },
  {
    id: 'cad-plotting',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'PLOTARE CAD',
    description: 'Precizie maximă pentru proiecte tehnice',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#cad-plotting'
  },
  {
    id: 'stickers',
    image: 'https://images.unsplash.com/photo-1533003021-f1642856f0a9?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'AUTOCOLANTE & ETICHETE',
    description: 'Interior și exterior',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#stickers'
  },
  {
    id: 'rollups',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'ROLL-UP & EXPUNERE',
    description: 'Sisteme portabile pentru evenimente',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#rollups'
  },
  {
    id: 'canvas',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'TABLOURI CANVAS',
    description: 'Print pe pânză pentru decorațiuni premium',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#canvas'
  },
  {
    id: 'packaging',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1920&h=1080&fit=crop',
    label: 'Servicii',
    title: 'AMBALAJE PERSONALIZATE',
    description: 'Cutii și soluții cu design personalizat',
    ctaText: 'Descoperă mai multe',
    ctaLink: '/servicii#packaging'
  }
]

// Slideshow state
const currentSlide = ref(0)
const isTransitioning = ref(false)
let autoplayInterval = null
const AUTOPLAY_DURATION = 5000 // 5 seconds

// Navigation functions
const nextSlide = () => {
  if (isTransitioning.value) return

  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % slides.length

  // Reset autoplay timer on manual navigation
  resetAutoplay()

  // Clear transition flag after animation completes
  setTimeout(() => {
    isTransitioning.value = false
  }, 1000) // Match CSS transition duration
}

const previousSlide = () => {
  if (isTransitioning.value) return

  isTransitioning.value = true
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1

  // Reset autoplay timer on manual navigation
  resetAutoplay()

  // Clear transition flag after animation completes
  setTimeout(() => {
    isTransitioning.value = false
  }, 1000)
}

const goToSlide = (index) => {
  if (isTransitioning.value || index === currentSlide.value) return

  isTransitioning.value = true
  currentSlide.value = index

  resetAutoplay()

  setTimeout(() => {
    isTransitioning.value = false
  }, 600)
}

// Autoplay functionality
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, AUTOPLAY_DURATION)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

// Lifecycle hooks (SSR-safe)
onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="hero-slideshow relative w-full h-screen min-h-[600px]">
    <!-- Slideshow Images -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <img
          :src="slide.image"
          :alt="slide.title"
          class="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Bottom Overlay Band with Blurred Background - Shorter and more compact -->
    <div class="absolute bottom-0 left-0 right-0 z-20">
      <!-- Blurred backdrop container - less tall, more image visible -->
      <div
        class="relative w-full py-6 md:py-8"
        style="background-color: rgba(0, 0, 0, 0.1); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px)"
      >
        <div class="mx-auto max-w-page px-4 md:px-8 flex items-center justify-between">
          <!-- Left Arrow -->
          <button
            @click="previousSlide"
            class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style="background-color: var(--color-accent-green)"
            aria-label="Previous slide"
          >
            <svg
              class="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              :style="{ color: 'var(--color-bg-main)' }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Center Content - Changes with each slide, more compact -->
          <div class="flex-1 mx-6 md:mx-12 text-center">
            <Transition name="fade" mode="out-in">
              <div :key="currentSlide" class="space-y-2 md:space-y-3">
                <!-- Title - No label, just the main title -->
                <h1
                  class="font-heading text-h3 md:text-h2 font-bold"
                  style="color: var(--color-bg-main)"
                >
                  {{ slides[currentSlide].title }}
                </h1>

                <!-- CTA Button - Closer spacing -->
                <div class="pt-1">
                  <NuxtLink
                    :to="slides[currentSlide].ctaLink"
                    class="inline-block px-6 md:px-8 py-2 md:py-3 rounded-lg font-body text-p1 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style="background-color: var(--color-accent-green); color: var(--color-bg-main)"
                  >
                    {{ slides[currentSlide].ctaText }}
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Right Arrow -->
          <button
            @click="nextSlide"
            class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style="background-color: var(--color-accent-green)"
            aria-label="Next slide"
          >
            <svg
              class="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              :style="{ color: 'var(--color-bg-main)' }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <!-- Slide Indicators (dots) - Closer to content -->
        <div class="flex justify-center items-center gap-2 mt-4">
          <button
            v-for="(slide, index) in slides"
            :key="`indicator-${slide.id}`"
            @click="goToSlide(index)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="index === currentSlide ? 'w-8' : 'w-2'"
            :style="{
              backgroundColor: index === currentSlide ? 'var(--color-bg-main)' : 'rgba(255, 255, 255, 0.5)'
            }"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fade transition for slide content - smoother */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure smooth image transitions */
.hero-slideshow img {
  will-change: opacity;
  transition: opacity 1s ease-in-out;
}
</style>
