import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: #0A1A2A;
  padding: 30px 20px;
  text-align: center;
`;

export const Logo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

export const BotoesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Botao = styled.button`
  background-color: ${({ sair }) => sair ? '#FF4444' : '#007BFF'};
  color: #FFFFFF;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ sair }) => sair ? '#D82F2F' : '#005FCC'};
  }
`;
