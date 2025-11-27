<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: String,
    default: 'square', // 'square' (1:1) or 'portrait' (9:16)
  },
  showTextOnHover: {
    type: Boolean,
    default: false
  },
  alt: {
    type: String,
    default: ''
  }
})

const aspectClass = (ratio) => {
  switch (ratio) {
    case 'portrait':
      return 'aspect-[9/16]'
    case 'square':
      return 'aspect-square'
    default:
      return 'aspect-square'
  }
}
</script>

<template>
  <div
    :class="['image-card', aspectClass(aspectRatio)]"
    class="rounded-xl overflow-hidden relative transition-all duration-500 group-hover:scale-105 cursor-pointer"
  >
    <!-- Background Image -->
    <img
      :src="image"
      :alt="alt || title"
      class="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 rounded-xl"
    />

    <!-- Hover Overlay with optional text -->
    <div
      v-if="showTextOnHover && (title || description)"
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center rounded-xl"
      style="background: linear-gradient(135deg, rgba(122, 143, 116, 0.95) 0%, rgba(122, 143, 116, 0.85) 100%)"
    >
      <h3
        v-if="title"
        class="font-heading text-h4 mb-3 font-bold"
        style="color: var(--color-bg-main)"
      >
        {{ title }}
      </h3>
      <p
        v-if="description"
        class="font-body text-p1"
        style="color: var(--color-bg-main)"
      >
        {{ description }}
      </p>
    </div>

    <!-- Simple overlay without text -->
    <div
      v-else
      class="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-xl"
      style="background-color: var(--color-accent-green)"
    ></div>
  </div>
</template>

<style scoped>
.image-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.group:hover .image-card {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
