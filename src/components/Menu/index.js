import React from 'react';
import { Navbar, FormControl, Button, Nav, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Procurar" className="mr-sm-2" />
          <Button variant="outline-info">Pesquisar</Button>
        </Form>
      </Navbar>
    </div>
  );
}