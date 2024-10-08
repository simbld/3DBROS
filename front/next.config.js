import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/features/components"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@coverage": path.resolve(__dirname, "coverage"),
      "@data": path.resolve(__dirname, "src/data"),
      "@decorators": path.resolve(__dirname, "src/decorators"),
      "@design": path.resolve(__dirname, "src/design"),
      "@documents": path.resolve(__dirname, "src/documents"),
      "@elements": path.resolve(__dirname, "src/elements"),
      "@enums": path.resolve(__dirname, "src/enums"),
      "@env": path.resolve(__dirname, "src/env"),
      "@features": path.resolve(__dirname, "src/features"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
      "@global": path.resolve(__dirname, "src/global"),
      "@graphql": path.resolve(__dirname, "src/graphql"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@lang": path.resolve(__dirname, "lang"),
      "@layouts": path.resolve(__dirname, "src/features/layouts"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@locales": path.resolve(__dirname, "src/locales"),
      "@logger": path.resolve(__dirname, "src/logger"),
      "@middlewares": path.resolve(__dirname, "src/middlewares"),
      "@mocks": path.resolve(__dirname, "src/mocks"),
      "@models": path.resolve(__dirname, "src/models"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@pipes": path.resolve(__dirname, "src/pipes"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@public": path.resolve(__dirname, "public"),
      "@queries": path.resolve(__dirname, "src/queries"),
      "@reducers": path.resolve(__dirname, "src/redux-store/reducers"),
      "@repositories": path.resolve(__dirname, "src/repositories"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@sagas": path.resolve(__dirname, "src/sagas"),
      "@schemas": path.resolve(__dirname, "src/schemas"),
      "@services": path.resolve(__dirname, "src/services"),
      "@settings": path.resolve(__dirname, "src/settings"),
      "@redux-store": path.resolve(__dirname, "src/redux-store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@tests": path.resolve(__dirname, "src/__tests__"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@translations": path.resolve(__dirname, "src/translations"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@validations": path.resolve(__dirname, "src/validations"),
    };

    // Ajout de la gestion du polling pour Hot Module Replacement (HMR)
    config.watchOptions = {
      poll: 1000, // Vérifier les changements toutes les 1000ms (1 seconde)
      aggregateTimeout: 300,
    };

    return config;
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
