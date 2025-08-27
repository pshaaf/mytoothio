# Dental Care Appointment Management

## Overview
A mobile-first web application for dental appointment management, originally designed in Figma and migrated to Replit. The application features a modern iPhone-style interface for patients to view appointment details, manage forms, and interact with their dental office.

## Features
- **Appointment Details**: View upcoming appointments with Dr. Sarah Johnson
- **Interactive Checklist**: Complete required forms and documents
- **Action Buttons**: Quick access to call office, add to calendar, get directions, and modify visits
- **Mobile-First Design**: Responsive iPhone-style interface optimized for mobile devices
- **Safari Browser Mockup**: Includes authentic mobile browser interface elements

## Tech Stack
- **Frontend**: React with TypeScript, Wouter for routing
- **UI Components**: Shadcn/UI components with Radix primitives
- **Styling**: Tailwind CSS with custom design tokens from Figma
- **Backend**: Express.js with TypeScript
- **Build Tool**: Vite with React plugin
- **Icons**: Lucide React icons
- **State Management**: TanStack Query for data fetching

## Project Architecture

### Frontend Structure
```
client/src/
├── components/ui/          # Shadcn UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and query client setup
├── pages/                  # Application pages
│   ├── Iphone.tsx         # Main mobile interface
│   └── not-found.tsx      # 404 page
├── App.tsx                # Main app component with routing
├── main.tsx              # React entry point
└── index.css             # Global styles and Tailwind imports
```

### Backend Structure
```
server/
├── index.ts              # Express server setup
├── routes.ts             # API route definitions
├── storage.ts            # In-memory storage implementation
└── vite.ts              # Vite development server integration
```

### Assets
- **Figma Assets**: Located in `client/public/figmaAssets/`
- **Icons**: Safari navigation icons, form icons, and UI elements
- **Images**: Dental care logo, status bar elements

## Migration from Figma

### Completed Optimizations
- ✅ Fixed Tailwind CSS structure (proper @tailwind imports)
- ✅ Added accessibility features and ARIA labels
- ✅ Implemented responsive design patterns
- ✅ Added proper data-testid attributes for testing
- ✅ Enhanced HTML semantics and SEO meta tags
- ✅ Optimized asset loading from Figma exports

### Design System
- **Colors**: Custom CSS variables for consistent theming
- **Typography**: Inter font family with custom font tokens
- **Shadows**: Figma-exported shadow values for authentic design
- **Spacing**: Precise pixel values maintaining Figma fidelity

## Development

### Running the Project
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

### Key Components
- **Iphone**: Main mobile interface component with appointment details
- **Action Buttons**: Call, calendar, navigation, and modification actions
- **Appointment Checklist**: Interactive form completion tracker
- **Mobile Safari UI**: Authentic browser interface mockup

## User Preferences
- **Design Fidelity**: Maintain pixel-perfect Figma design implementation
- **Mobile-First**: Prioritize mobile user experience
- **Accessibility**: Include proper testing attributes and semantic HTML

## Recent Changes
- **2025-01-27**: Migrated from Figma to Replit environment
  - Fixed CSS import structure
  - Added responsive design patterns
  - Enhanced accessibility features
  - Implemented proper HTML semantics
  - Added comprehensive documentation
  - Removed Safari toolbar and navigation elements for cleaner interface
  - Made content area responsive and full-height

## Database Schema
Currently using in-memory storage with basic user management:
```typescript
users: {
  id: serial primary key
  username: text unique not null
  password: text not null
}
```

## API Endpoints
- Routes are defined in `server/routes.ts` with `/api` prefix
- Currently using in-memory storage implementation
- Extensible architecture for adding appointment and form management endpoints

## Notes
- Project maintains Figma design tokens through CSS custom properties
- All Figma assets are properly organized in `client/public/figmaAssets/`
- Mobile-first responsive design with iPhone 12 Pro dimensions as base
- Uses modern React patterns with TypeScript for type safety