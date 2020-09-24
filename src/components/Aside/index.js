import React from 'react';
import styled from '@emotion/styled';
import iconLocation from 'assets/icons/icon-location.svg';

import Button from '../Button';

const ContainerAside = styled.aside`
  background-color: #1E213A;
  flex-shrink: 1;
  padding: 30px;
  @media (min-width: 768px) {
    width: 310px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconLocation = styled.img`
  width: 22px;
  height: 22px;
  padding: 0; 
  margin: 0;
`;

export default function Aside() {
  return (
    <ContainerAside>
      <ContainerButtons>
        <Button>
          Search for places
        </Button>

        <Button round>
          <IconLocation src={iconLocation} />
        </Button>
      </ContainerButtons>
    </ContainerAside>
  );
}
