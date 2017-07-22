import React, { Component } from 'react';
import Arrow from './../DesignIcon/Arrow';
import './home.css';
import crochetbleu from './../../images/png/crochetb.png';
import dollarbleu from './../../images/png/dollarb.png';
import ptdexbleu from './../../images/png/ptdexbleu.png';
import crochetblancblanc from './../../images/png/crochetblancblanc.png';
import pourcentage from './../../images/png/pourcentage.png';
import diesebleu from './../../images/png/diesebleu.png';
import arobase from './../../images/png/arobase.png';
import deuxpts from './../../images/png/2pts.png';
import egalblanc from './../../images/png/egalblanc.png';
import egalbleu from './../../images/png/egalbleu.png';
import pointvirguleblanc from './../../images/png/ptvirguleblanc.png';
import arobasebleu from './../../images/png/arobasebleu.png';
import bracketRight from './../../images/png/bracketLeftWhite.png';
import bracketLeft from './../../images/png/bracketRightWhite.png';

class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
          offsetX: "",
          offsetY: ""
      }
      this.mouseMove = this.mouseMove.bind(this)
    }

  componentWillMount(){
        document.addEventListener('mousemove', this.mouseMove);
    }

  mouseMove(e){

      let followX = (window.innerWidth / 2 - e.clientX);
      let followY = (window.innerHeight / 2 - e.clientY);
      let x = 0;
      let y = 0;

      x = x + (-followX - x) * (1/30);
      y = y + (-followY - y) * (1/30);

      // window.scrollTo(400, 500)

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
          <img src={crochetblancblanc} alt=""/>
          <img src={crochetbleu} alt=""/>
          <img src={dollarbleu} alt=""/>
          <img src={arobase} alt=""/>
          <img src={pourcentage} alt=""/>
          <img src={diesebleu} alt=""/>
          <img src={deuxpts} alt=""/>
          <img src={egalblanc} alt=""/>
          <img src={egalbleu} alt=""/>
          <img src={arobasebleu} alt=""/>
          <img src={pointvirguleblanc} alt=""/>
          <img src={crochetbleu} alt=""/>
          <img src={ptdexbleu} alt=""/>
        </div>
        <div className="leftHome"></div>
        <div className="rightHome"></div>
        <div className="logoContainer">
          <div className="logoCenter" style={mouseAction} >
            <div className="containerBrackets">
              <img className="bracketlefthome" src={bracketLeft} alt=""/>
              <img className="bracketrighthome" src={bracketRight} alt=""/>
            </div>
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