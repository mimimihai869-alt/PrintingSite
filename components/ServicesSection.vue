<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

// Placeholder services - will be populated from form data
const services = [
  { id: 1, title: 'Cărți de vizită', description: 'Print de calitate pe diverse materiale' },
  { id: 2, title: 'Flyere & Pliante', description: 'De la A6 la A3, diverse finisaje' },
  { id: 3, title: 'Broșuri & Cataloage', description: 'Legătorie profesională și finisare' },
  { id: 4, title: 'Postere & Afișe', description: 'Format mare, culori vibrante' },
  { id: 5, title: 'Printare Outdoor', description: 'Banner, mesh, autocolante' },
  { id: 6, title: 'Plotare CAD', description: 'A3 până la A0+, precizie maximă' }
]

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.service-card', {
      y: 50,
      opacity: 0,
      stagger: 0.15,
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
    id="services"
    ref="sectionRef"
    class="mx-auto max-w-page px-4 py-16 md:py-24"
    style="background-color: var(--color-bg-main)"
  >
    <h2
      class="font-heading text-h2 md:text-h1 text-center mb-12"
      style="color: var(--color-text-main)"
    >
      Serviciile Noastre
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="service in services"
        :key="service.id"
        class="service-card p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
        style="background-color: var(--color-bg-alt); border: 2px solid var(--color-accent-green)"
      >
        <h3 class="font-heading text-h5 mb-3" style="color: var(--color-text-main)">
          {{ service.title }}
        </h3>
        <p class="font-body text-p2 mb-4" style="color: var(--color-text-muted)">
          {{ service.description }}
        </p>
        <BaseButton size="small" label="Detalii" />
      </article>
    </div>
  </section>
</template>
