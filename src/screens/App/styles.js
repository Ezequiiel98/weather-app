import styled from '@emotion/styled';

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;
