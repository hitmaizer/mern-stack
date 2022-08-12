import styled from 'styled-components';

export const Workouts = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 1400px;

  p {
    margin: 0;
    font-size: 0.9em;
    color: #555;
  }

  span {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    padding: 10px;
    background: #ffefef;
    border: 1px solid ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};
    border-radius: 4px;
    margin: 20px 0;
    transition: all 300ms ease;
    &:hover {
      background: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.colors.primary};
`;
