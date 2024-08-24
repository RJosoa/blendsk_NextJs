import { PrismaClient } from "@prisma/client";

// Déclare un objet global pour stocker Prisma dans l'environnement de développement
const globalForPrisma = globalThis;

// Utilise l'instance Prisma existante si elle est définie, sinon crée une nouvelle instance
export const prisma = globalForPrisma.prisma || new PrismaClient();

// Si l'environnement n'est pas en production, stocke l'instance Prisma dans l'objet global
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
