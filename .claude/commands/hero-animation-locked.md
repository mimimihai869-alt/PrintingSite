---
name: hero-animation-locked
description: LOCKED SPECIFICATION - Do not modify hero animation without explicit user permission. This defines the exact animation behavior that must be preserved.
---

# Hero Animation - LOCKED SPECIFICATION

## ⚠️ CRITICAL WARNING
**DO NOT MODIFY THIS ANIMATION WITHOUT EXPLICIT USER PERMISSION**

This animation has been finalized and locked. Any changes to timing, easing, or behavior require direct user approval.

## Animation Sequence (LOCKED)

### Phase 1: Card Slide-In
- **Start position**: `x: '120vw'` (off-screen right)
- **End position**: `x: 0` (centered)
- **Vertical position**: `y: 0` (centered vertically)
- **Duration**: `0.6s`
- **Stagger**: `0.35s` between each card
- **Easing**: `power2.out`
- **Rotation**: `0` (no rotation)
- **Scale**: `1` (full size)

### Phase 2: Scale Down & Carousel Formation
- **Target scale**: `0.3` (30% of original size)
- **Horizontal arrangement**: Cards spread horizontally in carousel formation
- **Vertical position**: `y: '20vh'` (moved down)
- **Duration**: `1s`
- **Stagger**: `0.03s`
- **Easing**: `power3.inOut`
- **Delay before start**: `+=0.3s`

### Phase 3: Text Fade-In
- **Opacity**: `0` → `1`
- **Y position**: `50px` → `0`
- **Duration**: `0.8s`
- **Easing**: `power2.out`
- **Timing**: Starts `-=0.5s` (overlaps with Phase 2)

### Transition to Final State
- **Montage fade out**: `0.5s`
- **Carousel fade in**: `0.6s`
- **sessionStorage key**: `heroAnimationPlayed`

## Session Storage Behavior (LOCKED)
- Animation plays ONCE per browser session
- Uses `sessionStorage.getItem('heroAnimationPlayed')`
- If already played: Shows final carousel state immediately
- If not played: Runs full animation sequence
- Scroll is LOCKED during animation
- Scroll UNLOCKS when animation completes

## Card Specifications (LOCKED)
- **Size during montage**: `60vw × 70vh`
- **Final carousel cards**: `280px width, 3:4 aspect ratio`
- **Total cards**: 11 services
- **Border**: `3px solid var(--color-accent-green)` (montage)
- **Border**: `2px solid var(--color-accent-green)` (carousel)

## DO NOT CHANGE
- ❌ Do NOT adjust timing (durations, staggers, delays)
- ❌ Do NOT change easing functions
- ❌ Do NOT modify scroll lock behavior
- ❌ Do NOT alter sessionStorage logic
- ❌ Do NOT add new animation phases
- ❌ Do NOT remove existing phases

## When Changes Are Allowed
✅ ONLY when user explicitly requests animation changes
✅ User must specifically say "change the animation" or similar
✅ General requests like "make it smoother" or "improve the site" do NOT grant permission

## File Location
`/home/user/PrintingSite/components/HeroSection.vue`

Lines 37-127 contain the animation logic.

## Last Locked Date
2025-11-26

---

**Remember**: This is a LOCKED specification. Do not deviate without explicit user permission.
