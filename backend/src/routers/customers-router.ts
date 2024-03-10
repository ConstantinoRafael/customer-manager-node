import { Router } from "express";
import { getCustomers } from "../controllers/customers-controller";

export const customersRouter = Router();

customersRouter.get("/", getCustomers);
