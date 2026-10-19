import type { Request, Response } from "express";

export function health(req: Request, res: Response) {
  return res.status(200).json({
    status: "ok",
    service: "order-management-api",
  });
}
