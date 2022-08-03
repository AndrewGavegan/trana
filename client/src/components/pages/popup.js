import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client'
import { CREATE_WORKOUT } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';
import { GET_YOURSELF, GET_ALL_WORKOUTS } from '../../utils/queries';

function Popup(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    title: '',
    description: ''
  });
  const [createWorkout, { error }] = useMutation(CREATE_WORKOUT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = createWorkout({
        variables: { ...formState },
        refetchQueries: [
          {
            query: GET_YOURSELF
          },
          { query: GET_ALL_WORKOUTS }
        ]
      })
      console.log("Successfully added a workout", data);
      setShow(false);
      setFormState({
        title: '',
        description: ''
      })
      navigate("/dashboard");
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }


  return (
    <li className="nav-list-item">
      <Button onClick={handleShow} className={show === true ? 'nav-link active-blue ' : 'nav-link blue-button'}>New Workout +</Button>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle titleSignup">New Workout +</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                as="input"
                placeholder="Name this workout..."
                value={formState.title}
                name="title"
                onChange={handleChange}
                autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                name="description"
                value={formState.description}
                placeholder="How'd this workout go...?"
                onChange={handleChange}
                rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' onClick={handleFormSubmit} className="red-button" >
            Save Workout
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}

export default Popup;