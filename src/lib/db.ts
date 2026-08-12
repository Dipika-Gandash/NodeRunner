import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const globalPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const Prisma = globalPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalPrisma.prisma = Prisma;

export default prisma;