# VOTEK - Clean Solar Power Website

A modern, responsive, multi-page web application for VOTEK Solar, built directly from Figma designs.

## Features

- **Homepage (`/`)**: Hero with instant savings indicator, partner badges (*Envision, Anthesis, AAPM, NextEra, ProSolar*), 4-step solar journey workflow, feature highlights, expandable FAQ accordion, customer testimonials, and quick quote form.
- **About Us (`/about`)**: "Building a Brighter Tomorrow" company mission, "What Working With Us Feels Like" core value cards, meet the team showcase, and photo gallery.
- **Products (`/product`)**: Solar panel catalog featuring 6 module tiers (*Polycrystalline, Monocrystalline, Thin-film, Transparent, Solar Tiles, Perovskite*) with system specs, efficiency ratings, and direct booking CTAs.
- **Interactive Solar Savings Calculator (`/calculator`)**: 5-step wizard estimating solar potential:
  1. Property type selection (*Detached, Semi-detached, etc.*)
  2. Ownership verification (*Yes / No*)
  3. Location & postcode lookup
  4. Contact details intake
  5. Tailored results card showing system size, solar panel count, monthly savings offset %, and estimated monthly bill after solar.
- **Meeting Scheduler (`/schedule`)**: 30-minute consultation scheduler with calendar date picker, time slot selector, and intake form.
- **Sleek Contained Footer**: 1,168px rounded card footer with newsletter subscription, custom 3D ribbon artwork, multi-column navigation links, and social links.

## Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **Typography**: DM Sans (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```
