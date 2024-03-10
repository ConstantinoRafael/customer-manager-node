import { connection } from "../database/database";

async function getCustomers() {
  const customers = await connection.query("SELECT * FROM customers");
  return customers.rows;
}

const customersRepository = {
  getCustomers,
};

export default customersRepository;
