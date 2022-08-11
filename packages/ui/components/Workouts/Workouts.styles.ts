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
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;
