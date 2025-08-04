import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0A1E2D;
  color: #FFFFFF;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
`;

export const LinhaTopo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 40px 20px;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 8px;
`;

export const Subtitulo = styled.p`
  font-size: 1rem;
  color: #F2F2F2;
  margin-bottom: 20px;
`;

export const ListaTituloCentral = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 16px;
`;

export const ContainerPesquisa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const RotuloPesquisa = styled.h3`
  text-align: center;
  margin-bottom: 6px;
  font-size: 1.05rem;
`;

export const BuscaInputMenor = styled.input`
  padding: 10px;
  width: 600px;
  max-width: 85%;
  border: none;
  border-radius: 8px;
  background-color: #F2F2F2;
  color: #0A1E2D;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #00AEEF;
  }
`;

export const Mensagem = styled.div`
  margin: 0 40px 20px;
  padding: 12px;
  background-color: #FFFFFF;
  border-radius: 8px;
  color: #0A1E2D;
  font-weight: bold;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin: 0 40px;
`;

export const Paginacao = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
`;

export const Botao = styled.button`
  padding: 10px 16px;
  background-color: #00AEEF;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #008FC7;
  }

  &:disabled {
    background-color: #777;
    cursor: not-allowed;
  }
`;
