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

export async function getCustomerByName(req: Request, res: Response) {
  const name = req.params.name;

  try {
    const customer = await customersService.getCustomerByName(name);

    return res.status(httpStatus.OK).send(customer);
  } catch (error: any) {
    if (error.message === "not_found") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getCustomerByEmail(req: Request, res: Response) {
  const email = req.params.email;

  try {
    const customer = await customersService.getCustomerByEmail(email);

    return res.status(httpStatus.OK).send(customer);
  } catch (error: any) {
    if (error.message === "not_found") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getCustomerByPhone(req: Request, res: Response) {
  const phone = req.params.phone;

  try {
    const customer = await customersService.getCustomerByPhone(phone);

    return res.status(httpStatus.OK).send(customer);
  } catch (error: any) {
    if (error.message === "not_found") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function createCustomer(req: Request, res: Response) {
  const body = req.body;

  try {
    await customersService.createCustomer(body);

    return res.sendStatus(httpStatus.CREATED);
  } catch (error: any) {
    if (error.message === "There is already an user with given email") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
