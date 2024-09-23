import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const DeletarFuncionario = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/v1/funcionarios/${id}`)
      .then(() => {
        console.log('Funcionário deletado');
        history.push('/funcionarios/listar');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Tem certeza que deseja deletar este funcionário?</h2>
      <button onClick={handleDelete}>Deletar</button>
      <button onClick={() => history.push('/funcionarios/listar')}>Cancelar</button>
    </div>
  );
};

export default DeletarFuncionario;
