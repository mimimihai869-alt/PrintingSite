<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

// Portfolio items with images
const portfolioItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=800&fit=crop'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=800&fit=crop'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=800&fit=crop'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=800&fit=crop'
  }
]

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.group', {
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%'
      }
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    id="work"
    ref="sectionRef"
    class="w-full py-16 md:py-24"
    style="background-color: var(--color-bg-alt)"
  >
    <div class="mx-auto max-w-page px-4">
      <h2
        class="font-heading text-h2 md:text-h1 text-center mb-8"
        style="color: var(--color-text-main)"
      >
        Portofoliul Nostru
      </h2>
      <p class="font-body text-p1 text-center mb-12 max-w-2xl mx-auto" style="color: var(--color-text-muted)">
        Proiecte realizate cu pasiune și atenție la detalii
      </p>

      <!-- Simple Grid - 3 cards per row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <article
          v-for="item in portfolioItems"
          :key="item.id"
          class="group"
        >
          <ImageCard
            :image="item.image"
            :alt="`Portfolio ${item.id}`"
            aspect-ratio="square"
            :show-text-on-hover="false"
          />
        </article>
      </div>
    </div>
  </section>
</template>
