import { app } from "../app";
import request from "supertest";
import { describe, expect, it } from "vitest";

describe("Check Health return 200", () => {
  it("Deve retornar 200 e os dados de saúde", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "ok",
      service: "order-management-api",
    });
  });
});
describe("Check Router not Found return 404", () => {
  it("Deve Retornar 404", async () => {
    const response = await request(app).get("/rota-estranha");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "Rota não encontrada",
      path: "/rota-estranha",
    });
  });
  it("Deve Retornar 500", async () => {
    const response = await request(app).get("/test-error");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "Erro interno do servidor",
      message: "Ocorreu um erro inesperado",
    });
  });
});
