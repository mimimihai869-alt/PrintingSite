# LightningSphere Component

A performant Three.js-based lightning sphere hero background component for Nuxt 3.

## Features

- **Interactive Electric Effect**: Mouse proximity triggers localized static/lightning effects
- **Smooth Idle Animation**: Gentle bobbing and rotation when idle
- **Performance Optimized**:
  - Capped pixel ratio for high-DPI displays
  - Proper resource disposal on unmount
  - Tab visibility handling
  - WebGL fallback for unsupported browsers
- **Fully Customizable**: Props for intensity, animation speed, positioning, and scale

## Installation

Make sure Three.js is installed:

```bash
npm install three
```

## Basic Usage

```vue
<template>
  <div class="relative min-h-[80vh] overflow-hidden">
    <!-- Lightning Sphere Background -->
    <LightningSphere />

    <!-- Hero Content (appears above sphere) -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 class="font-heading text-h1 text-center mb-6" style="color: var(--color-text-main)">
        Your Hero Title
      </h1>
      <p class="font-body text-p1 text-center max-w-2xl mb-8" style="color: var(--color-text-muted)">
        Your hero description text
      </p>
      <BaseButton label="Get Started" />
    </div>
  </div>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `intensityMultiplier` | Number | `1.0` | Global multiplier for static effect intensity (0-2 recommended) |
| `bobAmplitude` | Number | `0.3` | Vertical bobbing distance in world units |
| `bobSpeed` | Number | `0.8` | Speed of idle bobbing animation |
| `sphereScale` | Number | `1.0` | Size multiplier for the sphere |
| `offsetX` | Number | `0.15` | Horizontal offset from center (0.15 ≈ 2/3 position) |
| `offsetY` | Number | `0` | Vertical offset from center |

## Advanced Example

```vue
<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#000510]">
    <!-- Custom configured lightning sphere -->
    <LightningSphere
      :intensity-multiplier="1.5"
      :bob-amplitude="0.5"
      :bob-speed="1.0"
      :sphere-scale="1.2"
      :offset-x="0.2"
      :offset-y="-0.1"
    />

    <!-- Your hero content -->
    <div class="relative z-10">
      <!-- Content here -->
    </div>
  </div>
</template>
```

## Styling Tips

### Background Colors

The sphere looks best against dark backgrounds. Recommended background colors:
- `#0a1628` - Deep navy (matches sphere base)
- `#000510` - Near black
- Gradient: `bg-gradient-to-b from-[#0a1628] to-[#000510]`

### Text Visibility

Ensure hero text has sufficient contrast:
```css
/* Add text shadow for better readability */
.hero-title {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
```

### Positioning

The component uses `position: absolute` and fills its container. Make sure the parent has `position: relative`:

```vue
<div class="relative">
  <LightningSphere />
  <div class="relative z-10">
    <!-- Content -->
  </div>
</div>
```

## Performance Notes

### Mobile Optimization

The component automatically:
- Caps pixel ratio at 1.5 on high-DPI displays
- Reduces visual complexity on smaller screens
- Falls back to gradient background if WebGL is unavailable

### Resource Management

The component properly cleans up all Three.js resources on unmount:
- Geometries are disposed
- Materials are disposed
- Animation frame is cancelled
- Event listeners are removed

### Browser Compatibility

- **WebGL Required**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Fallback**: Shows radial gradient if WebGL is unavailable
- **Mobile**: Works on iOS Safari and Chrome Android

## Visual Design

### Colors
- **Sphere Base**: Deep navy `#0a1628`
- **Electric Glow**: Cyan `#00d9ff`
- **Effect Style**: Localized around sphere, never covers entire screen

### Animation
- **Idle**: Gentle vertical bobbing, slow Y-axis rotation
- **Interactive**: Electric intensity increases near mouse cursor
- **Smooth**: All transitions are eased and subtle

## Troubleshooting

### Sphere not visible
- Check that parent container has dimensions (height set)
- Ensure component is not covered by other elements (check z-index)
- Verify WebGL is supported in browser console

### Performance issues
- Reduce `sphereScale` to decrease geometry complexity
- Lower `intensityMultiplier` to reduce shader calculations
- Check that only one instance is mounted at a time

### Mouse interaction not working
- Ensure parent container doesn't have `pointer-events: none`
- Check that canvas is receiving pointer events
- Verify component is mounted and visible

## Examples in Project

See these pages for implementation examples:
- Homepage hero section (if implemented)
- About page hero (if implemented)

## Technical Details

**Three.js Scene:**
- Single sphere with custom shader material
- 64x64 segment sphere geometry for smooth appearance
- Procedural noise-based electric pattern
- Small particle system (50 points) for sparks

**Shaders:**
- Vertex shader: Position displacement based on 3D noise
- Fragment shader: Electric vein pattern with rim lighting
- Real-time uniforms: time, intensity, colors

**Lighting:**
- Ambient light (low intensity)
- Directional light (shapes sphere)
- Hemisphere light (soft top/bottom tint)
- No shadows for performance
