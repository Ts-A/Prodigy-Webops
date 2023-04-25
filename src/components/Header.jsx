import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import {  NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='#1a1a1a'
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
        <Nav className={styles.navbar}>
          {' '}
          {/* Navbar links on the right */}
            <Nav.Link>
              <NavLink to='/' className={styles.link}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/gallery' className={styles.link}>Gallery</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/teams' className={styles.link}>Teams</NavLink>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
