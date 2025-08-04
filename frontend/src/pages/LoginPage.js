import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import trackerLogo from '../assets/tracker-logo.png';
import {
  Container,
  Box,
  Titulo,
  Logo,
  CampoInput,
  Botao
} from '../styles/LoginPage.styles';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    const res = await api.post('/login', { email, senha });

    console.log('Token recebido:', res.data.token);


    localStorage.setItem('token', res.data.token);
    localStorage.setItem('tipoUsuario', res.data.usuario.tipo);

    navigate('/dashboard');
  } catch (err) {
    alert('Erro ao logar');
  }
};


  return (
    <Container>
      <Box>
        <Logo src={trackerLogo} alt="Logo Tracker" />
        <Titulo>Login</Titulo>

        <CampoInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CampoInput
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Botao onClick={handleLogin}>Entrar</Botao>
        <Botao secundario onClick={() => navigate('/criar-usuario')}>
          Criar Usuário
        </Botao>
      </Box>
    </Container>
  );
}
