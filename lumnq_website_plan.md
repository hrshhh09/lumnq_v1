# lumnq.com — Website Strategy & Layout

## 1. Product offering (self-serve software, not agency)

`product_context.md` describes a retainer agency. That doesn't fit a SaaS site, so lumnq is the **productized version of the same edge**:

> **lumnq: turn one product photo into scroll-stopping short videos, with the product looking exactly right in every frame.**

**Wedge:** product-accurate, ad-ready short video for e-commerce/D2C brands. Generic AI video tools (Runway, Pika, Kling apps) warp labels, logos and packaging. Product fidelity is the moat and the headline.

**Core features (the "modes"):**
| Mode | Input → Output |
|---|---|
| **Product Hero** | Packshot → cinematic 3D-style scene (5–10s) |
| **Static → Motion** | Existing static ad → animated video ad |
| **Hook Lab** | Winning video → 10 new first-3-second hooks |
| **Explainer** | Product + claims → ingredient/"how it works" short |
| **Remix / Resize** | Any output → 9:16, 1:1, 4:5 with captions + music |

**Supporting features:** Brand Kit (logo, fonts, colors, product library), batch generation, export presets for Meta/TikTok/Reels/Shorts, team workspaces.

**Pricing (credit-based):**
- **Free**: 3 videos, watermark
- **Creator $29/mo**: ~40 videos, 1 brand kit
- **Pro $99/mo** (featured): ~200 videos, batch, Hook Lab, 3 brands
- **Team $299/mo**: seats, API, priority render
- *(Optional "Done-for-you" link in the footer. The agency stays as an upsell and isn't the headline.)*

## 2. Site structure

**Pages:** `/` · `/product` (or one page per mode) · `/showcase` · `/pricing` · `/use-cases` (supplements, skincare, beverage, fashion) · `/blog` · `/login` / `/signup` → app

**Homepage, top to bottom:**
1. **Nav**: logo · Product ▾ · Showcase · Pricing · Login · **[Start free]**
2. **Hero**: big headline ("Your product. In motion. Perfectly."), subline, CTA plus a *drop your product image* box. Behind it, a full-bleed autoplay reel of 9:16 videos in a slow marquee.
3. **Logo strip**: "Used by brands in…"
4. **Before → after demo**: drag slider or scroll-scrubbed: packshot transforms into a finished video
5. **Modes grid**: 5 bento cards, each with a looping video on hover
6. **"Product stays perfect" section**: side-by-side generic AI (warped label) vs lumnq (crisp). This is the differentiator.
7. **How it works**: 3 steps: Upload → Pick a mode → Export everywhere
8. **Showcase wall**: masonry of vertical videos, filterable by category
9. **Metrics / testimonials**: "Cut creative cost 80%", "20 variants in 10 min"
10. **Pricing preview** + FAQ
11. **Final CTA**: giant type plus upload box again
12. **Footer**

## 3. Making it very aesthetic

**Direction: "cinematic dark studio".** The videos are the design, so the UI should frame them like a gallery.
- **Palette:** near-black `#0A0A0B`, off-white `#F2F0EB`, one signature accent (electric lumen-lime `#D4FF3A` or warm amber), soft radial "light leak" gradients that tie in with the name *lumen*
- **Type:** big editorial display serif or tight grotesk (e.g. *Instrument Serif* + *Inter Tight*, or *PP Neue Montreal*), with 96–160px headlines and italic accents on key words
- **Motion:** Lenis smooth scroll, GSAP/Framer Motion scroll reveals, video cards that tilt or scale on hover, a scroll-scrubbed hero transform, subtle film grain overlay
- **Details:** 9:16 phone-frame mockups, glassy cards with 1px borders, generous whitespace, cursor-follow glow
- **Stack:** Next.js + Tailwind + shadcn/ui + Framer Motion + Lenis; host the videos on Mux or Cloudflare Stream (short, muted, lazy-loaded loops)

**Claude design skill / assets:**
- Anthropic's official **`frontend-design` skill** (github.com/anthropics/skills) pushes Claude away from generic "AI-slop" UI. Install it in Claude Code, or paste its SKILL.md into the prompt.
- Inspiration: **godly.website**, **land-book.com**, **awwwards.com** (filter: dark, video), **mobbin.com**; reference sites: **runwayml.com**, **higgsfield.ai**, **linear.app**, **arcads.ai**, **krea.ai**
- Components: **21st.dev**, **Aceternity UI**, **Magic UI** (marquees, bento grids, spotlight cards)
- Fonts: Google Fonts, Pangram Pangram, Fontshare (free)

## Next steps
1. Lock the name, headline and accent color
2. Generate 10–15 showcase videos with your own pipeline (they're the most important asset)
3. Build the homepage in Next.js using the frontend-design skill plus the section list above
