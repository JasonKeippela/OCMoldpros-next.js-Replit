# OC Mold Pros Website

## Overview
A comprehensive SEO-optimized website for OC Mold Pros, a mold inspection and remediation company serving Orange County, California. Built with Next.js 16 (App Router) and Tailwind CSS 4.

## Project Structure
```
app/
  layout.tsx          # Root layout with Navigation and Footer
  page.tsx            # Homepage with hero, services, FAQ, etc.
  globals.css         # Tailwind CSS with custom ocean theme + typography plugin
  sitemap.ts          # Dynamic sitemap for all pages
  lib/
    cities.ts         # City data for 33 Orange County cities
    expandServiceMarkdown.ts  # Expands service markdown with shared content block
    canonical.ts      # Shared canonical URL builder
    siteConfig.ts     # Centralized business data (name, phone, address, areaServed, sameAs)
    schema.ts         # ProfessionalService JSON-LD schema builder for service pages
  components/
    Navigation.tsx    # Sticky nav with dropdowns for Services + Service Areas
    Footer.tsx        # Site-wide footer with links
    ServiceMarkdown.tsx  # MDX renderer for service page markdown content
  about/page.tsx      # About page
  services/
    page.tsx          # Services index with all 22 service links + ItemList schema
    [slug]/page.tsx   # Dynamic service pages (22 services) with BreadcrumbList + FAQPage schema
  process/page.tsx    # 4-step process page
  pricing/page.tsx    # Pricing page
  blog/page.tsx       # Learn/Blog page
  contact/page.tsx    # Contact page with form
  mold-inspector-near-me/
    page.tsx          # Mold inspector near me overview with city grid
    [city]/page.tsx   # Dynamic city landing pages (33 cities)
content/
  services/
    services.config.ts   # Single source of truth for 22 services (name, slug, meta)
    *.md                 # 22 markdown files for service pages
public/
  robots.txt          # Robots file
  logo.jpg            # Company logo
```

## Key Features
- **22 Service Pages**: Dynamic pages at /services/<slug> with expanded markdown content (~1000-1500 words), rendered via next-mdx-remote
- **33 City Landing Pages**: Dynamic pages for each Orange County city with unique content
- **SEO Optimized**: Title tags, meta descriptions, JSON-LD LocalBusiness schema
- **Responsive Navigation**: Desktop dropdown menu, mobile hamburger menu
- **Breadcrumb Navigation**: On all interior pages
- **Sitemap**: Auto-generated sitemap.xml with all pages

## Pages
- Home: Hero, trust indicators, services, FAQ, CTAs
- About: Company story, values, certifications
- Services: Index page with 22 service links + 6 detailed service highlights
- Service Pages: 22 individual service pages with expanded markdown content
- Mold Inspector Near Me: Grid of 33 cities with links (URL: /mold-inspector-near-me)
- [City] Pages: City-specific mold inspection content
- Process: 4-step inspection process
- Pricing: Transparent pricing tiers
- Blog/Learn: Educational articles
- Contact: Contact form and info

## Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript

## Running the Project
```bash
npm run dev -- -p 5000
```

## SEO Elements
- Dynamic meta tags per page with unique, keyword-optimized descriptions
- JSON-LD LocalBusiness schema (with geo coordinates, 8 cities, services catalog, hours, aggregateRating)
- JSON-LD FAQPage schema (5 detailed questions with expanded answers)
- JSON-LD Organization schema (with 5 reviews, aggregateRating, contact point)
- Open Graph and Twitter Card meta tags for social sharing
- Sitemap.xml with all 60+ pages (static + 22 services + 33 cities)
- robots.txt
- Semantic HTML structure
- Breadcrumb navigation
- Optimized image alt text (logo, hero image)
- Inline JSON-LD script tags for schema rendering (homepage)
- BreadcrumbList + FAQPage schemas on each service page
- ItemList schema on services index page
- Server-rendered canonical URLs on all pages via Next.js metadata API (alternates.canonical)
- Shared canonical helper: app/lib/canonical.ts (getCanonicalUrl, canonicalAlternates)

## Contact Form
- Uses Resend API (RESEND_API_KEY secret) to send form submissions to info@ocmoldpros.com
- API route: app/api/contact/route.ts
- Client component: app/components/ContactForm.tsx
- Displays success popup after submission

## Beach City Cluster Pages
9 dedicated landing pages with enhanced local SEO, consistent template, and internal linking:
- San Clemente, Dana Point, Laguna Niguel, Laguna Beach, Newport Beach, Costa Mesa, Huntington Beach, Seal Beach, San Juan Capistrano

**Hub Page**: `/mold-inspector-near-me/orange-county-beach-cities` - Links to all 9 beach city pages with city-specific descriptions

Each page includes:
- H1: "Mold Inspection & Mold Testing in {City}, CA"
- City-specific intro paragraph (90-140 words)
- "What Our Mold Inspection Includes" (7 bullets + unbiased statement)
- "Why Mold Happens in {City} Homes" (6 city-specific reasons)
- "Mold Testing & Indoor Air Quality Testing" section
- "Buying or Selling a Home in {City}?" section
- "Communities We Serve in {City}" (8-16 neighborhoods)
- "Related Services" links
- "Nearby Beach Cities We Serve" (internal cluster linking)
- CTA: "DM or call to schedule a free 20-minute consultation"

## Service Pages System
22 service pages using markdown content rendered with next-mdx-remote:
- Base markdown files in /content/services/*.md
- Expanded at render time with shared content block (local tips, quick checks, common causes)
- Services config in /content/services/services.config.ts (single source of truth)
- Navigation dropdown lists all 22 services
- Each page includes: breadcrumb nav, BreadcrumbList schema, FAQPage schema, CTA section

Services: Mold Sampling, New Construction Inspections, Rental Property Inspections, Mold Prevention, Physical and Visual Inspection, HVAC System Inspection, Kitchen Inspection, Bathroom Inspection, Real Estate Inspection, Indoor Air Testing, Certified Mold Inspector, Mold Inspection, Mold Testing, ERMI Testing, Thermal Imaging Inspection, Indoor Allergen Sampling, Mycotoxin Testing, Custom Mold Action Plans, Mold Cleaning, Mold Damage Restoration, Mold Mitigation, Mold Remediation

## Recent Changes
- Feb 08, 2026: Added hasOfferCatalog with 22 services as OfferCatalog > Offer > Service sub-entities under LocalBusiness schema, each referencing business @id, with absolute URLs
- Feb 08, 2026: Hardened JsonLd component with </script> escape prevention, added numeric normalization guardrails (toNumberIfNumericString, normalizeSchemaNumbers), fixed worstRating 5→1, dynamic reviewCount via reviews.length, expanded areaServed to 11 cities from SITE_CONFIG, removed 11 duplicate LocalBusiness schemas from city/beach pages, deleted unused StructuredData.tsx
- Feb 08, 2026: Refactored JSON-LD to single @graph with merged LocalBusiness+ProfessionalService entity (app/lib/schema.ts), site-wide via layout.tsx, removed duplicate Organization/ProfessionalService schemas, created reusable JsonLd component, numeric types verified
- Feb 08, 2026: Added ProfessionalService JSON-LD schema to all 22 service pages via shared builder (app/lib/schema.ts), centralized business data into app/lib/siteConfig.ts, homepage schema now uses shared config
- Feb 08, 2026: Added server-rendered canonical URLs to all pages using Next.js metadata API (alternates.canonical), replaced client-side CanonicalUrl component with shared helper (app/lib/canonical.ts)
- Feb 08, 2026: Created 22 service pages system with markdown content, next-mdx-remote rendering, expansion utility, Services dropdown in navigation, BreadcrumbList + FAQPage + ItemList schemas, sitemap update
- Feb 08, 2026: Fixed JSON-LD schema rendering (switched from Next.js Script component to inline script tags), added Google Business Profile embed + link, Veteran Owned Business badge, business address in footer
- Feb 04, 2026: Changed /service-areas URL to /mold-inspector-near-me with 301 redirects, updated all internal navigation links, renamed folder structure
- Jan 10, 2026: Created Beach City Cluster - 9 dedicated landing pages with enhanced template including inspection details, city-specific mold causes, neighborhoods, related services, and internal cluster linking
- Jan 04, 2026: Added tier system (core/secondary) to service areas - 10 core cities (San Clemente, Dana Point, Laguna Beach, Laguna Niguel, Laguna Hills, Mission Viejo, Newport Beach, Huntington Beach, Costa Mesa, Irvine) and 24 secondary cities
- Jan 04, 2026: Service areas cleanup - Updated to 34 approved cities only, added Laguna Woods, removed 12 invalid city references from nearby arrays, added 301 redirects for bad URLs
- Dec 29, 2025: Added contact form email functionality using Resend, with thank you popup
- Dec 29, 2025: Updated "Our Story" on About page with personal narrative
- Dec 28, 2025: Comprehensive SEO overhaul - enhanced schemas using Next.js Script component, added Organization schema with reviews, added testimonials section with 5 reviews and Google Reviews button, Open Graph and Twitter Card tags
- Dec 26, 2025: Comprehensive website expansion with navigation, city pages, and all content pages
