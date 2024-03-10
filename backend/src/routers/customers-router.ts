import { Router } from "express";
import {
  createCustomer,
  getCustomerByEmail,
  getCustomerByName,
  getCustomerByPhone,
  getCustomers,
} from "../controllers/customers-controller";

export const customersRouter = Router();

customersRouter
  .get("/", getCustomers)
  .get("/name/:name", getCustomerByName)
  .get("/email/:email", getCustomerByEmail)
  .get("/phone/:phone", getCustomerByPhone)
  .post("/", createCustomer);
