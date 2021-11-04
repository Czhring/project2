import React from 'react';
import {Link ,Route, Switch}  from 'react-router-dom';
import Cart from '../Cart/Cart';
import Cold from '../Cold/Cold';
import Home from '../Home/Home';
import Hot from '../Hot/Hot';
import HotDescription from "../Description/HotDescription";
import ColdDescription from "../Description/ColdDescription";
import  Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap'

function Header () {
    return (
<div className="header">
<Navbar fixed ="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to ='/'><h1>Czhring's Coffee</h1></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Link to ='/hot'><h2>Hot</h2></Link >
        <Link to ='/iced'><h2>Cold</h2></Link >
        <Link to ='/cart'><h2>Cart</h2></Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
}


export default Header