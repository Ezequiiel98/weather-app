import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const ContainerSpiner = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;;
`;

const Spiner = styled.div`
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid #009688;
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: 1s ${Spin} linear infinite;
`;

export default function SpinerLoader() {
  return (
    <ContainerSpiner>
      <Spiner />
    </ContainerSpiner>
  );
}

