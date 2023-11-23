// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/header';
import Header from './pages/index';
// import Register from './pages/register';
import Blog from './pages/view_blog';
import ServicesList from './pages/view_services';
import CRoom from './pages/c_room';
import Contact from './pages/contact';
function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/index" element={<Index/>} />		
          <Route path="/" element={<Header/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/home" element={<Header />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/rooms" element={<CRoom />} />
          <Route path="/contact" element={<Contact />} />
        
          {/* Add other routes if needed */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
