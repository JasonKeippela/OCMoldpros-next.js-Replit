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
  service-areas/
    page.tsx          # Service areas overview with city grid
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
- Service Areas: Grid of 33 cities with links
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
- JSON-LD LocalBusiness schema (with geo coordinates, services catalog, hours)
- JSON-LD FAQPage schema (5 common questions)
- JSON-LD Review/AggregateRating schema (4 reviews, 4.9/5 rating)
- Sitemap.xml with all 40+ pages
- robots.txt
- Semantic HTML structure
- Breadcrumb navigation
- Optimized image alt text (logo, hero image)

## Recent Changes
- Dec 28, 2025: Enhanced SEO with LocalBusiness, FAQPage, and Review schemas; added testimonials section; optimized meta descriptions and alt text
- Dec 26, 2025: Comprehensive website expansion with navigation, city pages, and all content pages
