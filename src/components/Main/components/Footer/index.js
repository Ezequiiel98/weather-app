import React from 'react';

import { Container } from './styles';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <Container>
      <p>Ezequiel Aragón &copy; {YEAR} @ DevChallenges.io</p>
    </Container>
  );
}

