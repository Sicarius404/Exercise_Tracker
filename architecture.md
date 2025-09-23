# Application Architecture

This document outlines the architecture of the Exercise Tracker application.

## Overview

The application is a full-stack web application with a modern architecture, consisting of a React frontend, a Go backend, and a PostgreSQL database. The entire application is containerized using Docker for consistent development and deployment environments.

### Components

*   **Frontend:** A single-page application (SPA) built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). It is responsible for the user interface and all client-side interactions.
*   **Backend:** An API server written in [Go](https://go.dev/) using the [Gin](https://gin-gonic.com/) framework. It uses the `pgx` driver to communicate with the PostgreSQL database and handles all business logic and data processing.
*   **Database:** A [PostgreSQL](https://www.postgresql.org/) relational database used for persistent data storage.
*   **Containerization:** [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) are used to build, ship, and run the application components in isolated containers.

## Communication Flow

1.  The user interacts with the **React frontend** in their web browser.
2.  The frontend sends API requests (e.g., for creating, reading, updating, or deleting exercises) to the **Go backend**.
3.  The **Go backend** processes these requests, executes the necessary business logic, and queries the **PostgreSQL database**.
4.  The backend returns a response (typically in JSON format) to the frontend.
5.  The frontend updates the UI based on the response from the backend.
