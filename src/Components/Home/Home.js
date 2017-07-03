import React, { Component } from 'react';
import Arrow from './../DesignIcon/Arrow';
import logo1 from './../../images/logo1.png';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
          <div className="leftHome"></div>
          <div className="rightHome"></div>
          <div className="logoContainer">
            <div className="logoCenter">
              <img src={logo1} alt=""/>
            </div>
            <div className="titleHome">
              <h3>
              Mathieu Blardone <br />
              Artisan codeur {"<"} Developpeur FrontEnd Js {">"}
              </h3>
            </div>
            <div className="arrowNav">
              <Arrow />
            </div>
          </div>
          
      </div>
    );
  }
}

export default Home;