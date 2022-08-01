import React from 'react';
import { Navbar, Button, NavDropdown, Form, FormControl, Nav } from 'react-bootstrap';
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Popup from './pages/popup';
import Content from './main';
import Dashboard from './dashboard'
function Navigation() {


  return (
    <div className="top-bar">
      <ul className="nav-list">
        <Popup />
        <Router>
          <div>

            <Navbar bg="dark" variant={"dark"} expand="lg">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/main">Home</Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Navbar>
          </div>
          <div>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/main">
                <Content />
              </Route>
            </Switch>
          </div>
        </Router>
      </ul>
    </div>
  );
}


export default Navigation;