# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Stramco Limited is a Next.js 15 application built with TypeScript, featuring a public-facing website and an admin dashboard. The application uses modern React 19, the App Router architecture, and is styled with Tailwind CSS and shadcn/ui components.

## Architecture

### Frontend Structure
- **Next.js 15** with App Router (`/src/app`)
- **Public Pages**: Landing page with marketing sections (hero, services, testimonials, FAQ, footer)
- **Admin Dashboard**: Protected admin interface at `/admin/*` with:
  - Dashboard with stats and activity feed
  - Companies management
  - Jobs management  
  - User profile management
  - Authentication pages (Login/Signup)

### Key Directories
- `frontend/src/app/` - Next.js App Router pages and layouts
- `frontend/src/app/components/` - Public-facing page components
- `frontend/src/app/admin/` - Admin dashboard pages and layouts
- `frontend/src/components/ui/` - Reusable shadcn/ui components
- `frontend/src/lib/` - Utility functions (includes cn() for className merging)

### Technology Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Toast Notifications**: react-hot-toast
- **UI Components**: Radix UI primitives via shadcn/ui

## Development Commands

All commands should be run from the `frontend/` directory:

### Development Server
```bash
cd frontend
npm run dev
```
Server runs on http://localhost:3000

### Build & Production
```bash
cd frontend
npm run build    # Build for production
npm run start    # Start production server
```

### Linting
```bash
cd frontend
npm run lint     # Run ESLint
```

### Testing
Currently no test scripts are configured. To add testing:
- Consider Next.js testing with Jest and React Testing Library
- Add test scripts to package.json

### Adding UI Components
This project uses shadcn/ui. To add new components:
```bash
cd frontend
npx shadcn@latest add [component-name]
```

Components are configured with:
- Style: "new-york"
- TypeScript: enabled
- CSS file: `src/app/globals.css`
- Base color: gray
- CSS variables: enabled

## Code Patterns & Guidelines

### File Naming
- Use kebab-case for component files in app/components/
- Admin pages use PascalCase directories with page.jsx/page.tsx
- UI components in components/ui/ use kebab-case.tsx

### Import Patterns
- Use `@/` path alias for src/ directory imports
- Import UI components from `@/components/ui/[component]`
- Import utilities from `@/lib/utils`

### Component Structure
- Public components are in `app/components/` and imported in `page.tsx`
- Admin components follow Next.js App Router conventions with layout.jsx/page.jsx
- Use "use client" directive for client-side interactivity
- Sidebar layout wraps admin pages for consistent navigation

### Styling
- Use Tailwind CSS classes with the `cn()` utility for conditional styling
- Follow shadcn/ui patterns for component composition
- Responsive design with mobile-first approach
- Admin dashboard uses card-based layout with shadow and rounded corners

### State Management
- Uses React useState for local component state
- No global state management currently implemented
- Consider adding Zustand or Context API for complex state needs

## Troubleshooting

### Common Issues
- **Build errors**: Check TypeScript errors with `npm run build`
- **Styling issues**: Ensure Tailwind classes are valid and PostCSS is working
- **Import errors**: Verify path aliases in tsconfig.json are correct
- **Component issues**: Check if shadcn/ui components are properly installed

### Development Setup
- Node.js version should support Next.js 15 (Node 18.17+ recommended)
- Ensure all dependencies are installed with `npm install`
- Check that images are properly placed in `src/app/images/`

## Architecture Notes

- The application separates public marketing pages from admin functionality
- Admin routes use a shared sidebar layout component
- Static data is currently hardcoded (companies list, testimonials, etc.)
- No backend API integration is currently implemented (backend/ directory is empty)
- Authentication is not implemented - admin pages are currently accessible without login