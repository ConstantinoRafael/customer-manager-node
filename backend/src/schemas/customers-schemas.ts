import joi from "joi";
import { CreateCustomerParams } from "../protocols";

export const createCustomerSchema = joi.object<CreateCustomerParams>({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
});
