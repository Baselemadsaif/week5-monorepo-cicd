const request = require("supertest");
const app = require("./app");

describe("Backend health endpoint", () => {
  test("GET /health should return service status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.service).toBe("backend");
  });
});
