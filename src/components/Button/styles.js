import { css } from '@emotion/core';
import styled from '@emotion/styled';

const dynamicStyles = ({ light, round }) => css`
  background-color: ${light ? '#E7E7EB' : '#6E707A'};
  border-radius: ${round ? '50%' : '0'};
  padding: ${round ? '8px' : '12px 15px'};
  widht: ${round ? '22px' : 'auto'};
  height: ${round ? '22px' : 'auto'};
  color: ${light ? '#000' : '#fff'};
`;

export const ButtonStyle = styled.button`
  ${dynamicStyles};
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  transition: opacity .5s ease;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;
