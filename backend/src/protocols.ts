export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type CreateCustomerParams = Omit<Customer, "id">;
