"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function ListCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  useEffect(() => {
    axios
      .get<Customer[]>("http://localhost:5000/customers")
      .then((response: AxiosResponse<Customer[]>) =>
        setCustomers(response.data)
      )
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {customers.map((c) => (
        <div key={c.id}>
          {c.name} - {c.email} - {c.phone}{" "}
        </div>
      ))}
    </>
  );
}
