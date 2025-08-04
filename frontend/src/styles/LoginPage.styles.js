import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0A1E2D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
`;

export const Box = styled.div`
  background-color: #0A1E2D;
  color: #FFFFFF;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 174, 239, 0.15);
  max-width: 400px;
  width: 100%;
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 10px auto; // Centraliza horizontalmente
  height: 40px;
`;


export const Projeto = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const Titulo = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

export const CampoInput = styled.input`
  padding: 12px;
  width: 100%;
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

export const Botao = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: ${({ secundario }) => (secundario ? '#FFFFFF' : '#00AEEF')};
  color: ${({ secundario }) => (secundario ? '#0A1E2D' : '#FFFFFF')};
  cursor: pointer;

  &:hover {
    background-color: ${({ secundario }) => (secundario ? '#F2F2F2' : '#008FC7')};
  }
`;


