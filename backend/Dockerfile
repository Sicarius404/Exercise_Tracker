# syntax=docker/dockerfile:1.7

FROM oven/bun:1-alpine AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --ci

FROM oven/bun:1-alpine AS builder
WORKDIR /app
RUN apk add --no-cache openssl
COPY package.json bun.lockb nest-cli.json tsconfig*.json ./
COPY prisma ./prisma
COPY src ./src

# Generate Prisma client
RUN bunx prisma generate

# Build the application
RUN bun run build

FROM oven/bun:1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000
RUN apk add --no-cache openssl
COPY package.json bun.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
RUN bun install --ci --omit=dev
RUN bunx prisma generate
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs
EXPOSE 3000
CMD ["bun", "run", "src/main.ts"]
