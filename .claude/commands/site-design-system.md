---
name: site-design-system
description: Enforces the printing company website's design tokens including colors, typography, spacing, and layout constraints. Use when creating or modifying any UI components, styles, or visual elements.
---

# Site Design System

## Overview
This skill defines the immutable design tokens for the printing company presentation website. These values must not be changed or overridden.

## Color Tokens

All colors must be referenced via CSS variables. Never use hardcoded hex values in components.

```css
:root {
  /* Neutrals / backgrounds */
  --color-bg-main: #FAF7F3;
  --color-bg-alt:  #F3EEE7;
  --color-border:  #D0C8C0;
  --color-text-muted: #4A4A4A;
  --color-text-main:  #111111;

  /* Accents */
  --color-accent-green: #7A8F74;
  --color-accent-soft:  #D2E4C7;
}
```

### Rules
- Use ONLY these approved color tokens
- Do NOT introduce new colors outside this palette
- Do NOT use blue or other unrelated colors
- Always reference colors through CSS variables, never raw hex values

## Typography

### Font Families (Tailwind Config)

```js
extend: {
  fontFamily: {
    heading: ['"EB Garamond"', 'serif'],
    body: ['Raleway', 'system-ui', 'sans-serif'],
  },
}
```

### Usage
- Use `class="font-heading"` for all headings
- Use `class="font-body"` for paragraphs and UI text

### Font Sizes (Tailwind Config)

```js
extend: {
  fontSize: {
    'h1': ['36px', { lineHeight: '1.1' }],
    'h2': ['33px', { lineHeight: '1.15' }],
    'h3': ['30px', { lineHeight: '1.2' }],
    'h4': ['26px', { lineHeight: '1.25' }],
    'h5': ['22px', { lineHeight: '1.3' }],
    'h6': ['17px', { lineHeight: '1.4' }],
    'p1': ['14px', { lineHeight: '1.6' }],
    'p2': ['13px', { lineHeight: '1.6' }],
    'p3': ['11px', { lineHeight: '1.6' }],
  },
}
```

## Layout

### Max Width (Tailwind Config)

```js
extend: {
  maxWidth: {
    page: '1440px',
  },
}
```

### Page Container Pattern

```html
<div class="mx-auto max-w-page px-4">
  <!-- page content -->
</div>
```

## Examples

### Correct Usage
```vue
<template>
  <h1 class="font-heading text-h1" style="color: var(--color-text-main)">
    Welcome
  </h1>
  <p class="font-body text-p1" style="color: var(--color-text-muted)">
    Description text
  </p>
</template>
```

### Incorrect Usage
```vue
<!-- ❌ WRONG: hardcoded colors -->
<h1 style="color: #111111">Welcome</h1>

<!-- ❌ WRONG: unapproved color -->
<button style="background: blue">Click</button>

<!-- ❌ WRONG: missing font class -->
<h1>Welcome</h1>
```
