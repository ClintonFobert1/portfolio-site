# Duotone Halftone Engraving — Style Guide

A reusable reference for generating art in the "blueprint poster" style: classical engraving line-work rendered in a single saturated duotone with halftone grain. Think underground gig posters, techno flyers, and streetwear drop graphics (Kanye/Yeezy-era visuals, Warp Records sleeves) crossed with 19th-century copperplate illustration.

---

## Core Visual Principles

**1. Duotone color, no exceptions**
- One saturated color (electric blue, blood red, acid green, deep violet) + white/black.
- No gradients beyond what halftone dot density naturally creates.
- Background and figure share the same color family — contrast comes from value, not hue.

**2. Halftone / screen-print texture**
- The image should look like it was printed, not rendered — visible dot patterns, fine cross-hatching, or line-screen grain doing all the shading work.
- Slightly degraded, high-contrast, almost photocopied quality is a feature, not a flaw.

**3. Classical/mythological source material**
- Figures read like woodcuts, copperplate engravings, or academic anatomical studies — sculptural, muscular, draped in classical fabric, often mythological or allegorical (gods, angels, allegory figures, statuary).
- Fine cross-hatch linework over flat modern illustration or 3D rendering.

**4. Radiant / emblematic motifs**
- Sunburst rays, halos, radiating linework, or heraldic framing devices around the central figure.
- Gives an occult, tarot-card, or devotional-poster energy — the figure feels like an icon or emblem, not a snapshot.

**5. Bold minimal typography**
- Large serif or engraved-style display type, all-caps, generous line-height.
- Type sits in flat color fields (no texture) so it reads clean against the busy engraving.

---

## Do / Don't

| Do | Don't |
|---|---|
| One dominant ink color per piece | Multi-color gradients or rainbow palettes |
| Halftone dots/line-screen for all shading | Smooth airbrushed shading or soft blur |
| Classical/engraved figure reference | Flat vector illustration or cartoon style |
| High contrast, punchy value range | Muted, low-contrast, pastel tones |
| Radiating lines, rays, or halo devices | Busy background scenery or environments |
| Distressed/print-grain texture | Perfectly clean, glossy digital finish |

---

## AI Image Prompt Template

Use this as a base and swap the bracketed subject:

```
[SUBJECT — classical mythological figure, statue, or anatomical study]
in the style of a duotone halftone engraving poster,
single saturated [COLOR] ink on white background,
fine cross-hatch engraving linework, visible halftone dot/line-screen texture,
radiating sunburst lines emanating from the figure,
high contrast, gritty print-grain, distressed screen-print quality,
no gradients, no additional colors, poster composition,
inspired by 19th-century copperplate engraving and modern riso-print gig posters
```

**Example, filled in:**
> A winged messenger figure with multiple arms, in the style of a duotone halftone engraving poster, single saturated electric-blue ink on white background, fine cross-hatch engraving linework, visible halftone dot texture, radiating sunburst lines emanating outward, high contrast, gritty print-grain, distressed screen-print quality, no gradients, poster composition, inspired by 19th-century copperplate engraving and modern riso-print gig posters.

### Tool-specific notes
- **Midjourney**: add `--style raw` for less AI-smoothing, and stack `halftone`, `engraving`, `riso print`, `duotone poster` as keyword tags early in the prompt (front-loaded keywords carry more weight).
- **DALL·E / GPT image**: describe the *printing process* explicitly ("as if silk-screened," "halftone dot pattern visible on close inspection") — it responds better to process language than style-name-dropping alone.
- **Stable Diffusion**: this style has strong overlap with textual-inversion communities around "riso print" and "engraving poster" — a moderate CFG scale (7–9) keeps the linework crisp without over-baking texture into mush.

---

## Color Palette Starting Points

Pick ONE per piece:

- **Electric Blue** — `#0000F2` / `#1400FF` (the Hermes Agent reference)
- **Blood Red** — `#C8102E`
- **Acid Green** — `#39FF14`
- **Violet** — `#5B0BB5`
- **Amber** — `#DD8E35`

Background is white or black; figure and effects render entirely in the chosen color at varying opacity/dot-density to fake tonal range.

---

## CSS/Design Token Starter (for web use)

```css
:root {
  --duotone-ink: #0000F2;
  --duotone-bg: #ffffff;
  --duotone-contrast: #000814;
}

.halftone-hero {
  background: var(--duotone-ink);
  color: var(--duotone-bg);
  /* apply halftone texture via SVG filter or a dot-pattern PNG overlay
     blended with mix-blend-mode: multiply for authentic print feel */
}
```

For real halftone texture on the web, the most efficient approach is a static pre-rendered PNG/SVG asset (generated via the AI prompt above or a halftone filter in Photoshop/Figma) rather than trying to fake it live in CSS — the dot-screen effect doesn't hold up well procedurally at small sizes.

---

## Quick Checklist Before Calling a Piece "Done"

- [ ] Only one ink color present (plus white/black)
- [ ] Shading comes entirely from dot density / line density, not gradients
- [ ] Subject has classical/sculptural/engraved quality
- [ ] Some kind of radiating or emblematic framing device present
- [ ] Texture reads as "printed" rather than "digitally rendered"
