import React from 'react';
import Button from 'react-bootstrap/Button';
import Popup from './pages/popup';



function Navigation({ currentPage, handlePageChange }) {


  return (
    <div className="top-bar">
      <ul className="nav-list">
        <Popup />
        <li className="nav-list-item">
          <Button href="#Dashboard" onClick={() => handlePageChange('Dashboard')} className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'} >Dashboard</Button>
        </li>
        <li className="nav-list-item">
          <Button href="#Main" onClick={() => handlePageChange('Main')} className={currentPage === 'Main' ? 'nav-link active' : 'nav-link'} >Activity Feed</Button>
        </li>
      </ul>
    </div>
  );
}


export default Navigation;