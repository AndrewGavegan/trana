import React from 'react';
import './app.css';
import Navigation from './components/navigation';
import Content from './components/main';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="Trana">
      <Navigation />
      <div className="notNav">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;