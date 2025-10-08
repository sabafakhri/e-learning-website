import { PrismaClient } from "./generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prismaClient = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prismaClient;

export const prisma = prismaClient.$extends(withAccelerate());
