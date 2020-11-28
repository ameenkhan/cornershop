import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navbar = () => (
	<>
    <NavBar>
      <NavBar.Brand>s</NavBar.Brand>
      <Nav>
        <Nav.Link href="/about">
          About Us
        </Nav.Link>
        <Nav.Link href="/halal">
          Halal
        </Nav.Link>
        <Nav.Link href="/order-meat">
          Order Meat
        </Nav.Link>
        <Nav.Link href="/Contact Us">
          Contact Us
        </Nav.Link>
      </Nav>
    </NavBar>
	</>
)



export default Navbar;