# OC Mold Pros Website

## Overview
A comprehensive SEO-optimized website for OC Mold Pros, a mold inspection and remediation company serving Orange County, California. Built with Next.js 16 (App Router) and Tailwind CSS 4.

## Project Structure
```
app/
  layout.tsx          # Root layout with Navigation and Footer
  page.tsx            # Homepage with hero, services, FAQ, etc.
  globals.css         # Tailwind CSS with custom ocean theme
  sitemap.ts          # Dynamic sitemap for all pages
  lib/
    cities.ts         # City data for 33 Orange County cities
  components/
    Navigation.tsx    # Sticky nav with dropdown for Service Areas
    Footer.tsx        # Site-wide footer with links
  about/page.tsx      # About page
  services/page.tsx   # Services page
  process/page.tsx    # 4-step process page
  pricing/page.tsx    # Pricing page
  blog/page.tsx       # Learn/Blog page
  contact/page.tsx    # Contact page with form
  mold-inspector-near-me/
    page.tsx          # Mold inspector near me overview with city grid
    [city]/page.tsx   # Dynamic city landing pages (33 cities)
public/
  robots.txt          # Robots file
  logo.jpg            # Company logo
```

## Key Features
- **33 City Landing Pages**: Dynamic pages for each Orange County city with unique content
- **SEO Optimized**: Title tags, meta descriptions, JSON-LD LocalBusiness schema
- **Responsive Navigation**: Desktop dropdown menu, mobile hamburger menu
- **Breadcrumb Navigation**: On all interior pages
- **Sitemap**: Auto-generated sitemap.xml with all pages

## Pages
- Home: Hero, trust indicators, services, FAQ, CTAs
- About: Company story, values, certifications
- Services: 6 detailed service offerings
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
- Sitemap.xml with all 40+ pages
- robots.txt
- Semantic HTML structure
- Breadcrumb navigation
- Optimized image alt text (logo, hero image)
- StructuredData component using Next.js Script with beforeInteractive strategy

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

## Service Pages
- `/services` - Main services overview page
- `/services/hvac-system-inspection` - HVAC System Inspection San Clemente dedicated page with local SEO sections
- `/services/mold-prevention` - Mold Prevention San Clemente dedicated page
- `/services/mold-sampling` - Mold Sampling San Clemente dedicated page with full SEO content
- `/services/new-construction-inspections` - New Construction Inspections San Clemente dedicated page
- `/services/physical-and-visual-inspection` - Physical and Visual Inspection San Clemente dedicated page with local SEO sections
- `/services/rental-property-inspections` - Rental Property Inspections San Clemente dedicated page

## Recent Changes
- Feb 07, 2026: Added Mold Prevention service page at /services/mold-prevention with nav dropdown, sitemap, and services index link
- Feb 07, 2026: Added New Construction Inspections service page at /services/new-construction-inspections with nav dropdown, sitemap, and services index link
- Feb 07, 2026: Added Mold Sampling service page at /services/mold-sampling with Services dropdown in nav, sitemap entry, and services index link
- Feb 07, 2026: Added Google Business Profile map embed and link on homepage, updated CTA buttons, added address and VOB badge to footer, fixed JSON-LD schema rendering (switched from Script component to inline script tags)
- Feb 04, 2026: Changed /service-areas URL to /mold-inspector-near-me with 301 redirects, updated all internal navigation links, renamed folder structure
- Jan 10, 2026: Created Beach City Cluster - 9 dedicated landing pages with enhanced template including inspection details, city-specific mold causes, neighborhoods, related services, and internal cluster linking
- Jan 04, 2026: Added tier system (core/secondary) to service areas - 10 core cities (San Clemente, Dana Point, Laguna Beach, Laguna Niguel, Laguna Hills, Mission Viejo, Newport Beach, Huntington Beach, Costa Mesa, Irvine) and 24 secondary cities
- Jan 04, 2026: Service areas cleanup - Updated to 34 approved cities only, added Laguna Woods, removed 12 invalid city references from nearby arrays, added 301 redirects for bad URLs
- Dec 29, 2025: Added contact form email functionality using Resend, with thank you popup
- Dec 29, 2025: Updated "Our Story" on About page with personal narrative
- Dec 28, 2025: Comprehensive SEO overhaul - enhanced schemas using Next.js Script component, added Organization schema with reviews, added testimonials section with 5 reviews and Google Reviews button, Open Graph and Twitter Card tags
- Dec 26, 2025: Comprehensive website expansion with navigation, city pages, and all content pages
