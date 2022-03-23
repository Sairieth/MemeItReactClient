import React from 'react'
import useGet from '../../fetchServices/useGet'
import { Dropdown, Spinner, Row, Button } from 'react-bootstrap';


const TagsDropItems = ({ tagSetter }) => {
  const { getData: tags, isGetPending: isPending, getError: error } = useGet('/api/tag/get-all');
// console.log(tagSetter);
  return tags !== null && !isPending && error === null
    ? (tags.map((tag, index) => (<Dropdown.Item as={Button} onClick={() => tagSetter(tag)} key={index}>{tag}</Dropdown.Item>)))
    : <Row className="justify-content-md-center"><Spinner animation="grow" variant="info" /></Row>
}

export default TagsDropItems