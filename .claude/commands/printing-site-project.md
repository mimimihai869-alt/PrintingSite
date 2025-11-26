---
name: printing-site-project
description: Defines the overall project context, visual identity, and interaction patterns for the printing company presentation website. Use as the primary reference for understanding project goals and behavior.
---

# Printing Company Website — Project Summary

## Overview
This is a **presentation website for a printing company**. The visual identity and interactions should reflect a professional, high-quality service brand.

## Visual Identity

### Foundation
- Based on the project's **color tokens** (see `site-design-system` skill)
- Uses agreed **typography rules** (EB Garamond for headings, Raleway for body)
- Each section follows a **unified visual identity**

### Imagery & Textures
Images and textures throughout the site should relate to **printing**:
- Papers and paper textures
- Inks and ink splashes
- Printing machines
- Materials and finishes
- Print samples and products

## Key Interactions

### Hero Section
- Cinematic **montage of images** on load
- Images **reorganize** and respond to user scroll
- See `hero-animation-logic` skill for full details

### Navbar
- **Hidden initially**
- Appears only **after scroll begins**

### Service Cards
- Display **hover text** revealing additional information
- **Clicking scrolls** to the corresponding section

### General Interactions
- All interactions should feel **clean and modern**
- Page transitions should be **subtle and refined**
- Animations should convey **quality and professionalism**

## Technical Stack
- **Nuxt 3** + **Vue 3** (Composition API with `<script setup>`)
- **Tailwind CSS** for styling
- **GSAP** + **ScrollTrigger** for animations
- See `global-coding-rules` skill for standards

## Related Skills
- `site-design-system` — Color tokens, typography, spacing
- `global-coding-rules` — Coding standards and patterns
- `hero-animation-logic` — Hero section animation sequence

## Brand Tone

### Do
- Professional and trustworthy
- Clean and modern aesthetics
- Smooth, refined animations
- High attention to detail

### Don't
- Flashy or gimmicky effects
- Cluttered layouts
- Jarring transitions
- Generic stock imagery unrelated to printing

## Examples

### Good Section Pattern
```vue
<template>
  <section
    id="offset-printing"
    class="mx-auto max-w-page px-4 py-16"
    style="background-color: var(--color-bg-alt)"
  >
    <h2 class="font-heading text-h2" style="color: var(--color-text-main)">
      Offset Printing
    </h2>
    <p class="font-body text-p1" style="color: var(--color-text-muted)">
      High-quality offset printing for premium results...
    </p>
    <!-- Service details, images of printing process -->
  </section>
</template>
```

### Service Card Pattern
```vue
<template>
  <article
    class="group cursor-pointer relative"
    @click="scrollToSection('offset-printing')"
  >
    <img src="/images/offset-sample.jpg" alt="Offset printing" />
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
      style="background-color: var(--color-accent-green)"
    >
      <p class="font-body text-p2" style="color: var(--color-bg-main)">
        Premium offset printing services
      </p>
    </div>
  </article>
</template>
```
