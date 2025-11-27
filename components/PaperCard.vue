<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default', // 'default', 'accent-left', 'accent-top'
  }
})
</script>

<template>
  <div
    :class="[
      'paper-card',
      `paper-card--${variant}`
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
/* Base paper card with realistic shadow and texture */
.paper-card {
  /* Soft rounded corners - not childish */
  border-radius: 12px;

  /* Light paper background */
  background-color: #FAF8F5;

  /* Generous internal padding */
  padding: 2rem;

  /* Realistic paper shadow - lifted from page */
  box-shadow:
    /* Main shadow - soft and wide spread */
    0 8px 24px -8px rgba(74, 74, 74, 0.12),
    /* Edge shadow - darker near card edges */
    0 2px 8px -2px rgba(74, 74, 74, 0.08),
    /* Subtle lift shadow */
    0 1px 3px rgba(74, 74, 74, 0.04);

  /* Very subtle paper texture */
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(74, 74, 74, 0.015) 2px,
      rgba(74, 74, 74, 0.015) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(74, 74, 74, 0.015) 2px,
      rgba(74, 74, 74, 0.015) 4px
    );

  /* Subtle tilt for realism - tiny variation */
  transform: rotate(0.2deg);

  /* Smooth transitions */
  transition: all 0.3s ease;
  position: relative;
}

/* Hover state - slightly more lifted */
.paper-card:hover {
  transform: rotate(0deg) translateY(-2px);
  box-shadow:
    0 12px 32px -8px rgba(74, 74, 74, 0.15),
    0 4px 12px -2px rgba(74, 74, 74, 0.1),
    0 2px 4px rgba(74, 74, 74, 0.06);
}

/* Variant with left accent border */
.paper-card--accent-left {
  border-left: 4px solid var(--color-accent-green);
  transform: rotate(-0.1deg);
}

.paper-card--accent-left:hover {
  transform: rotate(0deg) translateY(-2px);
}

/* Variant with top accent border */
.paper-card--accent-top {
  border-top: 4px solid var(--color-accent-green);
  transform: rotate(0.15deg);
}

.paper-card--accent-top:hover {
  transform: rotate(0deg) translateY(-2px);
}

/* Alternate tilt for every other card (applied via nth-child in parent) */
.paper-card:nth-child(even) {
  transform: rotate(-0.2deg);
}

.paper-card:nth-child(even):hover {
  transform: rotate(0deg) translateY(-2px);
}

/* Grid alignment helper */
.paper-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  pointer-events: none;
}
</style>
