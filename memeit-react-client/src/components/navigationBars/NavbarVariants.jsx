import '../../App.js';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { GiChiliPepper } from "react-icons/gi";
import { FaTags, FaPortrait } from "react-icons/fa"
import { Container, Navbar, Dropdown, Button } from 'react-bootstrap';
import { BsPen, BsDoorOpenFill, BsDoorClosedFill } from 'react-icons/bs'

import useGet from '../../fetchServices/useGet'
import LoginModal from '../authentication/LoginModal.jsx';

function BuildTagsDropItems() {
  const { data:tags, isPending, error } = useGet('https://localhost:7247/api/tag/get-all');
  return tags !== null && !isPending && error === null ? (tags.map((tag, index) => (
    <Dropdown.Item key={index}>{tag}</Dropdown.Item>
  ))) : <>{error}</>
}

export const DefaultNavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid className="justify-content-start">
        <Navbar.Brand >
          <IconContext.Provider value={{ size: '1.6em', className: "brand logo" }}>
            <GiChiliPepper />
          </IconContext.Provider>
          <span className='brand'>MemeIt</span>
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle variant='dark' id="tags-dropdown" title='tags'>
            <IconContext.Provider value={{ size: '1.5em', className: "icon tag" }}>
              <FaTags />
            </IconContext.Provider>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {BuildTagsDropItems()}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} title='sign up'>
          <IconContext.Provider value={{ size: '1.1em', className: "icon" }}>
            <BsPen />
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand variant='dark' as={Button } onClick={() => setModalShow(true)} title='log in'>
          <IconContext.Provider value={{ size: '1.1em', color: 'lightgreen', className: "icon" }}>
            <BsDoorOpenFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <LoginModal show={modalShow}
        onHide={() => setModalShow(false)}/>
  </>;
};

export const BaseUserNavBar = ({ user }) => {
  return <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid className="justify-content-start">
        <Navbar.Brand >
          <IconContext.Provider value={{ size: '1.6em', className: "brand logo" }}>
            <GiChiliPepper />
          </IconContext.Provider>
          <span className='brand'>MemeIt</span>
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle variant='dark' id="tags-dropdown" title='tags'>
            <IconContext.Provider value={{ size: '1.5em', className: "icon tag" }}>
              <FaTags />
            </IconContext.Provider>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {BuildTagsDropItems()}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant='dark' id="User-dropdown">
            <IconContext.Provider value={{ size: '1.5em', className: "icon tag" }}>
              <FaPortrait />
              <span>{user.name}</span>
            </IconContext.Provider>
          </Dropdown.Toggle>
          <Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} title='log out'>
          <IconContext.Provider value={{ size: '1.1em', color: 'red', className: "icon" }}>
            <BsDoorClosedFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>;
};

export const ModeratorNavBar = () => {
  return <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid className="justify-content-start">
        <Navbar.Brand >
          <IconContext.Provider value={{ size: '1.6em', className: "brand logo" }}>
            <GiChiliPepper />
          </IconContext.Provider>
          <span className='brand'>MemeIt</span>
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle variant='dark' id="tags-dropdown" title='tags'>
            <IconContext.Provider value={{ size: '1.5em', className: "icon tag" }}>
              <FaTags />
            </IconContext.Provider>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {BuildTagsDropItems()}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} title='log out'>
          <IconContext.Provider value={{ size: '1.1em', color: 'red', className: "icon" }}>
            <BsDoorClosedFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>;
};

