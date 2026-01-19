# Nodely - Single-Page Homepage Design

This project is a React + TypeScript implementation of the Nodely homepage design, originally created in Figma. The design has been faithfully recreated with all layouts, colors, images, and effects matching the original Figma design.

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Using Motion (Framer Motion) for smooth page transitions and animations
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Component-Based**: Modular component structure for easy maintenance
- **Routing**: React Router for multi-page navigation

## Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Hero.tsx       # Hero section with main CTA
│   │   ├── WhatWeDo.tsx   # Services section
│   │   ├── Benefits.tsx   # Benefits list
│   │   ├── HowItWorks.tsx # Process steps
│   │   ├── CTA.tsx        # Call-to-action section
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   └── ui/            # Radix UI components
│   ├── pages/             # Page components
│   ├── assets/            # Images and static assets
│   ├── styles/            # Global styles
│   └── App.tsx            # Main app component
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `build` directory.

## Design Details

The design matches the Figma file exactly with:

- **Colors**: 
  - Primary: `#003366` (Dark Blue)
  - Accent: `#FF6200` (Orange)
  - Secondary Accent: `#E67E22` (Orange)
  - Backgrounds: White and Gray-50

- **Typography**: Inter font family with responsive sizing
- **Layout**: Max-width containers with proper spacing
- **Effects**: Hover states, transitions, and smooth animations
- **Images**: Logo and assets properly integrated

## Technologies Used

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **React Router** - Client-side routing
- **Motion (Framer Motion)** - Animations
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons

## Original Design

The original Figma design is available at:
https://www.figma.com/design/qXY26fkiHT0MMtvKU1vglU/Single-Page-Homepage-Design

## License

Private project - All rights reserved.