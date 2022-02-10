import React from 'react'
import {Navbar,Container} from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed='bottom'>
        <Container fluid className="justify-content-start">
        <Navbar.Text>Pet project by: Henrik Märcz</Navbar.Text>
        </Container>
    </Navbar>
    
  )
}

export default Footer