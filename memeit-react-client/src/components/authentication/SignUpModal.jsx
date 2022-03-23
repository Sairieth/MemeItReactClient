import React, { useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import usePost from '../../fetchServices/usePost';
import { userContext } from '../../context/UserProvider';
import { useContext } from 'react';
import jwt_decode from 'jwt-decode';


const SignUpModal = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: signUpData, request } = usePost('/api/auth/register','application/json');
    const { setUser } = useContext(userContext)
    const onHide = props.onHide;

    useEffect(() => {
        if (signUpData !== null) {
            const userInfo = jwt_decode(signUpData.token);
            setUser(userInfo);
        }
    }, [signUpData, setUser, onHide])

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
                    Sign Up
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='signUp-form' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="signUpUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" {...register('username', { required: true })} />
                        {errors.username && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signUpPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signUpEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" {...register('Email', { required: true })} />
                        {errors.Email && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signUpDateOfBirth">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" placeholder="DateOfBirth" {...register('DateOfBirth', { required: true })} />
                        {errors.DateOfBirth && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signUpTimeOffset">
                        <Form.Control type="hidden" value={Math.abs(new Date().getTimezoneOffset().toFixed())} {...register('offset')} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button form='signUp-form' variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignUpModal