import styled from 'styled-components';

export const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  padding: 32px;
  letter-spacing: -4px;
  cursor: pointer;
`;
