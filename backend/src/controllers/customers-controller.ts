import { Request, Response } from "express";
import httpStatus from "http-status";
import customersService from "../services/customers-service";

export async function getCustomers(req: Request, res: Response) {
  try {
    const customers = await customersService.getCustomers();

    return res.status(httpStatus.OK).send(customers);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
