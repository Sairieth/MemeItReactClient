import '../../App.js';
import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { GiChiliPepper } from "react-icons/gi";
import { FaTags, FaPortrait } from "react-icons/fa"
import { Container, Navbar, Dropdown, Button } from 'react-bootstrap';
import { BsPen, BsDoorOpenFill, BsDoorClosedFill } from 'react-icons/bs'
import LoginModal from '../authentication/LoginModal.jsx';
import SignUpModal from '../authentication/SignUpModal.jsx';
import TagsDropItems from './TagsDropItems.jsx';
import NewMemeModal from '../NewMemeModal.jsx';

export const DefaultNavBar = ({ tagSetter }) => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signUpModalShow, setSignUpModalShow] = useState(false);

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
            <TagsDropItems tagSetter={(tag) => tagSetter(tag)} />
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} onClick={() => setSignUpModalShow(true)} title='sign up'>
          <IconContext.Provider value={{ size: '1.1em', className: "icon" }}>
            <BsPen />
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand variant='dark' as={Button} onClick={() => setLoginModalShow(true)} title='log in'>
          <IconContext.Provider value={{ size: '1.1em', color: 'lightgreen', className: "icon" }}>
            <BsDoorOpenFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <LoginModal show={loginModalShow}
      onHide={() => setLoginModalShow(false)} />
    <SignUpModal show={signUpModalShow}
      onHide={() => setSignUpModalShow(false)} />
  </>;
};

export const BaseUserNavBar = ({ user, onLogout, tagSetter }) => {
  const [newMemeModalShow, setNewMemeModalShow] = useState(false);

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
            <TagsDropItems tagSetter={(tag) => tagSetter(tag)} />
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
            <Dropdown.Item as={Button} onClick={() => setNewMemeModalShow(true)}>
              New Meme
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} onClick={() => onLogout()} title='log out'>
          <IconContext.Provider value={{ size: '1.1em', color: 'red', className: "icon" }}>
            <BsDoorClosedFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <NewMemeModal show={newMemeModalShow}
      onHide={() => setNewMemeModalShow(false)} />
  </>;
};

export const ModeratorNavBar = ({ user, onLogout, tagSetter }) => {
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
            <TagsDropItems tagSetter={(tag) => tagSetter(tag)} />
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} onClick={() => onLogout()} title='log out'>
          <IconContext.Provider value={{ size: '1.1em', color: 'red', className: "icon" }}>
            <BsDoorClosedFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>;
};

