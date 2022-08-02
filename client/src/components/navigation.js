import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Popup from './pages/popup';
import auth from './utils/auth'


export default function Navigation() {
  const [loggedIn, setLoggedIn] = useState(auth.loggedIn())

  return (
    <div className="top-bar">
      <ul className="nav-list">
        {loggedIn ? (<>
          <Popup setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </>) : (null)}
        <CustomLink to="/">Trana</CustomLink>
        <CustomLink to="/content">Activity Feed</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink className="loginBtn" to="/login">Login</CustomLink>
        <CustomLink className="loginBtn" to="/signup">Signup</CustomLink>
        {loggedIn ? (<>
          <Button className="red-button" onClick={auth.logout}>Logout</Button>
        </>) : (null)}
      </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className="nav-list-item" >
      <Link to={to} {...props}>
        <Button className={isActive ? 'nav-link active-red' : "nav-link red-button"}>
          {children}
        </Button>
      </Link>

    </li>
  )
}