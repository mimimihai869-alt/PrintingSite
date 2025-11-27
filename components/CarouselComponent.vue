<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  visibleCount: {
    type: Number,
    default: 5
  },
  itemWidth: {
    type: String,
    default: '280px'
  }
})

const currentIndex = ref(0)

const canGoPrev = computed(() => currentIndex.value > 0)
const canGoNext = computed(() => currentIndex.value < props.items.length - props.visibleCount)

const prev = () => {
  if (canGoPrev.value) {
    currentIndex.value--
  }
}

const next = () => {
  if (canGoNext.value) {
    currentIndex.value++
  }
}

const translateX = computed(() => {
  const width = parseInt(props.itemWidth)
  const gap = 16 // gap-4 in pixels
  return -(currentIndex.value * (width + gap))
})
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <!-- Carousel Container -->
    <div class="relative px-12">
      <div class="overflow-hidden">
        <div
          class="flex gap-4 transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            :style="{ minWidth: itemWidth, maxWidth: itemWidth }"
          >
            <slot name="item" :item="item" :index="index" />
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows - nudged 10px inward to prevent clipping -->
    <button
      v-if="canGoPrev"
      @click="prev"
      class="absolute left-[10px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 z-10"
      style="background-color: var(--color-accent-green); color: var(--color-bg-main)"
      aria-label="Previous"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      v-if="canGoNext"
      @click="next"
      class="absolute right-[10px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 z-10"
      style="background-color: var(--color-accent-green); color: var(--color-bg-main)"
      aria-label="Next"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
