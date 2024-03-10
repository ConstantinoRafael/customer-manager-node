import { CreateCustomerParams } from "../protocols";
import customersRepository from "../repositories/customers-repository";

async function getCustomers() {
  const customers = await customersRepository.getCustomers();

  return customers;
}

async function getCustomerByName(name: string) {
  const customer = await customersRepository.getCustomerByName(name);

  if (customer.length === 0) {
    throw { message: "not_found" };
  }

  return customer;
}

async function getCustomerByEmail(email: string) {
  const customer = await customersRepository.getCustomerByEmail(email);

  if (customer.length === 0) {
    throw { message: "not_found" };
  }

  return customer;
}

async function getCustomerByPhone(phone: string) {
  const customer = await customersRepository.getCustomerByPhone(phone);

  if (customer.length === 0) {
    throw { message: "not_found" };
  }

  return customer;
}

async function createCustomer(params: CreateCustomerParams) {
  const customerExist = await customersRepository.getCustomerByEmail(
    params.email
  );

  if (customerExist.length > 0) {
    throw { message: "There is already an user with given email" };
  }

  await customersRepository.createCustomer(params);
}

const customersService = {
  getCustomers,
  getCustomerByName,
  getCustomerByEmail,
  getCustomerByPhone,
  createCustomer,
};

export default customersService;
