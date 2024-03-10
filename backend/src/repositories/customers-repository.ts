import { connection } from "../database/database";
import { CreateCustomerParams } from "../protocols";

async function getCustomers() {
  const customers = await connection.query("SELECT * FROM customers");
  return customers.rows;
}

async function getCustomerByName(name: string) {
  const customer = await connection.query(
    "SELECT * FROM customers WHERE name=$1",
    [name]
  );
  return customer.rows;
}

async function getCustomerByEmail(email: string) {
  const customer = await connection.query(
    "SELECT * FROM customers WHERE email=$1",
    [email]
  );
  return customer.rows;
}

async function getCustomerByPhone(phone: string) {
  const customer = await connection.query(
    "SELECT * FROM customers WHERE phone=$1",
    [phone]
  );
  return customer.rows;
}

async function createCustomer(params: CreateCustomerParams) {
  console.log(params);
  const { name, email, phone } = params;
  await connection.query(
    "INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3)",
    [name, email.toLowerCase(), phone]
  );
}

const customersRepository = {
  getCustomers,
  getCustomerByName,
  getCustomerByEmail,
  getCustomerByPhone,
  createCustomer,
};

export default customersRepository;
