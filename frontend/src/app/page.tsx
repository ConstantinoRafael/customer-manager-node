import ListCustomers from "./components/ListCustomers";

export default function Home() {
  return (
    <>
      <h1>Sistema de Gerenciamento de Clientes</h1>
      <button>Listar Clientes</button>
      <button>Filtrar CLientes</button>
      <button>Cadastrar CLiente</button>
      <button>Melhor rota</button>
      <ListCustomers />
    </>
  );
}
