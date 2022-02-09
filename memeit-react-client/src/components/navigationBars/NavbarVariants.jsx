import React, { useEffect, useState } from 'react';
import '../../App.js';
import { Container, Navbar, Dropdown, Button } from 'react-bootstrap';
import { FaGrinSquintTears, FaTags, FaPortrait } from "react-icons/fa"
import { IconContext } from 'react-icons/lib';
import { BsPenFill, BsDoorOpenFill, BsDoorClosedFill } from 'react-icons/bs'
import useGet from '../../fetchServices/useGet'

function buildTagsDropItems(tags, isPending, error) {
  return tags !== null && !isPending && error === null ? (tags.map((tag, index) => (
    <Dropdown.Item key={index}>{tag}</Dropdown.Item>
  ))) : <>{error}</>
}

export const DefaultNavBar = () => {
  const { data: tags, isPending, error } = useGet('https://localhost:7247/api/Tag/get-all');

  return <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid className="justify-content-start">
        <Navbar.Brand >
          <IconContext.Provider value={{ size: '1.6em', className: "brand logo" }}>
            <FaGrinSquintTears />
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
            {buildTagsDropItems(tags, isPending, error)}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} title='sign up'>
          <IconContext.Provider value={{ size: '1.1em', className: "icon" }}>
            <BsPenFill />
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand variant='dark' as={Button} title='log in'>
          <IconContext.Provider value={{ size: '1.1em', className: "icon" }}>
            <BsDoorOpenFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>;
};

export const BaseUserNavBar = ({user}) => {
  const { data: tags, isPending, error } = useGet('https://localhost:7247/api/Tag/get-all');

  return <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid className="justify-content-start">
        <Navbar.Brand >
          <IconContext.Provider value={{ size: '1.6em', className: "brand logo" }}>
            <FaGrinSquintTears />
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
            {buildTagsDropItems(tags, isPending, error)}
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
          <IconContext.Provider value={{ size: '1.1em', className: "icon" }}>
            <BsDoorClosedFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>;
};

export const ModeratorNavBar = () => {
  const { data: tags, isPending, error } = useGet('https://localhost:7247/api/Tag/get-all');

  return <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid className="justify-content-start">
        <Navbar.Brand >
          <IconContext.Provider value={{ size: '1.6em', className: "brand logo" }}>
            <FaGrinSquintTears />
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
            {buildTagsDropItems(tags, isPending, error)}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container fluid className="justify-content-end">
        <Navbar.Brand variant='dark' as={Button} title='log out'>
          <IconContext.Provider value={{ size: '1.1em', className: "icon" }}>
            <BsDoorClosedFill />
          </IconContext.Provider>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>;
};

