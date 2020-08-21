import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Nav from './components/NavigationBar/Nav';

function App() {
  return (
    <div>
      <Nav/>
     <Home/>
    </div>
    
  );
}

export default App;
