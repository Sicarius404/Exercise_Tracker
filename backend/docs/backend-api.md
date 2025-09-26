## Overview

The Exercise Tracker backend exposes a RESTful API grouped by domain modules. All routes are served from the NestJS application root and, unless otherwise noted, require an authenticated user session (Better Auth guard). Payloads are JSON.

## Authentication

- Authentication and session management rely on Better Auth (`@thallesp/nestjs-better-auth`).
- Endpoints decorated with `@UseGuards(AuthGuard)` expect a valid session cookie; the backend derives `req.user.id` automatically.

## Gym Plans (`/gym-plans`)

Protected by Better Auth guard.

### POST `/gym-plans`

Create a gym plan with nested exercises.

- **Body**
  - `week` (number)
  - `day` (number)
  - `muscleGroup` (string)
  - `exercises` (array of objects)
    - `name` (string)
    - `sets` (number)
    - `reps` (number)
    - `weight` (number)
    - `notes` (string, optional)
- **Response**: Created plan with generated `id` and exercises.

### GET `/gym-plans`

Return all gym plans for the authenticated user.

- **Response**: Array of plans including exercises and any completed entries.

### GET `/gym-plans/:id`

Fetch a single plan owned by the user.

- **Params**: `id` (plan id)
- **Response**: Plan or `null` if not found/unauthorized.

### PATCH `/gym-plans/:id`

Update plan metadata (week/day/muscleGroup).

- **Body**: Partial object with any of `week`, `day`, `muscleGroup`.
- **Response**: Updated plan or `null` if not found.

### DELETE `/gym-plans/:id`

Delete a plan owned by the user.

- **Response**: `true` when deleted, `false` when not found.

### POST `/gym-plans/:id/exercises`

Add a new exercise to a plan.

- **Body**
  - `name`, `sets`, `reps`, `weight`, optional `notes`.
- **Response**: Created exercise or `null` if plan not found/unauthorized.

### PATCH `/gym-plans/exercises/:exerciseId`

Update an exercise belonging to the user.

- **Body**: Partial exercise fields (`name`, `sets`, `reps`, `weight`, `notes`).
- **Response**: Updated exercise or `null` when not authorized.

### DELETE `/gym-plans/exercises/:exerciseId`

Remove an exercise.

- **Response**: `true` when deleted, `false` otherwise.

### POST `/gym-plans/exercises/:exerciseId/complete`

Record a completed exercise set.

- **Body**
  - `actualSets` (number)
  - `actualReps` (number)
  - `actualWeight` (number)
  - `notes` (string, optional)
  - `createdAt` (ISO date string, optional)
- **Response**: Created completion entry or `null` if unauthorized.

## Run Plans (`/run-plans`)

Protected by Better Auth guard.

### POST `/run-plans`

Create a run plan.

- **Body**
  - `week` (number)
  - `day` (number)
  - `type` (string)
  - `plannedTime` (number, optional minutes)
  - `plannedDistance` (number, optional kilometers)
- **Response**: Created run plan.

### GET `/run-plans`

List all run plans for the user.

### GET `/run-plans/:id`

Get a specific run plan.

### PATCH `/run-plans/:id`

Update fields: `week`, `day`, `type`, `plannedTime`, `plannedDistance`, `completedRunId`.

### DELETE `/run-plans/:id`

Remove a plan. Response: `true` or `false`.

## Runs (`/runs`)

(Not guarded – client must provide `userId`.)

### POST `/runs`

Create a run entry.

- **Body**
  - `stravaId` (string, optional)
  - `date` (ISO string)
  - `distance` (number km)
  - `duration` (number minutes)
  - `pace` (number min/km)
  - `notes` (string, optional)
  - `userId` (number)
- **Response**: Created run.

### GET `/runs`

Query runs by `userId` (query param).

### GET `/runs/:id`

Fetch a single run by id + `userId` query.

### PATCH `/runs/:id`

Update run fields; accept `date` (ISO string), `distance`, `duration`, `pace`, `notes`, `stravaId`.

### DELETE `/runs/:id`

Delete a run belonging to the user.

### GET `/runs/strava/:stravaId`

Look up a run by Strava id.

## Stats (`/stats`)

Aggregations for dashboards. Requires `userId` query param.

### GET `/stats/weekly`

- Optional `weekStart` (ISO date). Defaults to current week.
- Returns totals: `totalMileage`, `averagePace`, `totalWeightLifted`, `runCount`, `completedExercises`.

### GET `/stats/personal-records`

Returns PRs: `fastest5k`, `fastest10k`, `fastestMarathon`, `heaviestSquat`, `heaviestBench`, `heaviestDeadlift`.

### GET `/stats/calendar`

- Optional `month` (0-11) and `year`.
- Returns `plannedWorkouts` and `completedWorkouts` arrays.

### GET `/stats/monthly`

- Requires `month` and `year` (numbers).
- Returns `totalRuns`, `totalDistance`, `totalGymSessions`, `totalWeightLifted`, `averagePace`.

### GET `/stats/dashboard`

Convenience endpoint returning:

- `weeklyStats`
- `personalRecords`
- `calendarView`

## Strava Integration (`/strava`)

Public endpoints for OAuth + data import.

### GET `/strava/auth-url`

Returns Strava authorization URL string.

### GET `/strava/callback`

Handles OAuth return. Query params: `code`, optional `error`.

- Success: `{ message, tokenData }`
- Failure: `{ error, details }`

### POST `/strava/import-runs`

- **Body**: `{ accessToken: string; userId: number }`
- Fetches activities and maps them to run payloads (does not persist).

### GET `/strava/activities`

- Query params: `accessToken`, optional `page`.
- Returns Strava activities array.

### GET `/strava/athlete`

- Query param: `accessToken`.
- Returns athlete profile.

## Notes for Frontend

- All dates returned by the API are ISO strings or native JS `Date` serialized to ISO.
- Distance values are in kilometers; durations are in minutes.
- Completed exercise objects include: `id`, `actualSets`, `actualReps`, `actualWeight`, `notes`, `createdAt`.
- Errors use NestJS default HTTP status responses; Strava endpoints wrap errors in JSON payloads.
