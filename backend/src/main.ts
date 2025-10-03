import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, // Required for Better Auth
    snapshot: true,
  });
  app.enableCors({
    origin: [
      process.env.FRONTEND_URL ?? "http://localhost:3000",
      "http://localhost:3000"
    ],
    credentials: true,
  });
  await app.listen(env.BACKEND_PORT ?? 3001);
}
bootstrap();
