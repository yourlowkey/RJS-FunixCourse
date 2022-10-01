import React from 'react';

import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const Header = () => {
  return (
    <>
      <Navbar className="bg-primary">
        <Nav>
          <Nav.Link as={NavLink} to="/" exact="true">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/staff">
            Nhan vien
          </Nav.Link>
          <Nav.Link as={NavLink} to="/department">
            Phong ban
          </Nav.Link>
          <Nav.Link as={NavLink} to="/salary">
            Bang luong
          </Nav.Link>
        </Nav>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Header;
