import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0A1E2D;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
`;

export const FormWrapper = styled.div`
  background-color: #142F47;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-align: center;
`;

export const Mensagem = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${({ tipo }) => (tipo === 'erro' ? '#FF4C4C' : '#2ECC71')};
  margin-bottom: 20px;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CampoInput = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 8px;
  border: none;
  background-color: #F2F2F2;
  color: #0A1E2D;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #00AEEF;
  }
`;

export const GrupoBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const BotaoCadastrar = styled.button`
  flex: 1;
  background-color: #00AEEF;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #008FC7;
  }
`;

export const BotaoVoltar = styled.button`
  flex: 1;
  background-color: #FFFFFF;
  color: #0A1E2D;
  padding: 12px;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #F2F2F2;
  }
`;
