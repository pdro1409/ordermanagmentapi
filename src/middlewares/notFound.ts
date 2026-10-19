import type { NextFunction, Request, Response } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    error: "Rota não encontrada",
    path: req.path,
  });
}
