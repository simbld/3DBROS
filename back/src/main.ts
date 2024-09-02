import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(process.env.NEST_PUBLIC_API_URL);
}
bootstrap();
