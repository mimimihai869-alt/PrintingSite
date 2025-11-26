<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // Button content
  label: {
    type: String,
    default: ''
  },

  // Loading state
  loading: {
    type: Boolean,
    default: false
  },

  // Disabled state
  disabled: {
    type: Boolean,
    default: false
  },

  // Size variants
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },

  // HTML type attribute
  type: {
    type: String,
    default: 'button'
  }
})

const emit = defineEmits(['click'])

const isPressed = ref(false)

const sizeClasses = computed(() => {
  const sizes = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg'
  }
  return sizes[props.size]
})

const isDisabled = computed(() => props.disabled || props.loading)

const handleClick = (event) => {
  if (!isDisabled.value) {
    // Press animation
    isPressed.value = true
    setTimeout(() => {
      isPressed.value = false
    }, 150)

    emit('click', event)
  }
}
</script>

<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :class="[
      'base-button',
      sizeClasses,
      {
        'base-button--pressed': isPressed,
        'base-button--loading': loading,
        'base-button--disabled': isDisabled
      }
    ]"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <span v-if="loading" class="base-button__spinner">
      <svg
        class="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>

    <!-- Button content -->
    <span :class="{ 'opacity-0': loading }">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<style scoped>
.base-button {
  /* Base styling */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  /* Pill shape */
  border-radius: 999px;

  /* Typography */
  font-family: 'Raleway', system-ui, sans-serif;
  font-weight: 500;
  letter-spacing: normal;
  text-align: center;

  /* Colors */
  background-color: transparent;
  color: var(--color-6);
  border: 1px solid var(--color-6);

  /* Shadow */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);

  /* Transitions */
  transition:
    background-color 250ms ease-out,
    color 250ms ease-out,
    box-shadow 250ms ease-out,
    transform 250ms ease-out,
    border-color 250ms ease-out;

  /* Interaction */
  cursor: pointer;
  user-select: none;
  outline: none;
}

/* Hover state */
.base-button:hover:not(.base-button--disabled) {
  background-color: var(--color-6);
  color: var(--color-cream);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);
  transform: translateY(-2px);

  /* Subtle inner sheen */
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 50%
  );
}

/* Active/Pressed state */
.base-button:active:not(.base-button--disabled),
.base-button--pressed {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);

  /* Slightly darker */
  filter: brightness(0.95);
}

/* Focus state */
.base-button:focus-visible {
  outline: none;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.12),
    0 0 0 3px rgba(122, 143, 116, 0.35);
}

/* Disabled state */
.base-button--disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none !important;
}

.base-button--disabled:hover {
  background-color: transparent;
  color: var(--color-6);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}

/* Loading state */
.base-button--loading {
  cursor: wait;
}

.base-button__spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Press animation enhancement */
@keyframes press-bounce {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(1px) scale(0.97);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

.base-button:active:not(.base-button--disabled) {
  animation: press-bounce 150ms ease-out;
}
</style>
