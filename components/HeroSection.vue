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

    // Hide hero text initially
    gsap.set(heroTextRef.value, { opacity: 0, y: 30 })

    // Phase 1: Montage - images appear one by one
    const montageTimeline = gsap.timeline({
      onComplete: () => {
        // Phase 2: Reorganize to horizontal row
        gsap.to(images, {
          x: (index) => {
            const cardWidth = 200
            const gap = 20
            const totalWidth = images.length * (cardWidth + gap)
            const startX = -totalWidth / 2 + cardWidth / 2
            return startX + index * (cardWidth + gap)
          },
          y: window.innerHeight - 250,
          scale: 0.8,
          duration: 1,
          ease: 'power2.inOut',
          onComplete: () => {
            // Phase 3: Enable scroll
            document.body.style.overflow = ''

            // Set up scroll-triggered animations
            ScrollTrigger.create({
              trigger: heroRef.value,
              start: 'top top',
              end: '+=300',
              scrub: 1,
              onUpdate: (self) => {
                // Move images up as user scrolls
                gsap.to(images, {
                  y: window.innerHeight - 250 - (self.progress * 400),
                  ease: 'none'
                })
              }
            })

            // Reveal hero text on scroll
            ScrollTrigger.create({
              trigger: heroRef.value,
              start: 'top top',
              onEnter: () => {
                gsap.to(heroTextRef.value, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: 'power2.out'
                })
              }
            })
          }
        })
      }
    })

    // Stagger the montage appearance
    images.forEach((image, index) => {
      montageTimeline.to(image, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      }, index * 0.3)
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
    <!-- Hero Text Content (hidden initially, revealed on scroll) -->
    <div
      ref="heroTextRef"
      class="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4"
    >
      <h1
        class="font-heading text-h1 md:text-[60px] text-center mb-4"
        style="color: var(--color-text-main)"
      >
        Professional Print Services
      </h1>
      <p
        class="font-body text-p1 md:text-[18px] text-center max-w-2xl"
        style="color: var(--color-text-muted)"
      >
        From business cards to large format printing — we deliver quality results, fast
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
        class="hero-image group absolute w-[250px] h-[350px] cursor-pointer"
        style="opacity: 0"
        @click="scrollToSection(service.id)"
      >
        <!-- Image Placeholder (replace with real images) -->
        <div
          class="w-full h-full flex items-center justify-center"
          style="background-color: var(--color-bg-alt); border: 2px solid var(--color-border)"
        >
          <span
            class="font-heading text-h4"
            style="color: var(--color-text-muted)"
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
            class="font-body text-p2 text-center"
            style="color: var(--color-bg-main)"
          >
            {{ service.title }} — Click to learn more
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
</style>
