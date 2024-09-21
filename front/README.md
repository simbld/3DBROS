# React + TypeScript + Next.js + Docker

## 1. Fonctionnalités principales de Next.js

Next.js offre plusieurs fonctionnalités intégrées :

- Rendu côté serveur (SSR) et génération statique (SSG)
- Optimisation automatique des images
- Prise en charge de CSS et Sass, ainsi que des modules CSS
- Routage basé sur le système de fichiers
- Support TypeScript et ESLint préconfiguré

## 2. Bibliothèques utilisées

Ce projet utilise plusieurs bibliothèques clés :

- [next](https://www.npmjs.com/package/next) pour le framework Next.js
- [react](https://www.npmjs.com/package/react) et [react-dom](https://www.npmjs.com/package/react-dom) pour le support React
- [typescript](https://www.npmjs.com/package/typescript) pour la prise en charge de TypeScript
- [sass](https://www.npmjs.com/package/sass) pour la gestion de Sass
- **Docker** pour exécuter l'application dans des conteneurs

## 3. Utilisation de Docker

Le projet utilise Docker pour gérer facilement l'exécution de l'application avec ses dépendances. Le fichier `docker-compose.yml` gère les services suivants :

- **Next.js (front-end)** : Serveur React basé sur Next.js.
- **Nest.js (back-end)** : API REST basée sur Nest.js.
- **Postgres** : Base de données relationnelle.
- **MongoDB** : Base de données NoSQL.

### Commandes Docker

Pour démarrer l'application avec Docker, utilisez la commande suivante :

```bash
docker-compose up -d
```

Cette commande crée et démarre les conteneurs pour chaque service défini dans docker-compose.yml.

## 4. Configuration ESLint et TypeScript

L'extension ESLint est configurée pour fonctionner avec Next.js, React, et TypeScript. Le fichier .eslintrc.cjs contient la configuration suivante :

```cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
```

Commandes ESLint
Pour vérifier le linting :

```bash
npm run lint
```

Pour corriger automatiquement les problèmes de linting :

```bash
  npm run lint:fix
```

## 5. Configuration TypeScript

Le fichier tsconfig.json configure TypeScript pour le projet. Voici une configuration exemple :

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "incremental": true,
    "baseUrl": "./",
    "paths": {
      "@assets/*": ["src/assets/*"],
      "@components/*": ["src/components/*"],
      "@services/*": ["src/services/*"],
      "@styles/*": ["src/styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## 6. Instructions d'exécution

### Local Development

Pour exécuter l'application en mode développement, utilisez la commande suivante :

```bash
npm run dev
```

Cela démarre un serveur de développement avec rechargement à chaud. Vous pouvez accéder à l'application à l'adresse <http://localhost:3000>.

### Build pour la production

Pour exécuter l'application en mode production, utilisez la commande suivante :

```bash
npm run build
```

Cela génère un répertoire .next contenant les fichiers optimisés pour la production. Vous pouvez ensuite démarrer l'application en mode production avec la commande suivante :

```bash
npm start
```

### Déploiement avec Docker

Pour déployer l'application dans un environnement Docker, exécutez la commande suivante :

```bash
docker-compose up --build // pour construire les images
docker-compose up -d // pour démarrer les conteneurs
```

## 7. Structure du projet

/front
├── /src
│ ├── /components # Composants React réutilisables
│ ├── /pages # Pages Next.js
│ ├── /styles # Fichiers Sass/CSS
│ ├── /services # Appels API et services
│ ├── /utils # Fonctions utilitaires
├── next.config.js # Configuration de Next.js
├── tsconfig.json # Configuration TypeScript
├── package.json # Fichier de configuration des dépendances
└── .eslintrc.cjs # Configuration ESLint
