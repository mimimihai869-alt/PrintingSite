---
name: global-coding-rules
description: Enforces coding standards for the Nuxt 3 printing company website including Vue 3 Composition API, Tailwind CSS, GSAP animations, and component architecture. Use when writing any code for this project.
---

# Global Coding Rules

## Overview
These rules govern all code written for the printing company presentation website.

## Framework & Architecture

- Use **Nuxt 3** with **Vue 3**
- Use `<script setup>` with the **Composition API**
- Use **Tailwind CSS** for layout, spacing, and typography
- Use **semantic HTML** structure: `<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, `<footer>`
- Use a **component-based structure** with reusable building blocks (cards, buttons, sections)

## Styling Rules

- **Do NOT hardcode colors** — always use CSS variables or tokens
- If any value repeats, treat it as a **token**, not a magic number
- Reference the `site-design-system` skill for approved tokens
- Avoid inline styles unless absolutely required
- Follow consistent naming conventions

## Animation Guidelines

- Use **GSAP timelines** and **ScrollTrigger** for animations
- **Cleanup animations properly** when components unmount (use `onUnmounted` lifecycle hook)
- Use **transform-based animations**: `x`, `y`, `opacity`, `scale`, `rotation`
- **Avoid animating properties that cause layout shifts** (width, height, top, left, margin, padding)

## Examples

### Correct Component Structure
```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.card', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
      }
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert() // Proper cleanup
})
</script>

<template>
  <section ref="sectionRef" class="mx-auto max-w-page px-4">
    <h2 class="font-heading text-h2">Our Services</h2>
    <div class="card font-body text-p1">
      <!-- content -->
    </div>
  </section>
</template>
```

### Incorrect Patterns
```vue
<!-- ❌ WRONG: Options API instead of Composition API -->
<script>
export default {
  data() { return {} }
}
</script>

<!-- ❌ WRONG: Animating layout properties -->
gsap.to('.box', { width: 200, marginLeft: 50 })

<!-- ❌ WRONG: Missing animation cleanup -->
onMounted(() => {
  gsap.to('.element', { x: 100 })
  // No cleanup in onUnmounted!
})

<!-- ❌ WRONG: Non-semantic HTML -->
<div class="header">...</div>
<div class="nav">...</div>
```
