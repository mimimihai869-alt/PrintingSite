<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.welcome-content', {
      y: 50,
      opacity: 0,
      duration: 0.8,
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
    id="welcome"
    ref="sectionRef"
    class="w-full py-16 md:py-24"
    style="background-color: var(--color-accent-soft)"
  >
    <div class="mx-auto max-w-page px-4">
      <div class="welcome-content text-center max-w-4xl mx-auto">
        <h2
          class="font-heading text-h2 md:text-h1 mb-6"
          style="color: var(--color-text-main)"
        >
          Bine ați venit la serviciile noastre de printare
        </h2>
        <p
          class="font-body text-p1 md:text-[18px] leading-relaxed"
          style="color: var(--color-text-muted)"
        >
          Cu experiență de peste X ani în domeniu, oferim soluții complete de printare pentru
          afaceri, freelanceri, arhitecți și organizatori de evenimente. De la concepte creative
          la produse finite de calitate superioară.
        </p>
      </div>
    </div>
  </section>
</template>
