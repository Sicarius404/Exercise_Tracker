import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { INestApplication } from "@nestjs/common";

describe("Auth (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication({ bodyParser: false });
    await app.init();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it("should sign-up and sign-in via Better Auth endpoints", async () => {
    const server = app.getHttpServer();
    const email = "z@gmail.com";
    const password = "Password123!"; // ensure strong password per defaults

    // Sign up
    const signUpRes = await request(server)
      .post("/api/auth/sign-up/email")
      .send({ email, password, name: "Test User" })
      .expect(200);

    expect(signUpRes.body).toBeDefined();

    // Sign in
    const signInRes = await request(server)
      .post("/api/auth/sign-in/email")
      .send({ email, password })
      .expect(200);

    // Should set a session cookie or return data
    const setCookie = signInRes.headers["set-cookie"];
    expect(setCookie || signInRes.body).toBeDefined();
  });
});
