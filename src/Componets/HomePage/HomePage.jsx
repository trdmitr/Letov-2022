import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from "./HomePage.module.css"
import "../UI/Mobile.css"
class HomePage extends Component {
  render() {
    return (
      <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">

        <div>
        <Link to={"/cavers"} className="nav-link">Cavers</Link>
        This is my HomePage.
      </div>
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header">
        <div className="device-sensors"></div>
      </div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
      
      
    );
  }
}

export default HomePage;