"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const process_1 = require("process");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: false,
        snapshot: true,
    });
    app.use((0, express_1.json)());
    app.enableCors({
        origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
        credentials: true,
    });
    await app.listen(process_1.env.BACKEND_PORT ?? 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map