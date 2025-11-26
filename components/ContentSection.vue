<script setup>
defineProps({
  title: String,
  backgroundColor: {
    type: String,
    default: 'var(--color-bg-main)'
  }
})
</script>

<template>
  <section class="w-full py-16 md:py-24" :style="{ backgroundColor }">
    <div class="mx-auto max-w-page px-6 md:px-8">
      <h2
        class="font-heading text-h2 md:text-h1 mb-8"
        style="color: var(--color-text-main)"
      >
        {{ title }}
      </h2>
      <div class="max-w-2xl">
        <slot />
      </div>
    </div>
  </section>
</template>
