import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Grow = keyframes`
  0%, 40%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;

export const ContainerLoader = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 50px;
`;

export const Dot = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color:  #009688;
  -webkit-animation: 1.2s grow ease-in-out infinite ${props => props.delay || ''};
  animation: 1.2s ${Grow} ease-in-out infinite ${props => props.delay || ''};
  margin: ${props => props.margin || '0'};
`;

