"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(prisma, { provider: "postgresql" }),
    trustedOrigins: [process.env.FRONTEND_URL ?? "http://localhost:3000"],
    session: {
        cookie: {
            name: "session_token",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
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
//# sourceMappingURL=auth.js.map