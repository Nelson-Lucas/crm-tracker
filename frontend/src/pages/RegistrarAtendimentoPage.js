import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import {
  Container,
  Titulo,
  Mensagem,
  Formulario,
  Label,
  SelectCliente,
  Descricao,
  Botao,
  GrupoBotoes
} from '../styles/RegistrarAtendimento.styles';

export default function RegistrarAtendimentoPage() {
  const [clienteId, setClienteId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [clientes, setClientes] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/clients')
      .then((res) => setClientes(res.data))
      .catch(() => setClientes([]));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/atendimentos', { clienteId, descricao });
      setMensagem('✅ Atendimento registrado com sucesso!');
      setClienteId('');
      setDescricao('');
      setTimeout(() => setMensagem(''), 3000);
    } catch {
      setMensagem('⚠️ Erro ao registrar atendimento.');
      setTimeout(() => setMensagem(''), 3000);
    }
  };

  return (
    <Container>
      <Titulo>Registrar Atendimento</Titulo>

      {mensagem && <Mensagem>{mensagem}</Mensagem>}

      <Formulario onSubmit={handleSubmit}>
        <Label htmlFor="clienteId">Selecione o Cliente:</Label>
        <SelectCliente
          id="clienteId"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
          required
        >
          <option value="">-- Escolha um cliente --</option>
          {clientes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </SelectCliente>

        <Label htmlFor="descricao">Descrição do atendimento</Label>
        <Descricao
          id="descricao"
          placeholder="Descrição do atendimento"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <GrupoBotoes>
          <Botao type="submit">Salvar Atendimento</Botao>
          <Botao type="button" voltar onClick={() => navigate('/dashboard')}>
            Voltar
          </Botao>
        </GrupoBotoes>
      </Formulario>
    </Container>
  );
}
