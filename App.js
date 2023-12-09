import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from './src/common/Header';
import LoginPage from './src/pages/LoginPage';
import Profile from './src/pages/Profile';
import Footer from './src/common/Footer';
import Dashboard from './src/pages/Dashboard';
import Header from './src/common/Header';

function App() {
  return (
    <div>
      {/* <h1>This is App</h1> */}
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/error" element={<div>Error Page</div>} />
        <Route path="/dashboard" element={<><Header /><Dashboard/><Footer/></>}/>
        <Route path="/profile" element={<><Header /><Profile/><Footer/></>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
