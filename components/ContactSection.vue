<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

let ctx

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Form submission logic will be added
}

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.contact-content', {
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
    id="contact"
    ref="sectionRef"
    class="mx-auto max-w-page px-4 py-16 md:py-24"
    style="background-color: var(--color-bg-alt)"
  >
    <div class="contact-content max-w-3xl mx-auto">
      <h2
        class="font-heading text-h2 md:text-h1 text-center mb-12"
        style="color: var(--color-text-main)"
      >
        Contactează-ne
      </h2>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <h3 class="font-heading text-h4 mb-6" style="color: var(--color-text-main)">
            Informații Contact
          </h3>
          <div class="space-y-4">
            <p class="font-body text-p1" style="color: var(--color-text-muted)">
              <strong style="color: var(--color-text-main)">Telefon:</strong><br>
              +40 XXX XXX XXX
            </p>
            <p class="font-body text-p1" style="color: var(--color-text-muted)">
              <strong style="color: var(--color-text-main)">Email:</strong><br>
              contact@printco.ro
            </p>
            <p class="font-body text-p1" style="color: var(--color-text-muted)">
              <strong style="color: var(--color-text-main)">Adresă:</strong><br>
              Strada Exemplu, Nr. 123<br>
              București, România
            </p>
            <p class="font-body text-p1" style="color: var(--color-text-muted)">
              <strong style="color: var(--color-text-main)">Program:</strong><br>
              Luni - Vineri: 09:00 - 18:00
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h3 class="font-heading text-h4 mb-6" style="color: var(--color-text-main)">
            Trimite-ne un Mesaj
          </h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input
              v-model="formData.name"
              type="text"
              placeholder="Nume"
              required
              class="w-full px-4 py-3 rounded-lg font-body text-p1 border"
              style="background-color: var(--color-bg-main); border-color: var(--color-border); color: var(--color-text-main)"
            />
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              required
              class="w-full px-4 py-3 rounded-lg font-body text-p1 border"
              style="background-color: var(--color-bg-main); border-color: var(--color-border); color: var(--color-text-main)"
            />
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="Telefon"
              class="w-full px-4 py-3 rounded-lg font-body text-p1 border"
              style="background-color: var(--color-bg-main); border-color: var(--color-border); color: var(--color-text-main)"
            />
            <textarea
              v-model="formData.message"
              placeholder="Mesaj"
              rows="4"
              required
              class="w-full px-4 py-3 rounded-lg font-body text-p1 border resize-none"
              style="background-color: var(--color-bg-main); border-color: var(--color-border); color: var(--color-text-main)"
            />
            <BaseButton type="submit" label="Trimite Mesaj" size="large" class="w-full" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
