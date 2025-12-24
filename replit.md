# OC Mold Pros Landing Page

## Overview
A simple MVP landing page for OC Mold Pros, a mold inspection and remediation company serving Orange County, California. Built with Next.js (App Router) and Tailwind CSS.

## Project Structure
```
app/
  layout.tsx    # Root layout with metadata and JSON-LD schema
  page.tsx      # Main landing page with all sections
  globals.css   # Tailwind CSS with custom ocean theme colors
postcss.config.js
tailwind.config.js
```

## Key Features
- **Hero Section**: San Clemente Pier background image using next/image with proper attribution
- **Sticky Navigation**: Fixed top navigation with smooth scroll to sections
- **Sections**: Services, How It Works, Contact
- **CTA Buttons**: "Call 949-371-5934" and "Book an Inspection"
- **SEO Optimized**: 
  - Proper title and meta description
  - Open Graph tags
  - JSON-LD LocalBusiness schema for local SEO
- **Theme**: Ocean blue (#0284c7) and white color scheme

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS 4
- TypeScript

## Running the Project
The dev server runs on port 5000:
```bash
npm run dev -- -p 5000
```

## Recent Changes
- Dec 24, 2025: Initial MVP landing page created with all requested sections and SEO elements
