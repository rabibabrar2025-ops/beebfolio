# Rabib Alam Executive Portfolio

## Overview

This is a professional portfolio website for Rabib Alam, a Chief Operator and Product Leader specializing in AI/ML infrastructure. The site presents his career through quantifiable outcomes and business impact rather than traditional job hierarchies, featuring sections for impact metrics, work experience, technical expertise, and education. The application is built as a single-page React application with a modern, executive-focused design system inspired by companies like Linear and Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice**: React 18+ with TypeScript
- **Rationale**: Provides type safety, component reusability, and excellent developer experience
- **Router**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state and local React state for UI
- **Build Tool**: Vite for fast development and optimized production builds

**UI Component System**: Shadcn/ui with Radix UI primitives
- **Rationale**: Provides accessible, customizable components without runtime overhead
- **Styling**: Tailwind CSS with custom design tokens for consistent spacing, typography, and colors
- **Theme System**: CSS variables-based theming supporting light/dark modes with localStorage persistence
- **Typography**: Inter for headings/body, JetBrains Mono for technical content

**Design System Principles**:
- Reference-based design drawing from Linear, Stripe, and LinkedIn aesthetics
- Outcome-driven storytelling emphasizing metrics and business impact
- Asymmetric layouts with full-viewport hero section
- Consistent spacing primitives (4, 8, 12, 16, 20, 24 Tailwind units)
- Max-width containers (7xl for sections, 4xl for content readability)

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- **Rationale**: Lightweight, flexible, and well-suited for serving the SPA with minimal API requirements
- **Development Mode**: Vite middleware integration for HMR during development
- **Production Mode**: Serves pre-built static assets from dist/public

**API Structure**: Currently minimal with placeholder routes
- RESTful endpoints prefixed with `/api`
- Request/response logging middleware for debugging
- JSON body parsing with raw body preservation for webhook support

**Storage Layer**: In-memory storage with interface-based abstraction
- **Current Implementation**: MemStorage class using Map for user data
- **Interface**: IStorage defines CRUD contract for future database integration
- **Rationale**: Allows switching to database (likely PostgreSQL via Drizzle) without changing business logic

### Data Storage Solutions

**Current State**: Memory-based storage (MemStorage)
- Temporary solution using JavaScript Map
- Implements IStorage interface for easy migration

**Planned Migration**: Drizzle ORM with PostgreSQL
- Configuration already present in `drizzle.config.ts`
- Schema defined in `shared/schema.ts` with users table
- Connection ready for Neon serverless PostgreSQL
- Zod validation schemas for type-safe inserts
- **Rationale**: Type-safe ORM with excellent TypeScript support, lightweight compared to alternatives

**Schema Design**:
- Users table with UUID primary keys (PostgreSQL gen_random_uuid)
- Shared schema location for type consistency across client/server

### Authentication and Authorization

**Current State**: Basic user schema defined, no active auth implementation
- User model includes username and password fields
- Session storage configured with connect-pg-simple
- **Future Implementation**: Likely session-based auth with secure password hashing

### External Dependencies

**Core UI Libraries**:
- Radix UI components (@radix-ui/*): Accessible, unstyled primitives for complex components
- Tailwind CSS: Utility-first styling framework
- Class Variance Authority: Type-safe variant management for components
- Lucide React: Icon system

**Development Tools**:
- TypeScript: Type safety across entire stack
- Vite: Build tool and dev server
- ESBuild: Production server bundling
- Drizzle Kit: Database migration management

**Deployment Platform**: Replit
- Specialized Vite plugins (@replit/vite-plugin-*) for development experience
- Cartographer plugin for enhanced debugging
- Runtime error modal overlay
- Dev banner for Replit environment

**Database Service**: Neon Serverless PostgreSQL (configured, not yet active)
- @neondatabase/serverless driver
- Serverless-optimized PostgreSQL connection

**State Management**:
- TanStack Query: Server state caching and synchronization
- React Hook Form with Zod resolvers: Form validation (infrastructure present)

**Utilities**:
- date-fns: Date manipulation
- clsx + tailwind-merge: Conditional class name management
- nanoid: Unique ID generation