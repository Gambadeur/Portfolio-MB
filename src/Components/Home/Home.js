import React, { Component } from 'react';
import Arrow from './../DesignIcon/Arrow';
import './home.css';
import crochetblanc from './../../images/png/crochetblanc.png';
import crochetbleu from './../../images/png/crochetbleu.png';
import dollarbleu from './../../images/png/dollarbleu.png';
import egalblanc from './../../images/png/egalblanc.png';
import gdcrochetblanc from './../../images/png/gdcrochetblanc.png';
import pointvirgulebleu from './../../images/png/pointvirgulebleu.png';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
          offsetX: "",
          offsetY: ""
      }
      this.mouseMove = this.mouseMove.bind(this)
    }

  componentDidMount(){
        document.addEventListener('mousemove', this.mouseMove);
    }
  mouseMove(e){

      let followX = (window.innerWidth / 2 - e.clientX);
      let followY = (window.innerHeight / 2 - e.clientY);
      let x = 0;
      let y = 0;

      x = x + (-followX - x) * (1/30);
      y = y + (-followY - y) * (1/30);
      

  this.setState({
      offsetX: x,
      offsetY: y
  }) 
}


  render() {

  let mouseAction = {
            transform: 
                `perspective(600px)
                rotateY(${this.state.offsetY}deg)
                rotateX(${this.state.offsetX}deg)`
  }

    return (
      <div className="homeContainer">
        <div className="designItems">
          <img src={crochetblanc} alt=""/>
          <img src={crochetbleu} alt=""/>
          <img src={dollarbleu} alt=""/>
          <img src={egalblanc} alt=""/>
          <img src={gdcrochetblanc} alt=""/>
          <img src={pointvirgulebleu} alt=""/>
        </div>
        
          
          <div className="leftHome"></div>
          <div className="rightHome"></div>
          <div className="logoContainer">
            <div className="logoCenter" style={mouseAction} >
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