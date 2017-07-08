import React, { Component } from 'react';
import './arrow.css';
// import { CSSTransitionGroup } from 'react-transition-group' 

class Arrow extends Component {

    

  render() {
    return (

      <div className="arrowContainer">
        <span className="textArrow">scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 17 10" fill="white"><path  d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"></path></svg>
     
      </div>
    );
  }
}

export default Arrow;