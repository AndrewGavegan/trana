import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import auth from '../utils/auth';


export default function Signup() {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(SIGNUP);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signupPage">
      {data ? (
        <h1 className="titleHeader">Your fitness journey begins!</h1>
      ) : (

        <Form onSubmit={handleFormSubmit} className="signupForm">
          <Form.Group className="mb-3" controlId="Signup.ControlInput1">
            <Form.Label className="titleSignup">Thanks for deciding on TR&Auml;NA:</Form.Label>
            <br />
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Create a username"
              name="username"
              value={formState.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Signup.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formState.email}
              onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Signup.ControlInput3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              name="password"
              value={formState.password}
              onChange={handleChange} />
          </Form.Group>
          <Button className="red-button" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  )
}