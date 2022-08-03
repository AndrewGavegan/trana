import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client'
import { CREATE_WORKOUT } from '../../utils/mutations';



function Popup(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      })

      window.location.reload();
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
    <div>
      {data ? (
        <p>You've added a workout</p>
      ) : (
        <li className="nav-list-item">
          <Button onClick={handleShow} className={show === true ? 'nav-link active-blue ' : 'nav-link blue-button'}>New Workout +</Button>
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title className="modalTitle">New Workout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    as="input"
                    placeholder="Workout Title"
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
                    placeholder="How'd it go?"
                    onChange={handleChange}
                    rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type='submit' className="red-button" >
                Save Workout
              </Button>
            </Modal.Footer>
          </Modal>
        </li>
      )}
    </div>
  );
}

export default Popup;