import { Module } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
