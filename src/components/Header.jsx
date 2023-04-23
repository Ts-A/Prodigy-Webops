import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='px-4 '
    >
      <Navbar.Brand href='/'>
        <img src={logo} />
      </Navbar.Brand>{' '}
      {/* Brand name on the left */}
      <Navbar.Toggle aria-controls='basic-navbar-nav' />{' '}
      {/* Toggle button for mobile */}
      <Navbar.Collapse id='basic-navbar-nav'>
        {' '}
        {/* Collapsible Navbar */}
        <Nav className=''>
          {' '}
          {/* Navbar links on the right */}
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/schedule'>Schedule</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
          <Nav.Link href='/teams'>Teams</Nav.Link>
          <Nav.Link href='/gallery'>Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
