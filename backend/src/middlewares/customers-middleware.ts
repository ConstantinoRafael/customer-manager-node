import { NextFunction, Request, Response } from "express";
import { createCustomerSchema } from "../schemas/customers-schemas";
import httpStatus from "http-status";

export function validateSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;

  const { error } = createCustomerSchema.validate(body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((d) => d.message);
    return res.send(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
  }

  next();
}
