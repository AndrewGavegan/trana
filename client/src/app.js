import React, { useState } from 'react';
import './app.css';
import Navigation from './components/navigation';
import Main from './components/main';
import Dashboard from './components/dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Dashboard') {
      return <Dashboard />
    } else {
      return <Main />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="Trana">
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;