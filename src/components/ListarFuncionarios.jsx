import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListarFuncionarios = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/funcionarios");
        setFuncionarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    };

    fetchFuncionarios();
  }, []);

  return (
    <div>
      <h1>Funcionários</h1>
      <Link to="/adicionar">Adicionar Funcionário</Link>
      <ul>
        {funcionarios.map((funcionario) => (
          <li key={funcionario.id}>
            {funcionario.nome} - {funcionario.email}
            <Link to={`/editar/${funcionario.id}`}> Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarFuncionarios;
