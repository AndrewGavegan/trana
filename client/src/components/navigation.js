import React from 'react';
import { Button } from 'react-bootstrap';
import Popup from './pages/popup';

function Navigation({ currentPage, handlePageChange }) {


  return (
    <div className="top-bar">
      <ul className="nav-list">
        <Popup />
        <li className="nav-list-item">
          <Button variant="outline-warning" href="#" onClick={() => handlePageChange('main')} className={currentPage === 'main' ? 'nav-link active' : 'nav-link'} >Activity Feed</Button>
        </li>
        <li className="nav-list-item">
          <Button variant="outline-warning" href="#dashboard" onClick={() => handlePageChange('dashboard')} className={currentPage === 'dashboard' ? 'nav-link active' : 'nav-link'} >Dashboard</Button>
        </li>
        <li className="nav-list-item">
          <Button variant="outline-warning" href="#signup" onClick={() => handlePageChange('signup')} className={currentPage === 'singup' ? 'nav-link active' : 'nav-link'} >Signup</Button>
        </li>
        <li className="nav-list-item">
          <Button variant="outline-warning" href="#login" onClick={() => handlePageChange('login')} className={currentPage === 'login' ? 'nav-link active' : 'nav-link'} >Login</Button>
        </li>
      </ul>
    </div>
  );
}


export default Navigation;