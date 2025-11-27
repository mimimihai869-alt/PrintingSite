<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.about-item', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
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
    id="about"
    ref="sectionRef"
    class="mx-auto max-w-page px-4 py-16 md:py-24"
    style="background-color: var(--color-bg-alt)"
  >
    <h2
      class="font-heading text-h2 md:text-h1 text-center mb-12"
      style="color: var(--color-text-main)"
    >
      Despre Noi
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      <article class="about-item text-center p-6 w-full max-w-sm">
        <h3 class="font-heading text-h4 mb-3" style="color: var(--color-text-main)">
          Experiență
        </h3>
        <p class="font-body text-p1" style="color: var(--color-text-muted)">
          Peste X ani în domeniul printării profesionale
        </p>
      </article>

      <article class="about-item text-center p-6 w-full max-w-sm">
        <h3 class="font-heading text-h4 mb-3" style="color: var(--color-text-main)">
          Calitate
        </h3>
        <p class="font-body text-p1" style="color: var(--color-text-muted)">
          Echipamente moderne și control strict al calității
        </p>
      </article>

      <article class="about-item text-center p-6 w-full max-w-sm md:col-span-2 lg:col-span-1">
        <h3 class="font-heading text-h4 mb-3" style="color: var(--color-text-main)">
          Rapiditate
        </h3>
        <p class="font-body text-p1" style="color: var(--color-text-muted)">
          Timp de execuție rapid și comenzi urgente
        </p>
      </article>
    </div>
  </section>
</template>
