import { connection } from "../database/database";

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

const customersRepository = {
  getCustomers,
  getCustomerByName,
  getCustomerByEmail,
  getCustomerByPhone,
};

export default customersRepository;
