import { Router } from "express";
import { health } from "./products.controller";

export const productsRouters = Router();

productsRouters.get("/health", health);
