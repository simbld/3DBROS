# React + TypeScript + Next.js

This template provides a minimal setup to get React working with Next.js and some ESLint rules.

Next.js offers several built-in features:

- Server-side rendering and static site generation
- Automatic image optimization
- Support for CSS and Sass, as well as CSS Modules
- File-system based routing

This project uses several key packages:

- [next](https://www.npmjs.com/package/next) for the Next.js framework
- [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom) for React support
- [typescript](https://www.npmjs.com/package/typescript) for TypeScript support
- [@types/react](https://www.npmjs.com/package/@types/react) and [@types/node](https://www.npmjs.com/package/@types/node) for TypeScript definitions
- [sass](https://www.npmjs.com/package/sass) for Sass support

To set up TypeScript with Next.js, a `tsconfig.json` file is used. Next.js will automatically configure this file with default settings the first time you run `next dev`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- To configure ESLint with TypeScript and Next.js, a `.eslintrc.js` file is used. Here is an example of a basic configuration:

```cjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Ajoutez ici vos règles personnalisées
  },
}
```

Configure the top-level compilerOptions property like this:

```tsx
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "skipLibCheck": true,
    /* Bundler mode */
    "moduleResolution": "node",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowJs": true,
    "incremental": true,
    "esModuleInterop": true
  },
  "include": [
    "next-env.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) and [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) for linting TypeScript code
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) for linting React code
