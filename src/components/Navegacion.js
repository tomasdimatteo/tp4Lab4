import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Navegacion extends Component{
  render(){
    return(
      <div>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/productos">Productos</Nav.Link>
      <Nav.Link href="/direccion">¿Donde Estamos?</Nav.Link>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
      </Form>
      </Navbar>
      </div>
    )
  }

}


export default Navegacion;
