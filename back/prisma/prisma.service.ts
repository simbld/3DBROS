/**
 * PrismaService
 * This service extends the PrismaClient class from the Prisma Client library. It also implements the OnModuleInit and OnModuleDestroy interfaces from the @nestjs/common package. This allows the service to connect to the database when the module is initialized and disconnect when the module is destroyed.
 */
import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
