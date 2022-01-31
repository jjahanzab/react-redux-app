import React, { useState, useEffect } from 'react';
import {Container, Navbar, Button} from 'react-bootstrap';

const Header = (props) => {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Ecomm App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="info">Cart <span>{props?.items?.length}</span></Button>
          </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;