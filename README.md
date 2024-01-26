<!-- markdownlint-disable MD024 -->

# hair-s-ball

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
