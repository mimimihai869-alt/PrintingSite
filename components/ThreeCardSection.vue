<script setup>
defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="w-full py-16 md:py-24" style="background-color: var(--color-bg-alt)">
    <div class="mx-auto max-w-page px-6 md:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="(card, index) in cards"
          :key="index"
          class="p-8 rounded-lg"
          style="background-color: var(--color-bg-main); border: 2px solid var(--color-accent-green)"
        >
          <h3 class="font-heading text-h4 mb-4" style="color: var(--color-accent-green)">
            {{ card.title }}
          </h3>
          <p class="font-body text-p1" style="color: var(--color-text-muted)">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
