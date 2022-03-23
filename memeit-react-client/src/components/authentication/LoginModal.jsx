import React, { useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import usePost from '../../fetchServices/usePost';
import { userContext } from '../../context/UserProvider';
import { useContext } from 'react';
import jwt_decode from 'jwt-decode';


const LoginModal = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: loginData, request } = usePost('/api/auth/login','application/json');
    const { setUser } = useContext(userContext)
    const onHide = props.onHide;

    useEffect(() => {
        if (loginData !== null) {
            const userInfo = jwt_decode(loginData.token);
            setUser(userInfo);
        }
    }, [loginData, setUser, onHide])

    const onSubmit = (input) => {
        request(input);
        onHide();
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
                <Form id='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="loginUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" {...register('username', { required: true })} />
                        {errors.username && <span>This field is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginTimeOffset">
                        <Form.Control type="hidden" value={Math.abs(new Date().getTimezoneOffset().toFixed())} {...register('offset')} />
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