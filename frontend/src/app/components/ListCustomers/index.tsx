"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function ListCustomers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/customers")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {customers.map((c) => (
        <div key={c.id}>{c.email} </div>
      ))}
    </>
  );
}
