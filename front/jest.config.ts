import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src", "<rootDir>/src/__tests__"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Ignore les fichiers CSS/SCSS dans les tests
    "@api/(.*)$": "<rootDir>/src/api/$1",
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
    "@types/(.*)$": "<rootDir>/src/types/$1",
    "@translations/(.*)$": "<rootDir>/src/translations/$1",
    "@utils/(.*)$": "<rootDir>/src/utils/$1",
    "@validations/(.*)$": "<rootDir>/src/validations/$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$", // Teste tous les fichiers `.test.tsx` ou `.spec.tsx`
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Extensions supportées par Jest
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Fichier de configuration Jest
  transformIgnorePatterns: ["/node_modules/(?!@testing-library)"], // Transforme tous les modules sauf ceux dans `node_modules` sauf @testing-library
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"], // Collecte la couverture de code sur les fichiers `.ts` et `.tsx`
};

export default config;
