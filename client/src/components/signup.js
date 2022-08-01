import Form from "react-bootstrap/Form";

export default function Signup() {
  return (
    <Form className="signupForm">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Create a username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Create a password" />
      </Form.Group>
    </Form>
  )
}