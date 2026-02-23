import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "process";
import { json } from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, // Required for Better Auth
    snapshot: true,
  });
  app.use(json());
  app.enableCors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
  });
  await app.listen(env.BACKEND_PORT ?? 3001);
}
bootstrap();
