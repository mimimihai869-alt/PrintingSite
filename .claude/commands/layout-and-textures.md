---
name: layout-and-textures
description: Defines the clean editorial layout system with textured backgrounds, alignment rules, and responsive patterns for the printing website. Use when creating or modifying page sections.
---

# Layout and Textures for the Nuxt Printing Website

## Goal
Recreate a clean editorial layout with strong left-right alignment, generous white space, and consistent textured backgrounds.

## Global Layout

### Content Container
- **Max width**: 1120-1200px (update from current 1440px)
- **Horizontal centering**: `mx-auto`
- **Horizontal padding**: 1.5-2rem on each side
- **Full-width backgrounds** with inner content containers

### Alignment
- Align headings and text on same vertical grid lines across sections
- Consistent vertical rhythm with same spacing scale
- Left-aligned text blocks for editorial coherence

## Backgrounds and Textures

### Texture Guidelines
- **Style**: Soft, paper-like textures
- **Contrast**: Subtle, low contrast
- **Tiling**: No visible tiling
- **Legibility**: Never distract from text
- **Consistency**: Same family, slight variations per section

### Texture Usage Examples
- Light green textured band → Story section
- Very light cream textured → Generic content
- Three subtle variations → Three-column cards
- One main background color per section

### Implementation
- Backgrounds are full width
- All text and images stay inside max-width container
- Use existing color tokens as base

## Typography and Alignment

### Fonts
- **Headings**: EB Garamond (serif)
- **Body**: Raleway (sans-serif)

### Rules
- Headings left-aligned by default
- Comfortable line length for paragraphs (avoid wide lines)
- Consistent heading sizes and margins
- Maintain hierarchy across all sections

## Section Patterns

### Story Section
**Background**: Green textured band

**Layout**: Two columns inside max-width container

**Left Column**:
- Section heading (e.g., "Povestea Noastră")
- 2-3 paragraphs of text
- One primary button (global pill style)

**Right Column**:
- One main image
- Vertically centered with text block

**Mobile**: Stack vertically (text first, image second)

### Services Intro Section
**Background**: Light cream textured band

**Layout**: One column, left-aligned

**Content**:
- Heading (e.g., "Ce oferim")
- Paragraph text
- Optional button
- Generous white space on right

### Service Detail Columns
**Background**: Same cream band

**Layout**: Two columns

**Left Column**: Intro copy

**Right Column**:
- Service block heading (e.g., "Offset Printing")
- Paragraph text
- Secondary button

**Pattern**: Repeatable for multiple services

### Three Highlight Cards
**Background**: Full-width subtle textured band

**Layout**: Three equal-width cards (desktop)

**Each Card**:
- Own subtle texture (same family, different tone)
- Heading (e.g., "Design Custom")
- Short paragraph
- Internal padding
- Slightly rounded corners

**Mobile**: Stack vertically with consistent spacing

## Buttons
Use the global pill button style (already implemented):
- Base: Transparent bg, border + text use color-6
- Hover: Solid bg color-6, cream text, lift + shadow
- Reuse everywhere (Story, Services, Contact)

## Responsiveness

### Desktop/Large Tablet
- 2-3 column layouts as described
- Strong left-right margins
- Centered max-width container

### Tablet/Mobile
- Stack columns vertically
- Maintain background textures
- Preserve section structure
- Keep vertical rhythm and breathing space

## Consistency Rules

✓ Same max-width across all sections
✓ Same side padding everywhere
✓ Same vertical spacing scale
✓ Same heading hierarchy and fonts
✓ Same button component reused
✓ Same texture style (soft variations only)
✓ Never break left alignment
✓ Coherent editorial layout throughout

## Related Skills
- `site-design-system` — Color tokens and typography
- `global-coding-rules` — Vue 3 and Tailwind standards
- `page-structure` — Section order and HTML structure
