import React from 'react'
import { Modal, Button, Form, Spinner, Row, FloatingLabel, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import usePost from '../fetchServices/usePost';
import useGet from '../fetchServices/useGet';
import { userContext } from '../context/UserProvider';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';

const NewMemeModal = (props) => {
    const { getData: tags, isGetPending: isPending, getError: error } = useGet('/api/tag/get-all');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cookies] = useCookies(['JWT']);
    const cookie = cookies.JWT;
    const { request } = usePost('/api/memes/post','', cookie);
    const { user } = useContext(userContext)
    const onHide = props.onHide;

    const onSubmit = (input) => {
        // console.log(input);
        const data = createFormData(input);
        request(data);
        onHide();
    }

    const SelectTagOptions = () => {
        return (
            tags !== null && !isPending && error === null
                ? (tags.map((tag, index) => (<option key={index} value={tag}>{tag}</option>)))
                : <Row className="justify-content-md-center"><Spinner animation="grow" variant="info" /></Row>
        )
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Post Meme
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='New-Meme-form' onSubmit={handleSubmit(onSubmit)}>
                    <Container>
                        <Row>
                            <FloatingLabel controlId="memeTitle" label="Title goes here!">
                                <Form.Control type="text" placeholder="Title" {...register('title', { required: true })} />
                                {errors.title && <span>This field is required</span>}
                            </FloatingLabel>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label></Form.Label>
                                <Form.Control type="file" {...register('file', { required: true })} />
                                {errors.password && <span>This field is required</span>}
                            </Form.Group>
                        </Row>
                        <Row>
                            <FloatingLabel controlId="tagsSelect" label="Tags">
                                <Form.Select defaultValue={''} aria-label="selectTag" {...register('tag', { required: true, pattern: /.*/ })}>
                                    <option value='' hidden disabled></option>
                                    <SelectTagOptions />
                                </Form.Select>
                                {errors.tag && <span>This field is required</span>}
                            </FloatingLabel>
                        </Row>
                        <Form.Group className="mb-3" controlId="userID">
                            <Form.Control type="hidden" value={user.primarysid} {...register('id')} />
                        </Form.Group>
                    </Container>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button form='New-Meme-form' variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewMemeModal

function createFormData(input) {
    let data = new FormData();
    data.append('file', input.file[0]);
    data.append('title', input.title);
    data.append('tag', input.tag);
    data.append('userId', input.id);
    // console.log(data.getAll('file'))
    // console.log(data.getAll('title'))
    // console.log(data.getAll('userId'))
    // console.log(data.getAll('tag'))
    return data;
}
