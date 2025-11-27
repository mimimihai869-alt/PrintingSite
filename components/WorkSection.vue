<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.work-item', {
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
        class="font-heading text-h2 md:text-h1 text-center mb-12"
        style="color: var(--color-text-main)"
      >
        Portofoliul Nostru
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="i in 6"
          :key="i"
          class="work-item aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          style="background-color: var(--color-bg-main); border: 2px solid var(--color-accent-green)"
        >
          <!-- Placeholder for portfolio images -->
          <div class="w-full h-full flex items-center justify-center">
            <span class="font-body text-p2" style="color: var(--color-text-muted)">
              Portofoliu {{ i }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
