# Design Guidelines: Executive Portfolio for Rabib Alam

## Design Approach
**Reference-Based:** Draw inspiration from executive portfolio sites like Linear's careers page, Stripe's about section, and LinkedIn's professional profiles. Focus on outcome-driven storytelling with clean, confident layouts that emphasize impact over formality.

**Core Principle:** Present Rabib as a Chief Operator and Product Leader through quantifiable outcomes, business impact, and operational excellence rather than traditional job title hierarchies.

---

## Typography System

**Font Families:**
- Primary: Inter or SF Pro Display (headings, metrics, impact numbers)
- Secondary: Inter or SF Pro Text (body copy, descriptions)
- Accent: JetBrains Mono (technical details, code snippets if needed)

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Company Names: text-2xl md:text-3xl, font-semibold
- Impact Metrics: text-4xl md:text-5xl, font-bold (standalone numbers)
- Body Text: text-base md:text-lg, leading-relaxed
- Metadata/Labels: text-sm, font-medium, uppercase tracking-wide

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 lg:py-32
- Component spacing: gap-8 md:gap-12 lg:gap-16
- Inner margins: px-6 md:px-12 lg:px-20

**Container Strategy:**
- Max-width: max-w-7xl mx-auto for all sections
- Content sections: max-w-4xl for better readability on wide screens
- Full-bleed backgrounds where appropriate with inner containers

---

## Hero Section

**Layout:** Full-viewport (min-h-screen) asymmetric split
- Left 60%: Oversized name, executive tagline ("Chief Operator. Product Leader. AI/ML Technical Program Manager."), brief mission statement emphasizing operational impact
- Right 40%: Professional headshot or abstract tech-inspired visual
- Email contact subtle at bottom left
- Scroll indicator at bottom center

**No traditional CTA button** - let the content invite exploration naturally

---

## Impact & Achievements Section

**Design Pattern:** Metric cards in 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)

Each card features:
- Large numerical impact (text-4xl font-bold)
- Context label below number
- Brief description of achievement
- Company attribution (subtle, text-sm)

Examples: "$10M+ Revenue Impact", "1M+ Devices Migrated", "$XB Capital Saved"

**Layout:** grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

---

## Experience Section

**Pattern:** Timeline-style layout with company focus, NOT job titles

Each company block:
- Company name as primary header (text-2xl font-semibold)
- Date range subtle (text-sm text-gray-600)
- 2-column layout on desktop: Left 30% shows company logo/visual marker, Right 70% shows impact bullets
- Bullets written as outcomes ("Built X resulting in Y impact") not responsibilities
- Expandable/collapsible optional for space management

**Visual Enhancement:** Vertical connecting line between companies (left side, 2px width)

---

## Technical Expertise Section

**Layout:** Mixed 2-column approach
- Left column: "Product Leadership Capabilities" - bullet list of operational strengths
- Right column: "Technical Stack" - categorized tag cloud (Tools, Languages, Platforms)

Tags styled as: rounded-full px-4 py-2 text-sm with subtle backgrounds

---

## Projects Showcase

**Pattern:** Asymmetric card grid (alternating layouts)
- Project 1: Image left, content right
- Project 2: Content left, image right
- Continue alternating

Each project card:
- Project name (text-2xl font-semibold)
- Company context (text-sm)
- Problem → Solution → Impact narrative structure
- Key metrics highlighted (text-3xl font-bold inline with copy)
- Technologies used (small tags)

**Spacing:** Large gaps between projects (mb-24) for breathing room

---

## Education Section

**Minimalist approach:** Single centered block
- Degrees side-by-side on desktop (2-column)
- Institution names prominent
- Degree names and dates secondary
- Note "Currently Enrolled" for Georgia Tech distinctively

---

## Images Strategy

**Large Hero Image:** Yes - Professional headshot or abstract tech/network visualization on right side of hero (40% width)

**Project Images:** Placeholder for dashboard screenshots, product interfaces, or data visualizations for each major project. Images should be:
- 16:9 aspect ratio
- Rounded corners (rounded-lg)
- Subtle shadow (shadow-xl)
- 50% width on desktop in alternating layouts

**Company Logos:** Small, grayscale logos next to company names in Experience section

---

## Component Library

**Navigation:** Sticky header with horizontal nav, smooth scroll links to sections, email contact on right
**Buttons (minimal use):** Large (px-8 py-4), rounded-lg, primary action style, blur background if over images
**Cards:** Subtle borders or shadows, rounded-lg, padding p-8
**Tags/Pills:** rounded-full, px-4 py-2, text-sm
**Dividers:** Subtle horizontal rules between major sections (border-t opacity-10)

---

## Accessibility & Polish

- Semantic HTML structure (header, main, section, article)
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Sufficient contrast for all text
- Responsive images with proper alt text
- Smooth scroll behavior for navigation

**Animation:** Minimal - subtle fade-in on scroll for section reveals only, no distracting motion