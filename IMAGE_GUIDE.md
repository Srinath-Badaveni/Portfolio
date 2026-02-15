# 📸 Image Guide — Color Grading & Placement

Your portfolio uses a **dark theme** with **neon green (#00ff88) accents**. All images
are rendered with CSS blending so they melt into the dark background — no harsh borders
or pasted-on look. Follow the instructions below for the best results.

---

## Folder Structure

```
public/
└── images/
    ├── profile/
    │   └── profile.jpg        ← Your headshot / portrait
    └── projects/
        ├── fintrack.jpg       ← FinTrack screenshot
        ├── rideshare.jpg      ← RideShare screenshot
        ├── tourist-places.jpg ← Tourist Places screenshot
        ├── movies-hub.jpg     ← Movies Hub screenshot
        ├── rock-paper-scissors.jpg
        └── amazon-clone.jpg
```

---

## Color Grading Instructions

### Profile Photo (`profile.jpg`)

| Property       | Value / Guideline                            |
| -------------- | -------------------------------------------- |
| **Resolution** | 800 × 800 px minimum (square)                |
| **Format**     | `.jpg` or `.webp` (< 200 KB)                 |
| **Background** | Dark / black / very dark gray                |
| **Brightness** | Reduce to **80–85 %**                        |
| **Contrast**   | Increase to **110–115 %**                    |
| **Saturation** | Lower to **80–90 %** (muted look)            |
| **Color temp** | Slightly **cool** (shift toward blue/green)  |
| **Lighting**   | Soft directional light, shadows on dark side |

> **Tip:** Take the photo against a pure black or very dark wall.
> The CSS applies `mix-blend-mode: luminosity` and radial/linear
> gradient overlays to fade the edges into the background automatically.

### Project Screenshots (`projects/*.jpg`)

| Property       | Value / Guideline                       |
| -------------- | --------------------------------------- |
| **Resolution** | 1200 × 675 px minimum (16 : 9)          |
| **Format**     | `.jpg` or `.webp` (< 300 KB)            |
| **Background** | Prefer dark UI / dark mode if available |
| **Brightness** | Reduce to **80–85 %**                   |
| **Contrast**   | Increase to **110 %**                   |
| **Saturation** | Lower to **85–90 %**                    |
| **Highlights** | Pull down slightly to avoid blow-outs   |
| **Shadows**    | Crush blacks a little (lift to ~5 %)    |

> **Tip:** Capture the most interesting page of each project.
> Crop to 16:9 ratio for wide cards and 4:3 for smaller cards.
> The blending CSS fades the edges, so keep the important content
> toward the center of the image.

---

## How Blending Works (CSS)

The portfolio applies these CSS effects automatically:

```css
/* On the image itself */
filter: brightness(0.85) contrast(1.1) saturate(0.9);
mix-blend-mode: luminosity;

/* Radial fade — edges dissolve into the dark background */
background: radial-gradient(ellipse at center, transparent 30%, #0a0a0a 100%);

/* Bottom fade — image melts into the content below */
background: linear-gradient(to bottom, transparent 40%, #0a0a0a 95%);
```

This means:

- **Edges** fade away smoothly (no hard border).
- **Colors** are muted/desaturated to match the dark palette.
- **Hover** slightly brightens and zooms the image.

---

## Quick Color Grading (Free Tools)

### Using Photopea (free, browser-based)

1. Open image at [photopea.com](https://photopea.com)
2. `Image → Adjustments → Brightness/Contrast`
   - Brightness: **-15**
   - Contrast: **+10**
3. `Image → Adjustments → Hue/Saturation`
   - Saturation: **-15**
4. `Image → Adjustments → Color Balance`
   - Shift midtones toward **Cyan** by +5
5. Export as `.jpg`, quality 80 %

### Using GIMP (free desktop app)

1. `Colors → Brightness-Contrast` → Brightness -15, Contrast +10
2. `Colors → Hue-Saturation` → Saturation -15
3. `Colors → Color Balance` → Cyan +5 in midtones
4. Export as `.jpg`, quality 80

### Using macOS Preview / Windows Photos

- Reduce **brightness** slider slightly
- Reduce **saturation** slider slightly
- Increase **contrast** slider slightly
- Save / export

---

## Naming Conventions

| Project             | File Name                 |
| ------------------- | ------------------------- |
| Profile photo       | `profile.jpg`             |
| FinTrack            | `fintrack.jpg`            |
| RideShare           | `rideshare.jpg`           |
| Tourist Places      | `tourist-places.jpg`      |
| Movies Hub          | `movies-hub.jpg`          |
| Rock Paper Scissors | `rock-paper-scissors.jpg` |
| Amazon Clone        | `amazon-clone.jpg`        |

---

## Summary

1. Put images in `public/images/profile/` or `public/images/projects/`
2. Use the naming convention above
3. Apply the color grading (darken, desaturate, cool tones)
4. Keep images under 300 KB for fast loading
5. The CSS blending does the rest — no manual edge fading needed!
