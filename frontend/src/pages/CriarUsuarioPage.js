import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import {
  Container,
  FormBox,
  Titulo,
  CampoInput,
  SelectTipo,
  Botao,
  BotaoContainer,
  Mensagem
} from '../styles/CriarUsuario.styles';

export default function CriarUsuarioPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('Atendente');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const validarCampos = () => {
    if (!nome.trim()) return 'nome não preenchido';
    if (!email.trim()) return 'email não preenchido';
    if (!tipo.trim()) return 'tipo não preenchido';
    if (!senha.trim()) return 'senha não preenchida';
    return '';
  };

  const handleCreateUser = async () => {
    const erro = validarCampos();
    if (erro) {
      setMensagem(`❌ ${erro}`);
      return;
    }

    try {
  await api.post('/users', { nome, email, tipo, senha });
  setMensagem('✅ Usuário criado com sucesso! Redirecionando...');
} catch (err) {
  const msg = err.response?.data?.error || '';
  console.log(msg)
  console.log(err)

  if (msg.includes('usuario já existe')) {
    setMensagem('❌ Nome já está em uso');
  } else if (msg.includes('email já existe')) {
    setMensagem('❌ Email já está em uso');
  } else {
    setMensagem('❌ Erro ao criar usuário, não repita nome e email!');
  }
}

  };

  useEffect(() => {
    if (mensagem.includes('sucesso')) {
      const timer = setTimeout(() => navigate('/'), 2000);
      return () => clearTimeout(timer);
    }
  }, [mensagem, navigate]);

  return (
    <Container>
      <FormBox>
        <Titulo>Criar Usuário</Titulo>

        <CampoInput
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <CampoInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <SelectTipo
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option>Administrador</option>
          <option>Vendedor</option>
          <option>Atendente</option>
        </SelectTipo>

        <CampoInput
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <BotaoContainer>
          <Botao onClick={handleCreateUser}>Salvar</Botao>
          <Botao voltar onClick={() => navigate('/')}>Voltar</Botao>
        </BotaoContainer>

        {mensagem && (
          <Mensagem sucesso={mensagem.includes('sucesso')}>
            {mensagem}
          </Mensagem>
        )}
      </FormBox>
    </Container>
  );
}
