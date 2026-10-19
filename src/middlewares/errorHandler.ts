import type { NextFunction, Request, Response } from "express";
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    error: "Erro interno do servidor",
    message: "Ocorreu um erro inesperado",
  });
};
