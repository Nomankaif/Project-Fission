import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import { About } from './pages/About';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;