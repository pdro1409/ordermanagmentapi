import express from "express";
import { productsRouters } from "./modules/products/products.routes";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
export const app = express();
app.use(express.json());
app.use(productsRouters);
app.use(notFound);
app.use(errorHandler);
