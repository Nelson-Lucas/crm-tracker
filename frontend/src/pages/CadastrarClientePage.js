import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import {
  Container,
  Titulo,
  Mensagem,
  FormWrapper,
  Formulario,
  CampoInput,
  GrupoBotoes,
  BotaoCadastrar,
  BotaoVoltar,
} from '../styles/CadastrarCliente.styles';

export default function CadastroCliente() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');
  const navigate = useNavigate();

  const formatarTelefone = (valor) => {
    const apenasDigitos = valor.replace(/\D/g, '');
    if (apenasDigitos.length <= 2) return `(${apenasDigitos}`;
    if (apenasDigitos.length <= 6) return `(${apenasDigitos.slice(0, 2)}) ${apenasDigitos.slice(2)}`;
    if (apenasDigitos.length <= 10) return `(${apenasDigitos.slice(0, 2)}) ${apenasDigitos.slice(2, 6)}-${apenasDigitos.slice(6)}`;
    return `(${apenasDigitos.slice(0, 2)}) ${apenasDigitos.slice(2, 7)}-${apenasDigitos.slice(7, 11)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'telefone' ? formatarTelefone(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telefoneLimpo = form.telefone.replace(/\D/g, '');
    if (telefoneLimpo.length !== 11) {
      setTipoMensagem('erro');
      setMensagem('⚠️ O telefone precisa conter exatamente 11 dígitos.');
      return;
    }

    try {
      await api.post('/clients', form);
      setTipoMensagem('sucesso');
      setMensagem(`✅ O cliente "${form.nome}" foi cadastrado com sucesso!`);
      setForm({ nome: '', email: '', telefone: '' });
    } catch (err) {
      const erro = err.response?.data;
      setTipoMensagem('erro');
      if (erro?.campo === 'nome') setMensagem(`⚠️ O nome "${form.nome}" já está em uso.`);
      else if (erro?.campo === 'email') setMensagem(`⚠️ O email "${form.email}" já está em uso.`);
      else if (erro?.campo === 'telefone') setMensagem(`⚠️ O telefone "${form.telefone}" já foi registrado.`);
      else setMensagem('⚠️ Erro ao cadastrar cliente. Tente novamente.');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Titulo>Cadastrar Cliente</Titulo>

        {mensagem && <Mensagem tipo={tipoMensagem}>{mensagem}</Mensagem>}

        <Formulario onSubmit={handleSubmit}>
          <CampoInput
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <CampoInput
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <CampoInput
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            required
            maxLength={15}
          />

          <GrupoBotoes>
            <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
            <BotaoVoltar type="button" onClick={() => navigate(-1)}>Voltar</BotaoVoltar>
          </GrupoBotoes>
        </Formulario>
      </FormWrapper>
    </Container>
  );
}
