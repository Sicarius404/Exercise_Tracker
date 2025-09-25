---

# 📑 prd.md (Product Requirements Document)

```markdown
# Exercise Tracker – Product Requirements Document (PRD)

## 1. Goal
Create a **personal fitness tracker** that allows:
- Importing running data from Strava.
- Planning weekly runs and gym workouts.
- Tracking completion of workouts (runs + gym).
- Viewing summaries and progress over time.

---

## 2. Users

- **Primary user**: You (single-user system, no multi-tenant support needed).
- Optional expansion: multi-user support in future.

---

## 3. Core Features

### Running

- Import runs automatically via Strava API.
- Display list of past runs with details.
- Create running plans (weekly schedule).
- Compare planned vs completed runs.

### Gym

- Create weekly gym plan (e.g., Monday = Legs).
- Add exercises per day (sets, reps, weight).
- Mark exercises as complete.
- Track actual vs planned sets/reps.

### Dashboard

- Calendar view (planned + completed).
- Weekly summaries:
  - Total mileage
  - Average pace
  - Total weight lifted
- PR tracker:
  - Fastest 5K, 10K, Marathon
  - Heaviest squat, bench, deadlift

---

## 4. Non-Functional Requirements

- Self-hosted backend (NestJS).
- PostgreSQL database.
- API endpoints for mobile + web clients.
- Authentication with betterAuth (JWT).
- Strava OAuth integration.

---

## 5. Tech Stack

- **Frontend Web**: React (Next.js)
- **Mobile App**: React Native (Expo)
- **Backend**: NestJS
- **Database**: PostgreSQL (Prisma ORM)
- **Auth**: betterAuth
- **Deployment**: Docker + docker-compose

---

## 6. Roadmap

### Phase 1 – MVP

- User auth (betterAuth).
- Import runs from Strava.
- CRUD for weekly run + gym plans.
- Dashboard with planned vs completed.

### Phase 2 – Insights

- Weekly mileage and lifting volume.
- PR tracking.
- Calendar view for workouts.

### Phase 3 – Extras

- Auto-generate training plans (e.g., marathon build-up).
- Export workouts to Google Calendar.
- Sync gym workouts across devices.

---

## 7. Success Criteria

- I can log in securely.
- I can see my imported Strava runs.
- I can create a weekly workout plan (runs + gym).
- I can check off workouts when completed.
- I can view a summary of my weekly stats.

## 🗄 Database Schema (Prisma style)

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  runs      Run[]
  runPlans  RunPlan[]
  gymPlans  GymPlan[]
}

model Run {
  id         Int     @id @default(autoincrement())
  stravaId   String? @unique
  date       DateTime
  distance   Float
  duration   Float
  pace       Float
  notes      String?
}

model RunPlan {
  id              Int    @id @default(autoincrement())
  week            Int
  day             Int
  type            String
  plannedTime     Float?
  plannedDistance Float?
  completedRunId  Int?   @unique
  completedRun    Run?   @relation(fields: [completedRunId], references: [id])
}

model GymPlan {
  id          Int        @id @default(autoincrement())
  week        Int
  day         Int
  muscleGroup String
  exercises   Exercise[]
}

model Exercise {
  id        Int     @id @default(autoincrement())
  gymPlanId Int
  name      String
  sets      Int
  reps      Int
  weight    Float
  completed CompletedExercise[]
}

model CompletedExercise {
  id          Int     @id @default(autoincrement())
  exerciseId  Int
  actualSets  Int
  actualReps  Int
  actualWeight Float
  notes       String?
}
```
