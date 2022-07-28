import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

function Exercises() {

  return (
    <Form.Select placeholder="What did you do?">
      <option value="Admin">Admin</option>
      <option value="Mod">Mod</option>
      <option value="User">User</option>
    </Form.Select>

  )
}

export default Exercises;