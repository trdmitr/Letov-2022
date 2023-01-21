import React, { Component, Fragment } from 'react';
import CaverPage from "./Componets/CaverPage/CaverPage";
// import { Routes, Route } from 'react-router-dom';
import HomePage from './Componets/HomePage/HomePage';
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Notfound () {
  
    return (
        <div>
          <h2>404 ресурс не найден!</h2>
        </div>
    );
}
class App extends Component {
  render() {
    return (
      <Fragment>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage />} />
         <Route path="/cavers" element={<CaverPage/>} />
         <Route path="*" element={<Notfound />} />
       </Routes>
       </Router>   
   </Fragment>
    
  
 );
  }
}


export default App;