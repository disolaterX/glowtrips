# GlowTrips — Learnings & Design Decisions

## Task 2: Design System & Components

### Font Pairing
- **Headings**: Cormorant Garamond (warm, elegant serif) — loaded via Google Fonts with weights 400-700 + italic
- **Body**: DM Sans (clean, geometric sans) — loaded via Google Fonts with weights 400-700 + italic
- Tailwind v4 `@theme` overrides: `--font-sans` for DM Sans, `--font-serif` for Cormorant Garamond
- Use `font-serif` class on headings, body text inherits `font-sans` automatically

### Color Palette (defined in `src/index.css` via `@theme`)
- **Primary** (`primary-*`): Amber/golden (#F59E0B range) — the "glow" in GlowTrips
- **Secondary** (`secondary-*`): Coral/orange (#F97316 range) — warmth
- **Accent** (`accent-*`): Tropical teal (#14B8A6 range) — ocean vibes
- **Warm** (`warm-*`): Warm neutral grays (#1C1917 to #FAFAF9) — replaces default gray
- **Cream** (`cream`): #FFFBF5 — body background (NOT pure white)
- WhatsApp CTA uses brand green `#25D366` (not from palette)

### Component Architecture
- All components in flat `src/components/` directory
- `Layout.jsx` wraps all routes (Navbar + main + Footer), includes scroll-to-top on route change
- `Navbar.jsx` uses React fragment (`<>`) to render header + mobile overlay/drawer as siblings (avoids z-index stacking context issues)
- Mobile drawer uses `translate-x` CSS transition, overlay at `z-[60]`, drawer at `z-[70]`
- `WhatsAppCTA.jsx` generates `wa.me/918708108321` URLs with `encodeURIComponent` for messages
- `PackageCard.jsx` uses destination-based Unsplash placeholder images (to be refined later)
- `SectionHeading.jsx` has optional amber accent bar and configurable alignment

### Navbar Behavior
- Fixed/sticky with backdrop blur, scroll-aware background (transparent → white/95)
- Desktop: logo + links + destinations dropdown + Contact Us CTA
- Mobile: hamburger → right-side slide drawer
- Active route highlighting via `useLocation()` pathname comparison
- Dropdown closes on: outside click, Escape key, route change
- Body scroll locked when mobile menu open

### Footer Structure
- Dark warm background (`bg-warm-900`) with gradient accent bar at top
- 3-column grid: Quick Links | Destinations | Contact Info
- Contact: tel: link, mailto: link, wa.me link
- "Owned by Malk Inn" credit + dynamic copyright year

### Technical Notes
- Tailwind v4 uses `@theme` directive in CSS (no tailwind.config.js)
- `App.css` import removed from App.jsx (was Vite boilerplate)
- lucide-react installed for UI icons (Menu, X, ChevronDown, Clock, MapPin, Check, Phone, Mail)
- WhatsApp icon is custom inline SVG (not from lucide-react)
- Build: `bun run build` — exit 0 verified
- Package data shape in `src/data/packages.js`: id, destination, name, duration, price, cities, highlights[], bestFor[], includes, whatsappMessage

## Task 4: Destination Detail Pages

### Architecture (DRY Pattern)
- **Shared template**: `src/components/DestinationPage.jsx` — single component renders all destination pages
- **Thin page files**: `src/pages/Vietnam.jsx`, `Bali.jsx`, `Thailand.jsx` — each exports a config object + renders `<DestinationPage config={...} />`
- Config shape: `{ name, destinationKey, tagline, heroImage, quickInfo[], experiences[] }`
- Filters packages by `destinationKey` from `packages.js` at render time

### Page Sections (5 sections per page)
1. **Hero** — Full-bleed Unsplash image, gradient overlays (bottom-to-top + left-to-right), grain texture via inline SVG, "Explore {name}" pill badge, h1 + tagline
2. **Quick Info Bar** — Floats over hero (-mt-8), 4-item grid (2-col mobile, 4-col desktop), lucide icons (Stamp, Sun, Banknote, Languages), white card with shadow + backdrop blur
3. **Packages** — SectionHeading + 3 PackageCards in responsive grid + pricingDisclaimer text below
4. **What You'll Experience** — 6 emoji-led cards per destination, 2-col mobile → 3-col desktop, hover lift + border accent
5. **CTA** — "Can't decide?" heading, destination-specific WhatsAppCTA ("Plan My {name} Trip"), phone number display

### Hero Images (Unsplash, different from PackageCard thumbnails)
- Vietnam: `photo-1583417319070-4a69db38a482`
- Bali: `photo-1555400038-63f5ba517a47`
- Thailand: `photo-1552465011-b4e21bf6e79a`

### Quick Info Data
- Vietnam: Oct-Apr, e-Visa, VND, "Xin chào = Hello"
- Bali: Apr-Oct, Visa on arrival for Indians, IDR, "Terima kasih = Thank you"
- Thailand: Nov-Mar, Visa on arrival (conditions apply), THB, "Sawadee = Hello"

### WhatsApp CTA Links
- Each PackageCard "Book Now" uses the package's `whatsappMessage` (destination-specific)
- Bottom CTA uses generic: "Hi! I'm interested in visiting {name}. Can you help me choose the right package?"
- All link to `wa.me/918708108321`

### Technical Notes
- Emoji encoding: Use literal emoji characters in JSX (not JS unicode escapes) — esbuild chokes on malformed surrogate pairs like `\ud83c\udfd` (missing hex digit)
- `vite.config.js` has `base: '/glowtrips/'` — preview server must serve from that path
- lucide-react icons added: Stamp, Sun, Banknote, Languages, Phone
- No horizontal scroll on 375px mobile viewport (verified via Playwright)
- Build: `bun run build` — exit 0, 22 modules, ~292KB JS gzipped to ~90KB

### QA Results (Playwright verified)
- Vietnam: ₹45,000 / ₹72,000 / ₹1,05,000 — correct ✅
- Bali: ₹38,000 / ₹58,000 / ₹78,000 — correct ✅
- Thailand: ₹28,000 / ₹52,000 / ₹82,000 — correct ✅
- All 9 "Book Now" buttons link to wa.me with package-specific messages ✅
- Quick info bars render all 4 items per page ✅
- Pricing disclaimer text present on all 3 pages ✅
- Mobile responsive, no horizontal scroll at 375px ✅
- 6 experience cards per destination ✅
