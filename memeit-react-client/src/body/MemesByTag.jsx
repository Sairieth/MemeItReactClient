import React from 'react'
import { Image, Card, Row, Col, Spinner, Container } from 'react-bootstrap'
import useGet from '../fetchServices/useGet';

const MemesByTag = ({ tag }) => {
  const { getData: memes, isGetPending: isMemesPending, getError: MemeError } = useGet(`/api/memes/${tag}`);
console.log(tag)
  return (
    memes !== null && memes.lenth > 0 && !isMemesPending && MemeError === null
      ? (memes.map((meme, index) =>
        <Card key={index}>
          <Card.Title>{meme.title}</Card.Title>
          <Card.Body>
            <Image fluid src={meme.url}></Image>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row>
              <Col>{meme.username}</Col>
              <Col>{meme.tag}</Col>
            </Row>
          </Card.Footer>
        </Card>))
      : <Container fluid className='bodySpinner'>
        <Row className="justify-content-md-center"><Spinner animation="grow" variant="info" />
        </Row>
      </Container>
  )
}

export default MemesByTag