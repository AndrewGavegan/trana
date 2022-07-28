import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css'

function Popup(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setvalue] = useState('')
  const handleOnchange = val => { setvalue(val) }
  const options = [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
    { label: 'Option 4', value: 'option_4' },
  ]
  return (
    <li className="nav-list-item">
      <Button variant='outline-success' onClick={handleShow} className={show === true ? 'nav-link active' : 'nav-link'}>New Workout +</Button>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>New Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Title" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" placeholder="How'd it go?" rows={3} />
            </Form.Group>
            <div className="app">
              <div className="preview-values">
                {value}
              </div>
              <MultiSelect
                type="text"
                placeholder="What did you do?"
                onChange={handleOnchange}
                options={options}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Save Workout
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}

export default Popup;