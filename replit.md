# Portfolio Application

## Overview

This is a full-stack portfolio application built for Raj Shekhar, a Full Stack Developer. The application showcases projects, skills, education, and provides a contact form functionality. It's built with modern web technologies using a React frontend and Express backend with PostgreSQL database integration.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state, React hooks for local state

## Key Components

### Frontend Architecture
- **Component Library**: Built on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Comprehensive set of reusable components including cards, buttons, forms, navigation, and layout components

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Storage**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **API Routes**: RESTful endpoints for contact form submission and message retrieval
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling

### Database Schema
The application uses two main tables:
- **users**: Basic user management (id, username, password)
- **contact_messages**: Contact form submissions (id, firstName, lastName, email, subject, message, createdAt)

## Data Flow

1. **Contact Form Submission**: Users fill out the contact form → Frontend validates with Zod → API request to `/api/contact` → Backend validates and stores in database → Success/error response
2. **Message Retrieval**: Admin access to view messages via `/api/contact-messages` endpoint
3. **Static Content**: Portfolio sections (projects, skills, education) are currently static data stored in `lib/data.ts`

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, React Query for data fetching
- **Database**: Drizzle ORM with PostgreSQL support via @neondatabase/serverless
- **UI Components**: Extensive use of Radix UI primitives and shadcn/ui components
- **Validation**: Zod for schema validation and type safety

### Development Tools
- **Build System**: Vite with custom configuration for full-stack development
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Styling**: PostCSS with Tailwind CSS and autoprefixer

### Production Dependencies
- **Server**: Express.js with session management capabilities
- **Database Connection**: Configured for PostgreSQL with environment-based connection string

## Deployment Strategy

The application is configured for deployment with:

1. **Build Process**: 
   - Frontend: Vite builds React app to `dist/public`
   - Backend: esbuild bundles server code to `dist/index.js`

2. **Environment Configuration**:
   - Development: Uses tsx for hot-reloading server
   - Production: Runs compiled JavaScript with NODE_ENV=production

3. **Database Migration**:
   - Drizzle migrations stored in `./migrations`
   - Push changes with `npm run db:push`

4. **Static Assets**: Frontend served from Express server in production

## Changelog
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.