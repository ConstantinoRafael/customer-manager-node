"use client";

import { useState } from "react";
import ListCustomers from "./components/ListCustomers";
import FilterCustomers from "./components/FilterCustomers";
import CreateCustomer from "./components/CreateCustomer";
import OptimizedRoute from "./components/OptimizatedRoute";

export default function Home() {
  const [component, setComponent] = useState("list");
  console.log(component);

  return (
    <>
      <h1>Sistema de Gerenciamento de Clientes</h1>
      <button onClick={() => setComponent("list")}>Listar Clientes</button>
      <button onClick={() => setComponent("filter")}>Filtrar CLientes</button>
      <button onClick={() => setComponent("create")}>Cadastrar CLiente</button>
      <button onClick={() => setComponent("optimized")}>Melhor rota</button>
      {component === "list" && <ListCustomers />}
      {component === "filter" && <FilterCustomers />}
      {component === "create" && <CreateCustomer />}
      {component === "optimized" && <OptimizedRoute />}
    </>
  );
}
