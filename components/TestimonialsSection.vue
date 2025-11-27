<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

// Placeholder testimonials - will be populated from form data
const testimonials = [
  {
    id: 1,
    text: 'Servicii excelente, livrare rapidă și calitate superioară. Recomand cu încredere!',
    author: 'Client 1',
    company: 'Companie XYZ'
  },
  {
    id: 2,
    text: 'Colaborăm de ani de zile. Profesionalism și atenție la detalii de fiecare dată.',
    author: 'Client 2',
    company: 'Studio ABC'
  },
  {
    id: 3,
    text: 'Echipă dedicată, rezultate impecabile. Exact ce aveam nevoie pentru evenimentul nostru.',
    author: 'Client 3',
    company: 'Events Pro'
  }
]

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.testimonial-card', {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
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
    id="testimonials"
    ref="sectionRef"
    class="w-full py-16 md:py-24"
    style="background-color: var(--color-bg-main)"
  >
    <div class="mx-auto max-w-page px-4">
      <h2
        class="font-heading text-h2 md:text-h1 text-center mb-12"
        style="color: var(--color-text-main)"
      >
        Ce Spun Clienții Noștri
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="testimonial-card p-8 rounded-lg border-l-4"
          style="background-color: var(--color-bg-alt); border-left-color: var(--color-accent-green)"
        >
          <p
            class="font-body text-p1 mb-6 italic"
            style="color: var(--color-text-muted)"
          >
            "{{ testimonial.text }}"
          </p>
          <div>
            <p class="font-heading text-h6" style="color: var(--color-text-main)">
              {{ testimonial.author }}
            </p>
            <p class="font-body text-p3" style="color: var(--color-text-muted)">
              {{ testimonial.company }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
