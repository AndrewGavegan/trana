import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <Form className="loginForm">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>
    </Form>
  )
}