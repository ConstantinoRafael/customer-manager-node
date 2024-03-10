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

const customersService = {
  getCustomers,
  getCustomerByName,
  getCustomerByEmail,
  getCustomerByPhone,
};

export default customersService;
