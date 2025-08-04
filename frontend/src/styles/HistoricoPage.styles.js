import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0A1E2D;
  color: #FFFFFF;
  padding: 60px 40px;
  font-family: 'Segoe UI', sans-serif;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
`;

export const InfoCliente = styled.div`
  background-color: #F2F2F2;
  color: #0A1E2D;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Mensagem = styled.div`
  background-color: #FFFFFF;
  color: #0A1E2D;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const ListaAtendimentos = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background-color: #FFFFFF;
    color: #0A1E2D;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 12px;
  }
`;

export const Rodape = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Paginacao = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex: 1;
`;

export const Botao = styled.button`
  padding: 10px 16px;
  background-color: #00AEEF;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #008FC7;
  }

  &:disabled {
    background-color: #777;
    cursor: not-allowed;
  }
`;

export const BotaoVoltar = styled.button`
  background-color: #FFFFFF;
  color: #0A1E2D;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #F2F2F2;
  }
`;
