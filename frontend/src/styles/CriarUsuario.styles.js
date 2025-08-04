import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0A1A2A;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
`;

export const FormBox = styled.div`
  background-color: #13293C;
  padding: 40px;
  border-radius: 10px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const Titulo = styled.h2`
  color: #FFFFFF;
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-align: center;
`;

export const CampoInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #C0C0C0;
  background-color: #E0E0E0;
  color: #0A1A2A;
  font-size: 1rem;

  &::placeholder {
    color: #707070;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #00AEEF;
  }
`;

export const SelectTipo = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #C0C0C0;
  background-color: #E0E0E0;
  color: #0A1A2A;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #00AEEF;
  }
`;

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Botao = styled.button`
  width: 48%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ voltar }) => voltar ? '#FFFFFF' : '#007BFF'};
  color: ${({ voltar }) => voltar ? '#13293C' : '#FFFFFF'};

  &:hover {
    background-color: ${({ voltar }) => voltar ? '#F2F2F2' : '#005FCC'};
  }
`;

export const Mensagem = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  text-align: center;
  color: ${({ sucesso }) => sucesso ? '#00FF88' : '#FF4444'};
`;
