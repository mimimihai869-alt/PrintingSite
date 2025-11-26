---
name: hero-animation-logic
description: Defines the cinematic hero section animation sequence for the printing company website including image montage, scroll locking, and reveal behavior. Use when implementing or modifying the hero section.
---

# Hero Section Animation Logic

## Overview
The hero section creates a cinematic introduction experience. Printing service cards are displayed in this section and link to their corresponding content sections.

## Animation Sequence

### Phase 1: Initial Load (Scroll Disabled)
1. On page load, show **only the images** — no other elements visible
2. **Disable scrolling** until all images have appeared
3. Images appear **one by one** in a montage sequence

### Phase 2: Reorganization (Scroll Still Disabled)
4. After montage finishes, images **reorganize into a horizontal row**
5. Row is positioned at the **bottom of the initial viewport**

### Phase 3: Scroll Enabled
6. **Enable scrolling** only after reorganization is complete
7. As user scrolls, the image row **moves upward** into its final hero position
8. **Navbar appears** only after scroll begins
9. **Hero text and additional elements** reveal after scroll begins

## Card Behavior

- Each card displays **descriptive text on hover**
- **Clicking any card** scrolls the page directly to its corresponding section
- Cards represent the **printing services** offered

## Implementation Notes

### Scroll Lock Pattern
```js
// Lock scroll
document.body.style.overflow = 'hidden'

// Unlock after montage complete
document.body.style.overflow = ''
```

### GSAP Timeline Structure
```js
const masterTimeline = gsap.timeline({
  onComplete: () => {
    // Enable scroll after montage
    document.body.style.overflow = ''
  }
})

// Phase 1: Montage
masterTimeline.to('.hero-image', {
  opacity: 1,
  stagger: 0.3,
})

// Phase 2: Reorganize to row
masterTimeline.to('.hero-image', {
  // Move to horizontal row positions
})
```

### Scroll-Triggered Reveals
```js
ScrollTrigger.create({
  trigger: '.hero',
  start: 'top top',
  onEnter: () => {
    // Reveal navbar
    gsap.to('.navbar', { y: 0, opacity: 1 })
    // Reveal hero text
    gsap.to('.hero-text', { opacity: 1, y: 0 })
  }
})
```

### Card Click Navigation
```js
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  section?.scrollIntoView({ behavior: 'smooth' })
}
```

## Visual Guidelines

- The sequence should feel like a **cinematic introduction**
- Transitions should be **smooth and refined**
- The experience should convey a **high-quality service brand**
- Maintain narrative flow before transitioning to main site content

## Examples

### Correct Behavior
- Page loads → only images visible → scroll locked
- Images appear one by one → reorganize to row → scroll unlocks
- User scrolls → navbar fades in → hero text reveals
- Hover card → see service description
- Click card → smooth scroll to that service section

### Incorrect Behavior
- ❌ Showing navbar immediately on load
- ❌ Allowing scroll before montage completes
- ❌ Hero text visible during montage
- ❌ Cards without hover states
- ❌ Cards that don't link to sections
