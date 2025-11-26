<script setup>
import { ref } from 'vue'

useHead({
  title: 'Întrebări Frecvente - PrintCo'
})

const faqs = ref([
  {
    id: 1,
    question: 'Care este timpul de execuție pentru comenzi?',
    answer: '24-48 ore pentru majoritatea printurilor standard. Comenzi urgente pot fi finalizate în 24h.',
    open: false
  },
  {
    id: 2,
    question: 'Ce formate de fișiere acceptați?',
    answer: 'Acceptăm PDF (recomandat), TIFF, JPEG și PNG. Rezoluție minimă 300 DPI.',
    open: false
  },
  {
    id: 3,
    question: 'Oferiți servicii de design?',
    answer: 'Da, oferim consultanță și ajutor cu pregătirea fișierelor pentru print.',
    open: false
  },
  {
    id: 4,
    question: 'Care sunt costurile de livrare?',
    answer: 'Livrare gratuită peste [X] RON. Sub această sumă, costul depinde de zonă.',
    open: false
  }
])

const toggleFaq = (id) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.open = !faq.open
  }
}
</script>

<template>
  <div>
    <TheNavbar />

    <main class="pt-24">
      <!-- FAQ Hero -->
      <section
        class="mx-auto max-w-page px-4 py-16"
        style="background-color: var(--color-accent-soft)"
      >
        <h1
          class="font-heading text-h1 md:text-[60px] text-center mb-6"
          style="color: var(--color-text-main)"
        >
          Întrebări Frecvente
        </h1>
        <p
          class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto"
          style="color: var(--color-text-muted)"
        >
          Răspunsuri la cele mai comune întrebări
        </p>
      </section>

      <!-- FAQ List -->
      <section class="mx-auto max-w-page px-4 py-16">
        <div class="max-w-3xl mx-auto space-y-4">
          <article
            v-for="faq in faqs"
            :key="faq.id"
            class="rounded-lg overflow-hidden"
            style="background-color: var(--color-bg-alt); border: 1px solid var(--color-border)"
          >
            <button
              @click="toggleFaq(faq.id)"
              class="w-full text-left p-6 flex items-center justify-between hover:opacity-80 transition-opacity"
            >
              <h3 class="font-heading text-h6" style="color: var(--color-text-main)">
                {{ faq.question }}
              </h3>
              <span
                class="text-2xl transform transition-transform"
                :class="{ 'rotate-45': faq.open }"
                style="color: var(--color-accent-green)"
              >
                +
              </span>
            </button>

            <Transition name="faq">
              <div
                v-if="faq.open"
                class="px-6 pb-6 font-body text-p1"
                style="color: var(--color-text-muted)"
              >
                {{ faq.answer }}
              </div>
            </Transition>
          </article>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
