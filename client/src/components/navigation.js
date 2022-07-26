import React from 'react';
import Button from 'react-bootstrap/Button';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="top-bar">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Button variant='outline-success'>New Workout +</Button></li>
        <li className="nav-list-item"><Button href="#Dashboard" onClick={() => handlePageChange('Dashboard')} className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'} >Dashboard</Button></li>
      </ul>
    </div>
  );
}

export default Navigation;