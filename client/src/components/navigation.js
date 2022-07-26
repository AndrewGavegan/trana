import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="top-bar">
      <ul className="nav-list">
        <button classname="btn btn-primary">
          New Workout +
        </button>
        <li className="nav-list-item"><a href="#Dashboard" onClick={() => handlePageChange('Dashobard')} className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}>
          Dashboard
        </a></li>
      </ul>
    </div>
  );
}

export default Navigation;