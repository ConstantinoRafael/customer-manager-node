import axios from "axios";
import { useState } from "react";

export default function CreateCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function sendData(e) {
    e.preventDefault();

    const body = {
      name,
      email,
      phone,
    };

    axios
      .post("http://localhost:5000/customers", body)
      .then(() => {
        alert("Cadastrado com sucesso");
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <h2>Cadastrar cliente</h2>
      <form onSubmit={sendData}>
        <input
          placeholder="nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="telefone"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <button type="submit">Cadatrar</button>
      </form>
    </>
  );
}
