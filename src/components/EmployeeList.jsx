import { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/employees/${id}`);
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <button>Adicionar Funcionário</button>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name}
            <button onClick={() => handleDelete(employee.id)}>Deletar</button>
            <button>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
