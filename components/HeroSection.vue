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
  // Check if animation has already played this session
  const hasAnimationPlayed = sessionStorage.getItem('heroAnimationPlayed')

  if (hasAnimationPlayed === 'true') {
    // Skip animation, show final state immediately
    gsap.set(montageContainerRef.value, { display: 'none' })
    gsap.set(carouselContainerRef.value, { display: 'block', opacity: 1 })
    gsap.set(heroTextRef.value, { opacity: 1, y: 0 })
    document.body.style.overflow = ''
    return
  }

  // Lock scroll initially
  document.body.style.overflow = 'hidden'

  ctx = gsap.context(() => {
    const montageCards = gsap.utils.toArray('.montage-card')

    // Master timeline
    const masterTimeline = gsap.timeline({
      onComplete: () => {
        // Unlock scroll when animation complete
        document.body.style.overflow = ''

        // Mark animation as played for this session
        sessionStorage.setItem('heroAnimationPlayed', 'true')

        // Transition to carousel
        gsap.to(montageContainerRef.value, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            gsap.set(montageContainerRef.value, { display: 'none' })
            gsap.set(carouselContainerRef.value, { display: 'block', opacity: 0 })
            gsap.to(carouselContainerRef.value, {
              opacity: 1,
              duration: 0.6
            })
          }
        })
      }
    })

    // Hide text and carousel initially
    gsap.set(heroTextRef.value, { opacity: 0, y: 50 })
    gsap.set(carouselContainerRef.value, { display: 'none' })

    // Phase 1: Cards slide in from right to left, centered vertically
    montageCards.forEach((card, index) => {
      gsap.set(card, {
        x: '120vw', // Start off-screen to the right
        y: 0, // Centered vertically
        rotation: 0,
        scale: 1,
        opacity: 0
      })

      // Cards slide in from right, faster timing (0.35s stagger)
      masterTimeline.to(card, {
        x: 0, // Slide to center
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, index * 0.35)
    })

    // Phase 2: Cards scale down and arrange in carousel formation
    masterTimeline.to(montageCards, {
      scale: 0.3, // Scale down to carousel size
      x: (index) => {
        // Arrange horizontally like a carousel
        const centerOffset = -((montageCards.length - 1) * 15) / 2
        return centerOffset + (index * 15) + 'vw'
      },
      y: '20vh', // Move down slightly
      duration: 1,
      ease: 'power3.inOut',
      stagger: 0.03
    }, '+=0.3')

    // Phase 3: Fade in hero text
    masterTimeline.to(heroTextRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')

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

        <!-- Services Carousel (matches Serviciile Noastre section) -->
        <div class="w-full">
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
