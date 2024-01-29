<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD001 -->

# hair-s-ball

#### For start FRONTEND and BACKEND simultaneously

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
- Next.js
- Axios
- Jest and React Testing Library

## BACK

The back-end of this project is built using the following technologies:

- Nest.js
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
