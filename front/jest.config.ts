import { type JestConfigWithTsJest, createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

/**
 * @type {import('ts-jest').JestConfigWithTsJest}
 * **/
const jestConfig: JestConfigWithTsJest = {
  ...defaultPreset,
  preset: "ts-jest/presets/default-esm", // Utilisation de ESM dans ts-jest
  testEnvironment: "jsdom", // L'environnement de test simule un navigateur (important pour les tests React)
  roots: ["<rootDir>/src", "<rootDir>/src/__tests__"], // Les répertoires où Jest va chercher les fichiers à tester
  transform: {
    "^.+\\.(ts|tsx)$": [
      // Transformation des fichiers TypeScript/TSX
      "ts-jest", // Utilisation de ts-jest pour transformer les fichiers TypeScript/TSX
      {
        // On précise l'utilisation de `tsconfig` pour les tests
        tsconfig: "tsconfig.json", // Utilisation de ton fichier tsconfig.json pour ts-jest
        isolatedModules: true, // Option pour améliorer les performances
      },
    ],
  },
  moduleNameMapper: {
    "redux-persist/es/storage": "redux-persist/lib/storage", // Mappage des modules entre ESM et CommonJS pour `redux-persist`
    "\\.(css|scss)$": "identity-obj-proxy", // Gestion des fichiers CSS/SCSS dans les tests
    // Mappage des chemins d'alias vers les répertoires correspondants
    "@assets/(.*)$": "<rootDir>/src/assets/$1",
    "@common/(.*)$": "<rootDir>/src/common/$1",
    "@components/(.*)$": "<rootDir>/src/features/components/$1",
    "@configs/(.*)$": "<rootDir>/src/configs/$1",
    "@constants/(.*)$": "<rootDir>/src/constants/$1",
    "@containers/(.*)$": "<rootDir>/src/containers/$1",
    "@contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "@coverage/(.*)$": "<rootDir>/coverage/$1",
    "@data/(.*)$": "<rootDir>/src/data/$1",
    "@decorators/(.*)$": "<rootDir>/src/decorators/$1",
    "@design/(.*)$": "<rootDir>/src/design/$1",
    "@documents/(.*)$": "<rootDir>/src/documents/$1",
    "@elements/(.*)$": "<rootDir>/src/elements/$1",
    "@enums/(.*)$": "<rootDir>/src/enums/$1",
    "@env/(.*)$": "<rootDir>/src/env/$1",
    "@features/(.*)$": "<rootDir>/src/features/$1",
    "@fonts/(.*)$": "<rootDir>/src/fonts/$1",
    "@global/(.*)$": "<rootDir>/src/global/$1",
    "@graphql/(.*)$": "<rootDir>/src/graphql/$1",
    "@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
    "@lang/(.*)$": "<rootDir>/lang/$1",
    "@layouts/(.*)$": "<rootDir>/src/features/layouts/$1",
    "@lib/(.*)$": "<rootDir>/src/lib/$1",
    "@locales/(.*)$": "<rootDir>/src/locales/$1",
    "@logger/(.*)$": "<rootDir>/src/logger/$1",
    "@middlewares/(.*)$": "<rootDir>/src/middlewares/$1",
    "@mocks/(.*)$": "<rootDir>/src/mocks/$1",
    "@models/(.*)$": "<rootDir>/src/models/$1",
    "@modules/(.*)$": "<rootDir>/src/modules/$1",
    "@pages/(.*)$": "<rootDir>/src/pages/$1",
    "@pipes/(.*)$": "<rootDir>/src/pipes/$1",
    "@plugins/(.*)$": "<rootDir>/src/plugins/$1",
    "@providers/(.*)$": "<rootDir>/src/providers/$1",
    "@public/(.*)$": "<rootDir>/public/$1",
    "@queries/(.*)$": "<rootDir>/src/queries/$1",
    "@reducers/(.*)$": "<rootDir>/src/store/reducers/$1",
    "@repositories/(.*)$": "<rootDir>/src/repositories/$1",
    "@routes/(.*)$": "<rootDir>/src/routes/$1",
    "@sagas/(.*)$": "<rootDir>/src/sagas/$1",
    "@schemas/(.*)$": "<rootDir>/src/schemas/$1",
    "@services/(.*)$": "<rootDir>/src/services/$1",
    "@settings/(.*)$": "<rootDir>/src/settings/$1",
    "@store/(.*)$": "<rootDir>/src/store/$1",
    "@styles/(.*)$": "<rootDir>/src/styles/$1",
    "@templates/(.*)$": "<rootDir>/src/templates/$1",
    "@tests/(.*)$": "<rootDir>/src/__tests__/$1",
    "@themes/(.*)$": "<rootDir>/src/themes/$1",
    "@translations/(.*)$": "<rootDir>/src/translations/$1",
    "@utils/(.*)$": "<rootDir>/src/utils/$1",
    "@validations/(.*)$": "<rootDir>/src/validations/$1",
  },
  globals: {
    "ts-jest": {
      // Configuration de ts-jest
      tsconfig: "tsconfig.json", // Utilisation de ton fichier tsconfig.json pour ts-jest
      isolatedModules: true, // Améliore la vitesse des tests
    },
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$", // Définition des fichiers de test (.test.tsx ou .spec.tsx)
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Extensions reconnues par Jest
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup supplémentaire après l'environnement de test
  transformIgnorePatterns: ["<rootDir>/node_modules/"], // Ignorer la transformation des fichiers dans node_modules, sauf exceptions nécessaires
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"], // Collecte des statistiques de couverture de code uniquement sur les fichiers TypeScript/TSX
};

export default jestConfig;
