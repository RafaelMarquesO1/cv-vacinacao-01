import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdicionarFuncionario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/funcionarios", {
        nome,
        email,
        senha,
        isAdmin,
      });
      navigate("/");
    } catch (error) {
      console.error("Erro ao adicionar funcionário:", error);
    }
  };

  return (
    <div>
      <h1>Adicionar Funcionário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        <div>
          <label>Admin:</label>
          <input type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarFuncionario;
