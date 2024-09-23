import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListarFuncionarios from "./components/ListarFuncionarios";
import AdicionarFuncionario from "./components/AdicionarFuncionario";
import EditarFuncionario from "./components/EditarFuncionario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListarFuncionarios />} />
        <Route path="/adicionar" element={<AdicionarFuncionario />} />
        <Route path="/editar/:id" element={<EditarFuncionario />} />
      </Routes>
    </Router>
  );
}

export default App;
