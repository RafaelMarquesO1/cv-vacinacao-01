import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditarFuncionario = () => {
  const { id } = useParams();
  const [funcionario, setFuncionario] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/funcionarios/${id}`);
        setFuncionario(response.data);
      } catch (error) {
        console.error("Erro ao buscar funcionário:", error);
      }
    };

    fetchFuncionario();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/v1/funcionarios/${id}`, funcionario);
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Editar Funcionário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={funcionario.nome || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={funcionario.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={funcionario.senha || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Admin:</label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={funcionario.isAdmin || false}
            onChange={() => setFuncionario((prev) => ({ ...prev, isAdmin: !prev.isAdmin }))}
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarFuncionario;
