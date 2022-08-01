import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Popup from './pages/popup';
export default function Navigation() {


  return (
    <div className="top-bar">
      <ul className="nav-list">
        <Popup />
        <CustomLink to="/">Activity Feed</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Signup</CustomLink>
      </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className="nav-list-item" >
      <Button variant="outline-warning" className={isActive ? 'nav-link active' : "nav-link"}>
        <Link to="to" {...props}>{children}</Link>
      </Button>
    </li>
  )
}


