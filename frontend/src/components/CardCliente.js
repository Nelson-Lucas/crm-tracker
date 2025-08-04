import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Texto,
  GrupoBotoes,
  Botao
} from '../styles/CardCliente.styles';

export default function CardCliente({ cliente, tipoUsuario, onDelete }) {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    const confirmar = window.confirm(
      `⚠️ Essa ação irá excluir o cliente "${cliente.nome}" de forma definitiva.\n\nTem certeza que deseja continuar?`
    );
    if (confirmar) {
      onDelete(cliente.id);
    }
  };

  return (
    <Card>
      <Texto><strong>Nome:</strong> {cliente.nome}</Texto>
      <Texto><strong>Email:</strong> {cliente.email}</Texto>
      <Texto><strong>Telefone:</strong> {cliente.telefone}</Texto>

      <GrupoBotoes>
        <Botao onClick={() => navigate(`/historico/${cliente.nome}`)}>
          Ver Histórico
        </Botao>

        {tipoUsuario === 'Administrador' && (
          <Botao excluir onClick={handleDeleteClick}>
            Excluir Cliente
          </Botao>
        )}
      </GrupoBotoes>
    </Card>
  );
}
