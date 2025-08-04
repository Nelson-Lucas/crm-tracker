import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import Navbar from '../components/NavBar';
import {
  Container,
  Titulo,
  InfoCliente,
  Mensagem,
  ListaAtendimentos,
  Paginacao,
  Botao,
  BotaoVoltar,
  Rodape,
} from '../styles/HistoricoPage.styles';

export default function HistoricoPage() {
  const { clienteId } = useParams();
  const [atendimentos, setAtendimentos] = useState([]);
  const [clienteInfo, setClienteInfo] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [mensagem, setMensagem] = useState('');
  const itensPorPagina = 5;
  const tipoUsuario = localStorage.getItem('tipoUsuario');
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/atendimentos/${clienteId}`)
      .then(res => setAtendimentos(res.data))
      .catch(() => {
        setMensagem('Erro ao buscar atendimentos.');
        setTimeout(() => setMensagem(''), 4000);
        setAtendimentos([]);
      });

    api.get(`/clients`)
      .then(res => {
        const clienteEncontrado = res.data.find(
          c => c.nome === clienteId || c.id === Number(clienteId)
        );
        if (clienteEncontrado) {
          setClienteInfo(clienteEncontrado);
        } else {
          setMensagem('Cliente não encontrado.');
          setTimeout(() => setMensagem(''), 4000);
        }
      })
      .catch(() => {
        setMensagem('Erro ao buscar informações do cliente.');
        setTimeout(() => setMensagem(''), 4000);
      });
  }, [clienteId]);

  const totalPaginas = Math.ceil(atendimentos.length / itensPorPagina);
  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const atendimentosPaginados = atendimentos.slice(indiceInicial, indiceFinal);

  const mudarPagina = (novaPagina) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <Container>
      <Navbar tipoUsuario={tipoUsuario} />
      <Titulo>Histórico de Atendimentos</Titulo>

      {clienteInfo && (
        <InfoCliente>
          <p><strong>Nome:</strong> {clienteInfo.nome}</p>
          <p><strong>Email:</strong> {clienteInfo.email}</p>
          <p><strong>Telefone:</strong> {clienteInfo.telefone}</p>
        </InfoCliente>
      )}

      {mensagem && <Mensagem>{mensagem}</Mensagem>}

      {atendimentos.length === 0 ? (
        <p>Este cliente ainda não possui atendimentos.</p>
      ) : (
        <ListaAtendimentos>
          {atendimentosPaginados.map((at) => (
            <li key={at.id}>
              <strong>Descrição do atendimento:</strong> {at.descricao}
            </li>
          ))}
        </ListaAtendimentos>
      )}

      <Rodape>
        <Paginacao>
          <Botao onClick={() => mudarPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>
            ◀ Anterior
          </Botao>
          <span>Página {paginaAtual} de {totalPaginas}</span>
          <Botao onClick={() => mudarPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>
            Próxima ▶
          </Botao>
        </Paginacao>

        <BotaoVoltar onClick={() => navigate('/dashboard')}>
          ⬅ Voltar ao Dashboard
        </BotaoVoltar>
      </Rodape>
    </Container>
  );
}
