import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import usePost from '../../fetchServices/usePost';

const LoginModal = (props) => {
    const { register, handleSubmit, formState: { respErrors }  } = useForm();

    const OnSubmit = (data) => {
        console.log(data)
        // const { data: JWT, isPending, error } = usePost('https://localhost:7247/api/auth/login', data);

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
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='login-form' onSubmit={handleSubmit(OnSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" {...register('username', { required: true })} />
                        {/* {respErrors.username     && <span>This field is required</span>} */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
                        {/* {respErrors.password && <span>This field is required</span>} */}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button form='login-form' variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal