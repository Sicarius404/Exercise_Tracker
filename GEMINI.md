# Project Overview

This is a full-stack exercise tracker application. It consists of a backend API, a web frontend, and a mobile app.

## Technologies

*   **Backend:**
    *   [NestJS](https://nestjs.com/) (Node.js framework)
    *   [Prisma](https://www.prisma.io/) (ORM)
    *   [PostgreSQL](https://www.postgresql.org/) (Database)
    *   [Docker](https://www.docker.com/) for containerization
    *   [better-auth](https://better-auth.com/) for authentication

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) (React framework)
    *   [Tailwind CSS](https://tailwindcss.com/) (CSS framework)

*   **Mobile App:**
    *   [React Native](https://reactnative.dev/)
    *   [Expo](https://expo.dev/)

## Architecture

The project is a monorepo with three main parts:

*   `backend`: A NestJS application that provides a RESTful API for the frontend and mobile app. It uses Prisma to interact with the PostgreSQL database.
*   `tracker_frontend`: A Next.js web application that provides the user interface for the exercise tracker.
*   `mobile-app`: A React Native application for iOS and Android that provides a mobile experience for the exercise tracker.

The backend and database are containerized using Docker and can be orchestrated with `docker-compose`.

## Authentication

Authentication is handled by the `better-auth` library. It is configured in `backend/src/auth/auth.ts` to use email and password authentication, as well as JWT. The configuration also includes session management, rate limiting, and CSRF protection.

# Building and Running

## Backend

To build and run the backend:

```bash
cd backend
npm install
npm run build
npm run start:prod
```

To run the backend in development mode:

```bash
cd backend
npm install
npm run start:dev
```

To run the backend with Docker:

```bash
docker-compose up -d --build
```

## Frontend

To run the frontend in development mode:

```bash
cd tracker_frontend
npm install
npm run dev
```

To build and run the frontend in production:

```bash
cd tracker_frontend
npm install
npm run build
npm run start
```

## Mobile App

To run the mobile app:

```bash
cd mobile-app
npm install
npm start
```

Then, follow the instructions in the terminal to run the app on a simulator or a physical device.

# Development Conventions

## Backend

*   **Linting:** `npm run lint`
*   **Testing:** `npm run test` (unit tests), `npm run test:e2e` (end-to-end tests)

## Frontend

*   **Linting:** `npm run lint`

## Mobile App

*   This project uses the standard React Native and Expo conventions.