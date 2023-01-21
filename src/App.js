import React, { Component } from 'react';
import CaverPage from "./Componets/CaverPage/CaverPage";
import { Routes, Route } from 'react-router-dom';
import HomePage from './Componets/HomePage/HomePage';
class App extends Component {
  render() {
    return (
        <Routes>
        <Route path="/" element={<HomePage />}> 
        <Route path="cavers" element={<CaverPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;