import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 fixed-bottom">
      <Container>
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} All rights reserved 2024</p>
      </Container>
    </footer>
  );
};

export default Footer;
