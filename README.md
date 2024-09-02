<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD001 -->
<img width="50" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /><img width="50" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /><img width="50" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" /><img width="50" height="50
50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" /><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /><img width="50" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /><img width="50" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /><img width="50" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />

# Docker Configuration

This project is fully containerized with Docker, allowing for consistent development and deployment environments. The Docker setup includes services for both the frontend (Next.js) and backend (Nest.js), as well as MongoDB and PostgreSQL databases.

### Services in Docker Compose

Next.js (Frontend) : A React-based frontend framework configured to run in a dedicated Docker container

Nest.js (Backend) : A progressive Node.js framework for building server-side applications, running in its own container

MongoDB : A NoSQL database used for storing non-relational data, running in a separate Docker container

PostgreSQL : A powerful, open-source relational database system, running in another Docker container

### Running the Application with Docker

To start all services simultaneously, simply use Docker Compose from the root of the project:

```bash
docker-compose up -d

```

This command will build (if necessary) and start all the containers defined in the

docker-compose.yml file. The "-d"

flag runs the containers in detached mode, leaving the terminal free for other commands.

### Accessing the Services

The Next.js frontend is accessible at <http://localhost:3001> (or the port mapped in your docker-compose.yml)

The Nest.js backend can be accessed at <http://localhost:4001> (or the mapped port)

MongoDB is available on the default port 27018 (as mapped in docker-compose.yml)

PostgreSQL database is accessible on port 5433 (or the port you have configured)

### Stopping the Services

To stop all running services, use the following command:

```bash
docker-compose down

```

This command stops and removes the containers, networks, and volumes created by

```bash
docker-compose up
```

# 3DBROS-app

### For start FRONTEND and BACKEND simultaneously

```json
"scripts": {
    "dev": "concurrently \"npm run dev --prefix front\" \"npm run start:dev --prefix back\"",
    "start": "concurrently \"npm run start --prefix front\" \"npm run start --prefix back\"",
    "lint": "concurrently \"npm run lint --prefix front\" \"npm run lint --prefix back\"",
    "test": "concurrently \"npm run test --prefix front\" \"npm run test --prefix back\"",
    "build": "concurrently \"npm run build --prefix front\" \"npm run build --prefix back\""
  },
```

## FRONT

The front-end of this project is built using the following technologies:

- React
- TypeScript
- Nextjs
- Axios
- Jest and React Testing Library

## BACK

The back-end of this project is built using the following technologies:

- Nestjs
- Jest

### FRONT-END

## Test

To run the front-end tests, navigate to the front-end folder and run the following command:

In packages.json :

```json
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "..."
  }
```

```bash
npm test
```

This will run the tests using Jest and React Testing Library.

## Build

```json
"scripts": {
"build": "next build",
"..."
},
```

```bash
npm build
```

## Dev

```json
"scripts": {
"dev": "next dev",
"..."
}
```

```bash
npm run dev
```

### BACK-END

## Test

To run the backend tests, navigate to the backend folder and run the following command:

```bash
npm test
```

This will run the tests using Jest.

## Build

```json
"scripts": {
  "...",
  "build": "tsc -p tsconfig.json"
},
```

```bash
npm build
```

## Dev

```json
"scripts": {
  "start:dev": "nest start --watch",
  "..."
}
```

```bash
npm run start:dev
```
