import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import trackerLogo from '../assets/tracker-logo.png';
import { NavbarContainer, Logo, BotoesContainer, Botao } from '../styles/NavBar.styles';

export default function Navbar() {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState('');

  useEffect(() => {
    const tipo = localStorage.getItem('tipoUsuario'); // exemplo: 'Admin', 'Atendente', etc.
    setTipoUsuario(tipo);
  }, []);

  return (
    <NavbarContainer>
      <Logo src={trackerLogo} alt="Logo Tracker" />

      <BotoesContainer>
        {tipoUsuario !== 'Atendente' && (
          <Botao onClick={() => navigate('/cadastrar-cliente')}>Cadastrar Cliente</Botao>
        )}
        <Botao onClick={() => navigate('/registrar-atendimento')}>Registrar Atendimento</Botao>
        <Botao sair onClick={() => navigate('/')}>Logout</Botao>
      </BotoesContainer>
    </NavbarContainer>
  );
}
