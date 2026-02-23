import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    process.env.FRONTEND_URL,
  ].filter(Boolean) as string[],
  basePath: "/api/auth",
  session: {
    cookie: {
      name: "better-auth.session_token",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      httpOnly: true,
    },
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  rateLimit: {
    window: 60,
    max: 30,
  },
  security: {
    csrf: {
      enabled: true,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  jwt: {
    enabled: true,
  },
});
