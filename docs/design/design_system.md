# Design System: Aivate Catalogue v2.0

**Philosophy:** "Professional Motion"
Elevating the catalogue with smooth interactions, modern typography, and a masonry layout while strictly adhering to Aivate brand identity.

## 1. Typography
> **Update:** Introducing `Space Grotesk` for headings to add character. Keeping `Open Sans` for readability.

- **Headings:** `Space Grotesk` (Google Font) – Weights: 500, 700
- **Body:** `Open Sans` (Existing) – Weights: 400, 600

## 2. Color Palette (Strict Aivate Brand)
- **Primary:** `Indigo 600` (#4F46E5) – Used for CTA, accents
- **Secondary:** `Mint Green` (#99F6E4) – Used for highlights, subtle backgrounds
- **Background:** `Slate 900` (#0F172A) – Dark mode base (Professional/Agency feel)
- **Surface:** `Slate 800` (#1E293B) – Cards/Sections
- **Text:** `White` (#F8FAFC) / `Slate 300` (#CBD5E1)

## 3. UI Patterns
- **Hero:** "Name/Role" centric with entrance animation (Fade Up).
- **Portfolio Grid:** Masonry layout (bento-box style) rather than simple list.
- **Cards:** Glasmorphism effect (Slate 800 + Blur) with hover lift & glow.
- **Navigation:** Floating pill navbar (Mac-OS style) or minimal top-right.

## 4. Animation Strategy (Motion-Driven)
- **Entrance:** Elements fade-in + slide-up on scroll (`observer`).
- **Hover:**
    - Cards: Scale 1.02 + Shadow bloom (Mint/Indigo).
    - Links: Underline expand.
- **Transitions:** Smooth page transitions.

## 5. Technical Implementation
- **Tailwind Config:** Extend theme with Aivate colors and custom animation utilities.
- **Fonts:** Load via `next/font/google`.
- **Icons:** Lucide React (cleaner than Heroicons).
