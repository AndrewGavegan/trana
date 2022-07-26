import React from 'react';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
    <div className="top-bar">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Button variant='outline-success'>New Workout +</Button></li>
        <li className="nav-list-item"><Button href="#Dashboard">Dashboard</Button></li>
      </ul>
    </div>
  );
}

export default Navigation;