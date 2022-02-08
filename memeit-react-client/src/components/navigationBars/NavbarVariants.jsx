import React from 'react';
import '../../App.js';
import { Container, Navbar, Dropdown } from 'react-bootstrap';
import { FaGrinSquintTears } from "react-icons/fa"
import { IconContext } from 'react-icons/lib';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


export const DefaultNavBar = () => {
  return <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid className="justify-content-start">
        <Navbar.Brand >
          <IconContext.Provider value={{ size: '1.5em', className: "brand logo" }}>
            <FaGrinSquintTears />
          </IconContext.Provider>
          <span className='brand'>MemeIt</span>
        </Navbar.Brand>
      <Dropdown>
        <Dropdown.Toggle variant='dark' id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
      
    </Navbar>
  </>;
};

export const BaseUserNavBar = () => {
  return <div><h1>Base</h1></div>;
};

export const ModeratorNavBar = () => {
  return <div><h1>Moderator</h1></div>;
};

