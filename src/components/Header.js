import React from 'react';

import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className="Header">
      <Navbar className="bg-primary">
        <Nav>
          <Nav.Link as={NavLink} to="/" exact="true">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/staff">
          <FontAwesomeIcon icon="fa-solid fa-user-group" />          
           Nhan vien
          </Nav.Link>
          <Nav.Link as={NavLink} to="/department">
          <FontAwesomeIcon icon="fa-solid fa-building-user" />
            Phong ban
          </Nav.Link>
          <Nav.Link as={NavLink} to="/salary">
          <FontAwesomeIcon icon="fa-solid fa-money-bill" />
            Bang luong
          </Nav.Link>
        </Nav>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default Header;
