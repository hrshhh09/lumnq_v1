# lumnq website: assets needed

This brief lists everything needed to replace the placeholder content on the site (`website/index.html`) with real work. Brand rules: `brand/BRAND_KIT.md`, especially §8 (client creatives).

Put finished files in `website/assets/showcase/` and `website/assets/testimonials/`, then ask for them to be wired in.

---

## 1. Showcase videos (the "Made with lumnq." section)

The section is a masonry grid of phone-framed videos, with filter buttons: **All · Supplements · Skincare · Beverage · Fashion**.

### How many
| | Count | Notes |
|---|---|---|
| **Ideal** | **8 videos** | 2 per category, so every filter shows 2 tiles |
| Minimum | 4 videos | 1 per category; tiles won't repeat |
| Stretch | 12 videos | 3 per category |

### Video specs
| Spec | Requirement |
|---|---|
| Aspect ratio | **9:16** (1080×1920 master). Optionally 1–2 videos at **4:5** (1080×1350) for layout variety |
| Length | **5–12 s**, looping cleanly (the last frame should flow into the first) |
| Format | **MP4 (H.264)**; a WebM copy is a bonus |
| Web size | **≤ 5 MB each** (export ~720×1280 for web, CRF ~26). Keep the 1080p master separately |
| Audio | None needed: the videos autoplay **muted** on loop |
| Poster frame | One **JPG per video** (same name, `.jpg`), a strong still from the first second, ≤ 200 KB |
| Watermark | **None** on showcase pieces |

### Content rules (from the brand kit)
- **The product is the hero and the brightest thing in frame.** One key light, one rim light, one light leak in the client's colour (or the category leak: supplements amber, skincare blush, beverage ice, fashion violet).
- **Label, logo and packaging must be exactly right in every frame.** This is the whole pitch. Any drift and it doesn't go on the site.
- **Hook in the first 3 s:** the product is visible from frame one.
- Captions are optional. If used: ≤ 6 words per line, Paper text on a Black@75% rounded box, one highlighted word.
- **Only approved claims.** No before/after, and no fake results.
- **Permission:** each video must be our own spec work **or** approved by the client for public portfolio use.

### Mix to aim for (8 videos)
| # | Category | Suggested type |
|---|---|---|
| 1 | Supplements | Product Hero (cinematic packshot scene) |
| 2 | Supplements | Explainer snippet (ingredients/claims) |
| 3 | Skincare | Product Hero |
| 4 | Skincare | Static → Motion |
| 5 | Beverage | Product Hero (condensation, pour, splash) |
| 6 | Beverage | Hook variant (3 s opener) |
| 7 | Fashion | Product Hero / lifestyle |
| 8 | Fashion | Remix (same piece, 4:5) |

### File naming
```
website/assets/showcase/
  supplements-01.mp4   supplements-01.jpg
  supplements-02.mp4   supplements-02.jpg
  skincare-01.mp4      skincare-01.jpg
  ...
```

### Info per video (fill in)
| File | Brand / product name (as shown on tile) | Category | Type | Permission to show? |
|---|---|---|---|---|
| supplements-01.mp4 | | Supplements | | Yes / Spec work |
| supplements-02.mp4 | | Supplements | | |
| skincare-01.mp4 | | Skincare | | |
| skincare-02.mp4 | | Skincare | | |
| beverage-01.mp4 | | Beverage | | |
| beverage-02.mp4 | | Beverage | | |
| fashion-01.mp4 | | Fashion | | |
| fashion-02.mp4 | | Fashion | | |

---

## 2. Before → After (the slider section), optional but high impact

Right now this uses a drawn placeholder bottle. It's much stronger with a real pair.

| Asset | Spec |
|---|---|
| **Before** | The original client packshot (plain/white background), **16:9, 1920×1080** JPG, product centred |
| **After** | A matching still **or** short loop (MP4 ≤ 5 MB) from the finished ad, **same framing and size** so the slider lines up |

Name them `website/assets/showcase/before.jpg` and `after.jpg` / `after.mp4`.

---

## 3. "Other tools warp labels" comparison, optional

Two stills, **4:5, 1080×1350**:
- `compare-generic.jpg`: the same product made by a generic AI video tool, showing visible label/logo drift (real output, not faked).
- `compare-lumnq.jpg`: our version, label exact.

---

## 4. Testimonials (the quote cards)

There are currently **2 cards** holding brand lines ("The bottle looks exactly like the bottle." / "Ship new creatives every Monday."). The brand kit bans fake testimonials, so these will only be swapped in for **real, approved** quotes.

### How many
| | Count | Layout |
|---|---|---|
| **Ideal** | **2** | Current 2-up layout |
| Also fine | 3 | I'll switch to a row of 3 |
| Also fine | 4 | 2×2 grid |
| Zero | 0 | Keep the brand lines (totally fine at launch) |

### Per testimonial
| Field | Required | Notes |
|---|---|---|
| Quote | Yes | **15–35 words.** Specific beats generic ("we ship new ads every Monday" > "amazing service"). No exclamation marks; no invented numbers |
| Person's role | Yes | e.g. "Head of Growth" |
| Company or category | Yes | e.g. "Ferment Co." or "skincare brand, UK" if they want anonymity |
| Name | Optional | |
| Headshot | Optional | Square, **400×400** JPG, neutral background |
| Company logo | Optional | **SVG** (preferred) or transparent PNG, mono white/paper if possible |
| Written approval | **Yes** | Email/Slack confirmation that we can publish it |

### Template (copy per testimonial)
```
Quote:
Name (optional):
Role:
Company / category:
Headshot file (optional): website/assets/testimonials/<name>.jpg
Logo file (optional):     website/assets/testimonials/<company>.svg
Approved to publish: yes, by <who>, <date>
```

---

## 5. Nice to have, later
- **Client logo strip:** if 4+ clients allow it, the category/platform marquee can become a real logo strip. Provide **SVGs**, single colour.
- **OG / social share image:** 1200×630 (template in `brand/templates/social-templates.html`).
- **Booking link:** a Calendly/Cal.com link to replace the `mailto:harsh@lumnq.com` CTA if preferred.

---

## Checklist
- [ ] 4–8 showcase MP4s + poster JPGs, named by category
- [ ] Info table above filled in
- [ ] (Optional) before/after pair
- [ ] (Optional) comparison stills
- [ ] 0–4 approved testimonials using the template
- [ ] (Optional) client logos, OG image, booking link
