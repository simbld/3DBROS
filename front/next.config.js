import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": path.resolve(__dirname, "src/assets"),
      "@public": path.resolve(__dirname, "public"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@env": path.resolve(__dirname, "src/env"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@lang": path.resolve(__dirname, "src/lang"),
      "@components": path.resolve(__dirname, "src/features/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@features": path.resolve(__dirname, "src/features"),
      "@layouts": path.resolve(__dirname, "src/features/layouts"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@reducers": path.resolve(__dirname, "src/store/reducers"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@models": path.resolve(__dirname, "src/models"),
      "@middlewares": path.resolve(__dirname, "src/middlewares"),
      "@api": path.resolve(__dirname, "src/api"),
      "@graphql": path.resolve(__dirname, "src/graphql"),
      "@coverage": path.resolve(__dirname, "coverage"),
      "@validations": path.resolve(__dirname, "src/validations"),
      "@tests": path.resolve(__dirname, "__tests__"),
      "@mocks": path.resolve(__dirname, "mocks"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
      "@global": path.resolve(__dirname, "src/global"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
    };
    return config;
  },
};
