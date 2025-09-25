# syntax=docker/dockerfile:1.7

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache openssl
COPY package.json package-lock.json nest-cli.json tsconfig*.json ./
COPY prisma ./prisma
COPY src ./src

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000
RUN apk add --no-cache openssl
COPY package.json package-lock.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
RUN npm ci --omit=dev && npm cache clean --force
RUN npx prisma generate
RUN chown -R node:node /app
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]

