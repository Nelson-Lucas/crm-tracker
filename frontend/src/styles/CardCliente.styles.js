import styled from 'styled-components';

export const Card = styled.div`
  background-color: #F2F2F2;
  padding: 20px;
  border-radius: 12px;
  color: #0A1E2D;
  box-shadow: 0 0 10px rgba(0, 174, 239, 0.15);
`;

export const Texto = styled.p`
  font-size: 0.95rem;
  margin-bottom: 8px;

  strong {
    color: #00AEEF;
  }
`;

export const GrupoBotoes = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

export const Botao = styled.button`
  padding: 10px;
  font-size: 0.95rem;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  background-color: ${({ excluir }) => (excluir ? '#FF4C4C' : '#00AEEF')};

  &:hover {
    background-color: ${({ excluir }) => (excluir ? '#D63031' : '#008FC7')};
  }
`;
