import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0A1E2D;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 40px;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Mensagem = styled.div`
  text-align: center;
  font-weight: bold;
  color: #2ECC71;
  background-color: #FFFFFF;
  color: #0A1E2D;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Formulario = styled.form`
  background-color: #1B3B58; 
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border-radius: 12px;
`;


export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #F2F2F2;
`;

export const SelectCliente = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
  background-color: #F2F2F2;
  color: #0A1E2D;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #00AEEF;
  }
`;

export const Descricao = styled.textarea`
  padding: 12px;
  height: 140px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
  background-color: #F2F2F2;
  color: #0A1E2D;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #00AEEF;
  }
`;

export const GrupoBotoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Botao = styled.button`
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${({ voltar }) => (voltar ? '#FFFFFF' : '#00AEEF')};
  color: ${({ voltar }) => (voltar ? '#0A1E2D' : '#FFFFFF')};
  font-weight: bold;

  &:hover {
    background-color: ${({ voltar }) => (voltar ? '#F2F2F2' : '#008FC7')};
  }
`;
