# Markit.one - Next.js 15 with Tailwind CSS v3

A modern marketing stack landing page built with Next.js 15 and Tailwind CSS v3.

## Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS v3
- ✨ GSAP animations
- 📱 Fully responsive design
- 🎯 TypeScript support

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
markit/
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation component
│   ├── Hero.tsx         # Hero section with animations
│   ├── BentoGrid.tsx    # Bento grid layout with GSAP
│   └── Footer.tsx       # Footer component
├── tailwind.config.ts   # Tailwind configuration
├── postcss.config.mjs   # PostCSS configuration
└── next.config.mjs      # Next.js configuration
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15** - React framework
- **Tailwind CSS v3** - Utility-first CSS framework
- **GSAP** - Animation library
- **TypeScript** - Type safety
- **Font Awesome** - Icons

## Customization

The Tailwind configuration includes custom colors, fonts, and utilities defined in `tailwind.config.ts`. You can modify these to match your brand.

Custom CSS classes and animations are defined in `app/globals.css`.

