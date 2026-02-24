# INGAGE - Web Design Agency Website

## Overview
A stunning website for INGAGE, a web design agency that specializes in transforming outdated websites into engaging, modern experiences. Tagline: "We turn boring into brilliant."

## Architecture
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui + Framer Motion
- **Backend**: Express.js (minimal - contact form + portfolio password verification)
- **Routing**: wouter (client-side)
- **State**: React useState (no database needed)

## Pages
1. **About Us** (`/`) - Hero section, services, process, stats, CTA
2. **Portfolio** (`/portfolio`) - Protected by 4-digit password (code: `1234`), shows project showcase cards
3. **Contact** (`/contact`) - Contact form that posts to `/api/contact`

## API Routes
- `POST /api/portfolio/verify` - Verifies 4-digit portfolio access code
- `POST /api/contact` - Handles contact form submissions (logs to console)

## Key Components
- `client/src/components/navigation.tsx` - Fixed top nav with mobile hamburger menu, INGAGE logo
- `client/src/components/footer.tsx` - Simple footer with logo
- `client/src/pages/about.tsx` - About/landing page
- `client/src/pages/portfolio.tsx` - Password gate + portfolio grid
- `client/src/pages/contact.tsx` - Contact form with success state

## Design Tokens
- Font: Space Grotesk (sans), Playfair Display (serif), JetBrains Mono (mono)
- Primary color: Teal (hue 174) - matches INGAGE logo
- Chart colors: Teal, Magenta, Green, Orange, Cyan - matching logo's multi-color palette
- Uses shadcn/ui design system with custom CSS variables

## Logo
- Current: `client/public/images/in2websites-logo.png` — In2Websites logo with white pixelated globe + orange "2" on black background
- Uses `mix-blend-mode: lighten` to make black background transparent on the dark site
- Displayed in navigation (h-32) and footer (h-24)

## Saved Layouts
- **Layout 1** (commit `7ac732ef`): Current layout with In2Websites logo, "WEBSITE REMODELING" tagline centered above neon $399 sign, three-phase neon flicker animation. This is the baseline to return to.
- **Style 1.1** (commit `ecf3b94`): Blue-teal gradient theme with lighter text (2 shades brighter). Portfolio page has 3-image card carousel for Stuhl Services case study, "See Reference Site" opens live site in phone-sized popup window, "Home Remodeling Company" subtitle above carousel. Nav renamed "About Us" → "Home" with home icon on non-home pages. Footer has large logo with tight spacing. All small text lightened for better readability.
