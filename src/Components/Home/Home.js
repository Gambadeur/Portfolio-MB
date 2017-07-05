import React, { Component } from 'react';
import Arrow from './../DesignIcon/Arrow';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
          <div className="leftHome"></div>
          <div className="rightHome"></div>
          <div className="logoContainer">
            <div className="logoCenter">
              <div className="bracketsHome"> {"{"} {" }"}</div>
            </div>
            <div className="titleHome">
            <p>MATHIEU BLARDONE<br />
            <span>artisan codeur</span>
            </p>
          </div>
          </div>
 
          <div className="arrowNav">
          <Arrow />
          </div>    
      </div>
    );
  }
}

export default Home;