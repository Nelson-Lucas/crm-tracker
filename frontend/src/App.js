import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CriarUsuarioPage from './pages/CriarUsuarioPage';
import DashboardPage from './pages/DashboardPage';
import CadastrarClientePage from './pages/CadastrarClientePage';
import RegistrarAtendimentoPage from './pages/RegistrarAtendimentoPage';
import HistoricoPage from './pages/HistoricoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/criar-usuario" element={<CriarUsuarioPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/cadastrar-cliente" element={<CadastrarClientePage />} />
        <Route path="/registrar-atendimento" element={<RegistrarAtendimentoPage />} />
        <Route path="/historico/:clienteId" element={<HistoricoPage />} />
      </Routes>
    </Router>
  );
}
