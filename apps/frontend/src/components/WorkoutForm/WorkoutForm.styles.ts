import styled from 'styled-components';

export const WorkoutForm = styled.div`
  width: 100%;
  padding: 32px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    width: 100%;
  }

  label {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    width: 100%;
    min-width: fit-content;
    input {
      width: 100%;
    }
  }

  button {
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 16px 32px;
    border-radius: 4px;
    cursor: pointer;
    border: 0;
  }

  label,
  input {
    display: block;
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
  .error {
    border: 1px solid ${({ theme }) => theme.colors.error};
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Error = styled.p`
  padding: 10px;
  background: #ffefef;
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  border-radius: 4px;
  margin: 20px 0;
  width: 100%;
  text-align: center;
`;
