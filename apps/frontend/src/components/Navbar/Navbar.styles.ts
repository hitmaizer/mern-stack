import styled from 'styled-components';

export const Navbar = styled.header`
  width: 100%;
  background: #fff;

  a {
    color: #333;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutBtn = styled.button`
  background: #fff;
  color: ${({ theme }) => theme.colors.error};
  border: 2px solid ${({ theme }) => theme.colors.error};
  padding: 6px 10px;
  border-radius: 4px;
  font-family: 'Poppins';
  cursor: pointer;
  font-size: 1em;
  transition: all 300ms ease;
  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
  }
`;
