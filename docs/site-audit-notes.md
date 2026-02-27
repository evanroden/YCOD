# YCOD.org Site Audit Notes

## Architecture

- **Framework**: Next.js 14.2.21 (App Router)
- **Styling**: Tailwind CSS 3.4.14 with custom YCOD brand palette
- **Animations**: Framer Motion 11.15.0
- **Fonts**: Fredoka (display), Nunito (body) via Google Fonts
- **i18n**: Custom React Context-based (en, zh, es, fr)
- **Theme**: Dark/light with localStorage persistence

## Route Inventory

| Route | Type | Title | Description |
|-------|------|-------|-------------|
| `/` | Static | Home | Hero + Stats + Calculator + Register CTA |
| `/about` | Static | About YCOD | Origin story, timeline, team bios |
| `/bill` | Static | The Bill (A07954) | Legislative text + letter generator |
| `/blog` | Static | News & Updates | Blog listing with search + filters |
| `/blog/[slug]` | Dynamic | Per-post | 30 blog posts (TypeScript data) |
| `/contact` | Static | Contact Us | Contact form + info |
| `/coverage` | Static | Press Coverage | Media coverage grid |
| `/facts` | Static | Fast Facts | Stats, charts, myths-vs-facts, quiz |
| `/initiatives` | Static | Our Initiatives | 5 pillars + DMV simulator |
| `/join` | Static | Join the Movement | Sign-up form + action checklist |
| `/partners` | Static | Our Partners | Partner organizations |
| `/tedx` | Static | TEDx Talk | Video embed + speaker bio |
| `/api/join` | API | — | POST endpoint for join form |
| `/api/contact` | API | — | POST endpoint for contact form |

## Legacy Routes Mapping

No legacy routes exist in the codebase. The following legacy URLs from the older
YCOD.org site are redirected via next.config.js:

| Legacy URL | Redirect Target | Status |
|------------|----------------|--------|
| `/news` | `/blog` | 308 Permanent |
| `/press` | `/coverage` | 308 Permanent |
| `/who` | `/about` | 308 Permanent |
| `/2021bill` | `/bill` | 308 Permanent |
| `/take-action` | `/join` | 308 Permanent |
| `/dlnys` | `/initiatives` | 308 Permanent |
| `/resources` | `/facts` | 308 Permanent |
| `/purchase` | `/join` | 308 Permanent |
| `/purchase/:path*` | `/join` | 308 Permanent |
| `/design-files` | `/about` | 308 Permanent |

## SEO Implementation

- **robots.txt**: `src/app/robots.ts` — allows all public routes, disallows `/api/`
- **sitemap.xml**: `src/app/sitemap.ts` — includes all pages + 30 blog posts
- **RSS feed**: `src/app/feed.xml/route.ts` — Atom/RSS for blog posts
- **Metadata**: Root layout sets defaults; each route has layout.tsx with page-specific metadata
- **Open Graph**: Default OG image references logo; blog posts use dynamic OG images
- **Structured Data (JSON-LD)**:
  - Organization schema on `/about`
  - BlogPosting schema on each `/blog/[slug]`
  - FAQPage schema on `/facts`
  - BreadcrumbList on blog posts

## Interactive Widgets (Hydration / A11y Notes)

| Widget | Location | Hydration Risk | A11y Status |
|--------|----------|---------------|-------------|
| ImpactCalculator (slider) | Home | Low — uses native `<input type="range">` | Enhanced: aria-valuemin/max/now/text, keyboard support |
| MythVsFact (flip cards) | Facts | None | Enhanced: button role, aria-expanded, Space key support |
| AnimatedCounter | Home/Stats | Medium — starts at 0, animates up | Added: aria-live="polite", prefers-reduced-motion |
| Footer visitor counter | Footer | HIGH — random number per render | Fixed: static display, set in useEffect |
| DMVSimulator | Initiatives | Low | keyboard support verified |
| Quiz | Facts | None | Button-based, native focus |
| LetterGenerator | Bill | None | Label associations, keyboard |
| MobileMenu | Nav | None | Focus trap, Escape close, aria-modal |

## Testing Instructions

```bash
# Build and type-check
npm run build

# Run dev server
npm run dev

# Verify SEO endpoints
curl http://localhost:3000/robots.txt
curl http://localhost:3000/sitemap.xml
curl http://localhost:3000/feed.xml

# Test legacy redirects (should return 308)
curl -I http://localhost:3000/news
curl -I http://localhost:3000/press
curl -I http://localhost:3000/who

# Keyboard testing
# Tab through all pages, verify focus indicators
# Test slider with arrow keys, Home/End
# Test myth cards with Enter/Space
# Test mobile menu Escape key

# Accessibility
# Screen reader: verify landmarks, headings, live regions
# Reduced motion: verify animations respect prefers-reduced-motion
```
