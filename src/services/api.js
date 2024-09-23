import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',  // EndPoint Spring
});

export const listarFuncionarios = () => api.get('/funcionarios');
export const buscarFuncionarioPorId = (id) => api.get(`/funcionarios/${id}`);
export const criarFuncionario = (funcionario) => api.post('/funcionarios', funcionario);
export const atualizarFuncionario = (id, funcionario) => api.put(`/funcionarios/${id}`, funcionario);
export const deletarFuncionario = (id) => api.delete(`/funcionarios/${id}`);

export default api;
