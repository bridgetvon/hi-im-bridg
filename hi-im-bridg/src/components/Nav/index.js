import React from 'react';
import { Nav, Bars, NavMenu, NavLink } from './NavbarEl';

const  Navbar = ({ toggle }) => {

  return (
  <>
  <Nav>
      <NavLink to="/">
          <img src={require('../../images/avatar.png')} alt='avatar' />
      </NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        <NavLink id="navbar" to="/">
            About
        </NavLink>
        <NavLink id="navbar" to="/projects">
            Portfolio
        </NavLink>
        <NavLink id="navbar" to="/contact">
           Contact
        </NavLink>
        <NavLink id="navbar" to="/resume">
           Resume
        </NavLink>
      </NavMenu>
  </Nav>
  </>
    );
}


export default Navbar;