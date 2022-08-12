import { darken } from 'polished';
import styled from 'styled-components';

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  label {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  button {
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 16px 32px;
    border-radius: 4px;
    cursor: pointer;
    border: 0;
    transition: all 300ms ease;
    &:hover {
      background: ${darken(0.2, '#1aac83')};
    }
  }

  input {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  padding: 32px;
  letter-spacing: -4px;
`;
