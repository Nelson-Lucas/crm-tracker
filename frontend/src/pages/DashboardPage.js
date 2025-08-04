import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import CardCliente from '../components/CardCliente';
import Navbar from '../components/NavBar';
import {
  Container,
  Titulo,
  Subtitulo,
  Mensagem,
  Grid,
  Paginacao,
  Botao,
  LinhaTopo,
  ContainerPesquisa,
  RotuloPesquisa,
  BuscaInputMenor,
  ListaTituloCentral
} from '../styles/DashboardPage.styles';

export default function DashboardPage() {
  const [clientes, setClientes] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [mensagem, setMensagem] = useState('');
  const [termoBusca, setTermoBusca] = useState('');
  const itensPorPagina = 12;

  const tipoUsuario = localStorage.getItem('tipoUsuario');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/clients')
      .then(res => setClientes(res.data))
      .catch(() => setClientes([]));
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/clients/${id}`);
      setClientes(clientes.filter(c => c.id !== id));
      setMensagem('Cliente deletado com sucesso!');
      setTimeout(() => setMensagem(''), 4000);
    } catch (err) {
      setMensagem('Erro ao deletar cliente.');
      setTimeout(() => setMensagem(''), 4000);
    }
  };

  const clientesFiltrados = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const totalPaginas = Math.ceil(clientesFiltrados.length / itensPorPagina);
  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const clientesPaginados = clientesFiltrados.slice(indiceInicial, indiceFinal);

  const mudarPagina = (novaPagina) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <Container>
      <Navbar tipoUsuario={tipoUsuario} />

      <LinhaTopo>
        <Titulo>Dashboard</Titulo>
        <Subtitulo><strong>Função:</strong> {tipoUsuario}</Subtitulo>
      </LinhaTopo>

      <div style={{ padding: '0 5vw', marginBottom: '30px', textAlign: 'center' }}>
        <ListaTituloCentral>Lista de Clientes</ListaTituloCentral>

        <ContainerPesquisa>
          <RotuloPesquisa>Pesquisar por nome de clientes</RotuloPesquisa>
          <BuscaInputMenor
            type="text"
            placeholder="Pesquisar por nome..."
            value={termoBusca}
            onChange={(e) => {
              setTermoBusca(e.target.value);
              setPaginaAtual(1);
            }}
          />
        </ContainerPesquisa>
      </div>

      {mensagem && <Mensagem>{mensagem}</Mensagem>}

      <Grid>
        {clientesPaginados.length > 0 ? (
          clientesPaginados.map(cliente => (
            <CardCliente
              key={cliente.id}
              cliente={cliente}
              tipoUsuario={tipoUsuario}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p style={{ margin: '0 40px' }}>Nenhum cliente encontrado.</p>
        )}
      </Grid>

      {clientesFiltrados.length > itensPorPagina && (
        <Paginacao>
          <Botao
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            ◀ Anterior
          </Botao>

          <span style={{ color: '#FFF' }}>
            Página {paginaAtual} de {totalPaginas}
          </span>

          <Botao
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
          >
            Próxima ▶
          </Botao>
        </Paginacao>
      )}
    </Container>
  );
}
