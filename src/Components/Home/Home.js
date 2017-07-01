import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
          <div className="leftHome"></div>
          <div className="rightHome"></div>
          <div className="logoContainer">
          <div className="logoCenter"></div>
          </div>
      </div>
    );
  }
}

export default Home;