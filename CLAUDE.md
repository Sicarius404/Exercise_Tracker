# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Exercise Tracker is a full-stack fitness tracking application with three main components:
- **Backend API** (NestJS) - REST API at localhost:3001
- **Web Frontend** (Next.js) - React app at localhost:3000
- **Mobile App** (React Native/Expo) - Cross-platform mobile application

The application allows users to track running workouts (with Strava integration), plan gym workouts, and monitor progress through a dashboard.

## Development Commands

### Backend (NestJS)
```bash
cd backend
npm install
npm run start:dev     # Development with watch mode (port 3001)
npm run build         # Build for production
npm run start:prod    # Run production build
npm run lint          # ESLint
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:cov      # Coverage
```

### Frontend (Next.js)
```bash
cd tracker_frontend
npm install
npm run dev           # Development with Turbopack (port 3000)
npm run build         # Production build with Turbopack
npm run start         # Run production build
npm run lint          # ESLint
```

### Mobile App (Expo)
```bash
cd mobile-app
npm install
npm start             # Start Expo development server
npm run android       # Run on Android
npm run ios           # Run on iOS
npm run web           # Run in web browser
```

### Database
```bash
docker-compose up -d postgres    # Start PostgreSQL
npx prisma migrate dev          # Run migrations
npx prisma studio               # Database GUI
```

## Architecture

### Backend Structure
- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: better-auth with JWT sessions
- **Key Modules**:
  - `/src/auth` - Authentication configuration and guards
  - `/src/gym-plans` - Gym workout plan management
  - `/src/run-plans` - Running schedule management
  - `/src/runs` - Running data and Strava integration
  - `/src/stats` - Analytics and dashboard data
  - `/src/strava` - Strava API integration

### Frontend Structure
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS v4, Zustand state management
- **Authentication**: better-auth client with middleware protection
- **Key Directories**:
  - `/src/app` - Next.js App Router pages and layouts
  - `/src/components` - Reusable React components
  - `/src/features` - Feature-specific component groups
  - `/src/lib` - Utilities and configurations

### Database Models
Core entities: User, Run, RunPlan, GymPlan, Exercise, CompletedExercise
Authentication models: Session, Account, Verification (better-auth)

## API Structure

### Authentication Flow
- better-auth handles login/logout with email/password
- JWT sessions stored in HTTP-only cookies
- Frontend middleware protects routes (`/dashboard`, `/plans`, etc.)
- Backend guards validate sessions for protected endpoints

### Endpoint Patterns
- **Public**: `/api/auth/*`, `/api/runs` (client provides userId)
- **Protected**: `/api/gym-plans`, `/api/run-plans`, `/api/stats`
- **Strava Integration**: `/api/strava/*` for OAuth and data import

## Environment Configuration

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Authentication secret
- `STRAVA_CLIENT_ID`/`STRAVA_CLIENT_SECRET` - Strava API credentials
- `FRONTEND_URL` - Frontend URL for CORS (http://localhost:3000)

## Development Notes

- **Database Changes**: Use Prisma migrations (`npx prisma migrate dev`)
- **Code Style**: Follow existing patterns, use functional components
- **Testing**: Separate test database for e2e tests
- **Strava Integration**: OAuth flow requires callback URL configuration
- **Session Management**: better-auth handles cookies and CSRF protection