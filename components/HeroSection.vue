<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)
const heroTextRef = ref(null)
const montageContainerRef = ref(null)
const carouselContainerRef = ref(null)
let ctx
let scrollTriggerInstance

// All 11 services
const services = [
  { id: 'business-cards', title: 'Cărți de Vizită' },
  { id: 'flyers', title: 'Flyere & Pliante' },
  { id: 'brochures', title: 'Broșuri & Cataloage' },
  { id: 'posters', title: 'Postere & Afișe' },
  { id: 'banners', title: 'Bannere Outdoor' },
  { id: 'cad-plotting', title: 'Plotare CAD' },
  { id: 'stickers', title: 'Autocolante' },
  { id: 'rollups', title: 'Roll-up & Expunere' },
  { id: 'canvas', title: 'Tablouri Canvas' },
  { id: 'packaging', title: 'Ambalaje' },
  { id: 'clothing', title: 'Textile' }
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
    const montageCards = gsap.utils.toArray('.montage-card')

    // Master timeline
    const masterTimeline = gsap.timeline({
      onComplete: () => {
        // Unlock scroll when animation complete
        document.body.style.overflow = ''

        // Show the carousel container
        gsap.set(carouselContainerRef.value, { display: 'block' })
        gsap.set(montageContainerRef.value, { display: 'none' })
      }
    })

    // Hide text and carousel initially
    gsap.set(heroTextRef.value, { opacity: 0, y: 50 })
    gsap.set(carouselContainerRef.value, { display: 'none' })

    // Phase 1: Montage - Cards appear one by one from random positions (2x slower)
    montageCards.forEach((card, index) => {
      // Random starting position
      const startX = gsap.utils.random(-60, 60, 1) // vw units
      const startY = gsap.utils.random(-40, 40, 1) // vh units
      const startRotation = gsap.utils.random(-20, 20, 1)

      gsap.set(card, {
        x: `${startX}vw`,
        y: `${startY}vh`,
        rotation: startRotation,
        scale: 0,
        opacity: 0
      })

      // Animate each card appearing (stagger 0.6s = 2x slower)
      masterTimeline.to(card, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, index * 0.6)
    })

    // Phase 2: Reorganize - Move all cards to center and prepare for carousel
    masterTimeline.to(montageCards, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power3.inOut',
      stagger: 0.05
    }, '+=0.5')

    // Phase 3: Fade in text
    masterTimeline.to(heroTextRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')

  }, heroRef.value)
})

onUnmounted(() => {
  ctx?.revert()
  scrollTriggerInstance?.kill()
  // Ensure scroll is unlocked
  document.body.style.overflow = ''
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex flex-col items-center justify-center"
    style="background-color: var(--color-bg-main)"
  >
    <!-- Montage Container (shows during animation) -->
    <div
      ref="montageContainerRef"
      class="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div
        v-for="(service, index) in services"
        :key="`montage-${service.id}`"
        class="montage-card absolute"
        :style="{ zIndex: index }"
      >
        <div
          class="rounded-lg overflow-hidden"
          style="
            width: 60vw;
            height: 70vh;
            background-color: var(--color-bg-alt);
            border: 3px solid var(--color-accent-green);
          "
        >
          <div class="w-full h-full flex items-center justify-center">
            <span
              class="font-heading text-h2 md:text-h1 text-center px-8"
              style="color: var(--color-text-main)"
            >
              {{ service.title }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Carousel View (shows after animation) -->
    <div
      ref="carouselContainerRef"
      class="w-full pt-32 md:pt-40 pb-16"
    >
      <div class="mx-auto max-w-page px-8 md:px-12">
        <!-- Hero Text -->
        <div
          ref="heroTextRef"
          class="flex flex-col items-center mb-16"
        >
          <h1
            class="font-heading text-h1 md:text-[60px] text-center mb-6"
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

        <!-- Services Carousel with side spacing -->
        <div class="px-8 md:px-16">
          <CarouselComponent :items="services" :visible-count="5" item-width="280px">
            <template #item="{ item }">
              <article
                class="group cursor-pointer h-full px-3"
                @click="scrollToSection(item.id)"
              >
                <div
                  class="aspect-[3/4] rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                  style="background-color: var(--color-bg-alt); border: 2px solid var(--color-accent-green)"
                >
                  <div class="w-full h-full flex items-center justify-center relative">
                    <span
                      class="font-heading text-h4 text-center px-4"
                      style="color: var(--color-text-main)"
                    >
                      {{ item.title }}
                    </span>

                    <!-- Hover Overlay -->
                    <div
                      class="absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-6"
                      style="background-color: var(--color-accent-green)"
                    >
                      <p
                        class="font-body text-p1 text-center font-semibold"
                        style="color: var(--color-bg-main)"
                      >
                        {{ item.title }}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </template>
          </CarouselComponent>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.montage-card {
  will-change: transform, opacity;
}

.group:hover {
  z-index: 10;
}
</style>
