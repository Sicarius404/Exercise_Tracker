# Exercise Tracker – Project Spec

## 🛠 Tech Stack

- **Frontend Web**: React (Next.js)
- **Mobile App**: React Native (Expo)
- **Backend**: NestJS
- **Auth**: better-auth (NextAuth alternative)
- **Database**: PostgreSQL (with Prisma ORM)
- **Deployment**: Docker (NestJS + Postgres), Vercel (Next.js), Expo for mobile

---

## 📂 Folder Structure

exercise-tracker/
│
├── backend/ (NestJS)
│ ├── src/
│ │ ├── auth/ # betterAuth integration
│ │ ├── runs/ # Strava sync + run data
│ │ ├── run-plans/ # Weekly running plans
│ │ ├── gym-plans/ # Weekly gym workouts
│ │ ├── exercises/ # Exercises per gym day
│ │ ├── stats/ # Summaries & PRs
│ │ ├── database/ # Prisma or TypeORM config
│ │ ├── app.module.ts
│ │ └── main.ts
│ ├── prisma/ # Prisma schema & migrations
│ ├── package.json
│ └── Dockerfile
│
├── frontend-web/ (Next.js)
│ ├── src/
│ │ ├── pages/
│ │ │ ├── index.tsx # Dashboard
│ │ │ ├── runs.tsx # Run list
│ │ │ ├── plan.tsx # Weekly plan
│ │ │ └── auth/ # betterAuth pages
│ │ ├── components/
│ │ └── lib/ # API client
│ ├── package.json
│ └── next.config.js
│
├── mobile-app/ (React Native – Expo)
│ ├── src/
│ │ ├── screens/
│ │ │ ├── HomeScreen.tsx
│ │ │ ├── RunsScreen.tsx
│ │ │ ├── PlanScreen.tsx
│ │ │ └── AuthScreen.tsx
│ │ ├── components/
│ │ └── lib/ # API client shared with web
│ ├── app.json
│ └── package.json
│
├── docs/
│ ├── gemini.md
│ └── prd.md
│
├── docker-compose.yml # Run Postgres + backend
└── README.md

---

## 🔑 Backend Modules

### AuthModule

- betterAuth integration
- JWT sessions
- Supports Strava OAuth tokens

### RunsModule

- Import runs from Strava (daily cron job)
- Endpoints:
  - `GET /runs` → list runs
  - `GET /runs/:id` → run details
  - `POST /runs/import` → manual sync

### RunPlansModule

- Weekly running plan
- Fields: week, day, type, planned_time, planned_distance
- Link to `runs` when completed

### GymPlansModule

- Weekly gym plan (e.g., Monday: Legs)
- Stores muscle group & notes

### ExercisesModule

- Add exercises to gym plan
- Sets, reps, weight
- Completion logging

### StatsModule

- Calculate weekly stats:
  - Total distance, pace trends
  - Total lifted weight
  - PRs (fastest 5K, heaviest squat)

---
