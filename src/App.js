import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Router from './Reout/Route';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
