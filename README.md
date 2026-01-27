# Te Wairama Digital - Portfolio MVP

A brutalist portfolio website inspired by MONOLOG studio's aesthetic. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Features

- **Brutalist Design**: Black background, white text, bold typography, no rounded corners
- **Complex Header**: 5-element layout with live time, location, status, booking notice, and CTA button
- **Hero Section**: Large condensed display fonts (80-180px responsive) positioned at 60vh
- **Statistics Grid**: Monospace font showcasing key metrics
- **Two-Column Layout**: "What We Do" section adjacent to project list
- **Project Showcase**: Northeast arrow (↗) hover effects with external link support
- **Responsive**: Mobile-first design that adapts to all screen sizes
- **Live Time**: Updates every minute in the header

## Tech Stack

- **Next.js 16.1.4** - App Router with React Server Components
- **TypeScript** - Strict mode enabled
- **Tailwind CSS 4.1.18** - Latest version with new `@import` syntax
- **React 19.2.3** - Latest React with concurrent features
- **Google Fonts** - Inter, Archivo Narrow, JetBrains Mono

## Getting Started

### Installation

```bash
# Clone the repository
git clone git@github.com:ali-harrison/TWD.git
cd te-wairama-port

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/app
  /page.tsx          # Homepage with hero, stats, and projects
  /work/page.tsx     # Work page (in progress)
  /about/page.tsx    # About page (in progress)
  /contact/page.tsx  # Contact page
  /layout.tsx        # Root layout with fonts
  /globals.css       # Tailwind v4 imports and custom styles

/components
  /Header.tsx        # Complex 5-element header with live time
  /Footer.tsx        # Footer with links
  /ContactForm.tsx   # Contact form component
```

## Editing Content

Content is stored as constants at the top of each file for easy editing:

**Homepage** ([app/page.tsx](app/page.tsx)):
- `PROJECTS` array - Project name, tag, description, and URL
- `STATS` array - Statistics displayed in grid
- Hero text and positioning statement

**Header** ([components/Header.tsx](components/Header.tsx)):
- Brand name, status text, booking notice, CTA text

## Design System

### Colors
- Background: `#000000` (black)
- Foreground: `#FFFFFF` (white)
- Muted: `#A0A0A0` (gray)

### Typography
- **Display**: Archivo Narrow (hero, large headings)
- **Body**: Inter (paragraphs, UI text)
- **Mono**: JetBrains Mono (stats, technical elements)

### Layout Principles
- No rounded corners (brutalist aesthetic)
- Full-width layouts with 20px horizontal padding
- Viewport-based vertical spacing (vh units)
- Left-aligned content (no centered layouts except header elements)

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

Connect your GitHub repository to Vercel for automatic deployments on push.

## Current Status (MVP)

✅ Homepage with hero, stats, and project showcase
✅ Complex header with live time
✅ Responsive brutalist design
✅ External project links
🚧 Work page (planned)
🚧 About page (planned)
🚧 Contact form submission (UI only)

## License

Copyright © 2026 Te Wairama Digital
