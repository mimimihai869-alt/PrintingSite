<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const heroRef = ref(null)
const heroTextRef = ref(null)
let animationComplete = false

// Services for carousel
const services = [
  { id: 'business-cards', title: 'Cărți de Vizită', image: '/images/business-cards.jpg' },
  { id: 'flyers', title: 'Flyere', image: '/images/flyers.jpg' },
  { id: 'brochures', title: 'Broșuri', image: '/images/brochures.jpg' },
  { id: 'posters', title: 'Postere', image: '/images/posters.jpg' },
  { id: 'banners', title: 'Bannere', image: '/images/banners.jpg' },
  { id: 'catalogs', title: 'Cataloage', image: '/images/catalogs.jpg' }
]

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Simple fade-in animation
  gsap.set(heroTextRef.value, { opacity: 0, y: 30 })

  gsap.to(heroTextRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out'
  })

  // Show navbar
  gsap.to('.navbar', {
    opacity: 1,
    duration: 0.6,
    delay: 0.3,
    ease: 'power2.out'
  })
})

onUnmounted(() => {
  // Cleanup
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen pt-32 md:pt-40 pb-16"
    style="background-color: var(--color-bg-main)"
  >
    <div class="mx-auto max-w-page px-6 md:px-8">
      <!-- Hero Text Content -->
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
          class="font-body text-p1 md:text-[18px] text-center max-w-3xl mb-16"
          style="color: var(--color-text-muted)"
        >
          De la cărți de vizită la bannere outdoor — te ajutăm să arăți impecabil
        </p>
      </div>

      <!-- Services Carousel -->
      <CarouselComponent :items="services" :visible-count="5" item-width="280px">
        <template #item="{ item }">
          <article
            class="group cursor-pointer h-full"
            @click="scrollToSection(item.id)"
          >
            <div
              class="aspect-[3/4] rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105"
              style="background-color: var(--color-bg-alt); border: 2px solid var(--color-accent-green)"
            >
              <!-- Image Placeholder -->
              <div class="w-full h-full flex items-center justify-center relative">
                <span
                  class="font-heading text-h4 text-center px-4"
                  style="color: var(--color-text-main)"
                >
                  {{ item.title }}
                </span>

                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
                  style="background-color: var(--color-accent-green)"
                >
                  <p
                    class="font-body text-p1 text-center"
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
  </section>
</template>

<style scoped>
.group:hover {
  z-index: 10;
}
</style>
