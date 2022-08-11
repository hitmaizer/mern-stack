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
  }
`;
