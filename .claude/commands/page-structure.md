---
name: page-structure
description: Defines the required page structure and component order for the Nuxt printing website homepage. Use when creating or organizing page layout and sections.
---

# Page Structure for the Nuxt Printing Website

## Overview
This skill defines the exact page structure for the Home page. Each section becomes a dedicated Vue component inside the page layout.

## Page Structure (Required Order)

1. **Header** (Navigation)
2. **Hero Section** (Cinematic montage with service cards)
3. **Welcome Section** (Introduction/greeting)
4. **About Us** (Company information and values)
5. **Our Services** (Detailed service offerings)
6. **Our Work** (Portfolio/gallery)
7. **Testimonials** (Client reviews)
8. **Contact Us** (Contact form and information)
9. **Footer** (Legal, links, contact info)

## Optional Recommended Sections

- **Partners or Trusted By** (Client logos)
- **FAQ Section** (Frequently asked questions)

## Implementation Rules

### 1. Component Order
- Components must follow the page order exactly as listed
- No deviations from the structure without explicit approval

### 2. Semantic HTML
- Each section uses its own `<section>` wrapper
- Use proper HTML5 semantic tags: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`

### 3. Styling
- Use Tailwind CSS for layout and spacing
- **No inline colors** — always use CSS tokens from design system
- Reference colors via `var(--color-name)`

### 4. Animations
- All scroll animations use GSAP
- Follow animation cleanup patterns (onUnmounted hooks)

### 5. Images
- All images use `<NuxtImg>` component
- Optimize for performance and responsive display

## Component Structure Example

```vue
<template>
  <section id="section-name" class="mx-auto max-w-page px-4 py-16">
    <h2 class="font-heading text-h2" style="color: var(--color-text-main)">
      Section Title
    </h2>
    <div class="content">
      <!-- Section content -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
// Component logic
</script>
```

## Section ID Convention

- `#hero` - Hero Section
- `#welcome` - Welcome Section
- `#about` - About Us
- `#services` - Our Services
- `#work` - Our Work
- `#testimonials` - Testimonials
- `#contact` - Contact Us

## Related Skills

- `site-design-system` — Color tokens and typography
- `global-coding-rules` — Coding standards
- `hero-animation-logic` — Hero section behavior
- `printing-site-project` — Project context
