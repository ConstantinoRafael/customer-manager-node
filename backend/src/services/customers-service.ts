import customersRepository from "../repositories/customers-repository";

async function getCustomers() {
  const customers = await customersRepository.getCustomers();

  return customers;
}

const customersService = {
  getCustomers,
};

export default customersService;
