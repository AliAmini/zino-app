import React from 'react';
import logo from './logo.svg';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from 'components/Nav';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import ErrorPage from 'pages/ErrorPage';

function App() {
  return (
    <Router>
      <Nav />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
