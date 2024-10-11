import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; //v5
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; //v6
import Splash from './pages/Splash';
import Home from './pages/Home';
import Details from './pages/Details';

// function App() {
//   return (
   
//   );
// }

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Splash />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

  );
}

export default App;
