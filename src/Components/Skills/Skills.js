import React, { Component } from 'react';
import Skill from './Skill';
import './skills.css';
import keyframesImg from './../../images/png/keyframes.png';
import svgImg from './../../images/png/svg.png';
import uiImg from './../../images/png/ui.png';
import uxImg from './../../images/png/ux.png';
import crochetblancblancImg from './../../images/png/crochetblancblanc.png';
import reactImg from './../../images/png/react.png';
import vanillajsImg from './../../images/png/vanillajs.png';
import jqueryImg from './../../images/png/jquery.png';
import dieseImg from './../../images/png/diese.png';
import logosweetImg from './../../images/png/sweetLogo.jpg';
import kanbanImg from './../../images/png/kanban2.png';
import trelloImg from './../../images/png/trellobc.png';
import scrumImg from './../../images/png/scrum.png';
import exigeantImg from './../../images/png/exigence.png';
import organiseImg from './../../images/png/organise.png';
import precisImg from './../../images/png/precis.png';
import arobaseImg from './../../images/png/arobase.png';
import inventifImg from './../../images/png/inventif.png';
import intuitifImg from './../../images/png/intuitif.png';
import autonomeImg from './../../images/png/autonome.png';
import flexibleImg from './../../images/png/flexible.png';
import deuxpointsImg from './../../images/png/2pts.png';
import pourcentageImg from './../../images/png/pourcentage.png';
import reactLogo from './../../images/react.svg';
import nodejsImg from './../../images/png/nodejs.png';
import propsImg from './../../images/png/props.png';
import stateImg from './../../images/png/state.png';


class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }




  render() {
    return (
      <div className="skillsFlexContainer">
        <div className="skillsContainer">
          <Skill idCard="1" titleCard="Animation" colorCard="rgb(90, 198, 213)" widthCard="100" heightCard="175">
            <div className="skillDetailContainer skillDetail1">
              <img src={keyframesImg} alt=""/>
              <img src={svgImg} alt=""/>
              <img src={uiImg} alt=""/> 
              <img src={uxImg} alt=""/>
              <img src={arobaseImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="2" titleCard="Créativité!" colorCard="rgb(245, 248, 130)" widthCard="230" heightCard="70">
             <div className="skillDetailContainer skillDetail2">
              <img src={crochetblancblancImg} alt=""/>
              <img src={dieseImg} alt=""/>
              <img src={inventifImg} alt=""/>
              <img src={intuitifImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="3" titleCard="JavaScript" colorCard="rgb(90, 198, 213)" widthCard="100" heightCard="130">
            <div className="skillDetailContainer skillDetail3">
              <img src={reactImg} alt=""/>
              <img src={vanillajsImg} alt=""/>
              <img src={jqueryImg} alt=""/>
              <img src={deuxpointsImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="4" titleCard="Adaptable" colorCard="#EA2E49" widthCard="100" heightCard="120">
            <div className="skillDetailContainer skillDetail4">
              <img src={autonomeImg} alt=""/>
              <img src={flexibleImg} alt=""/>
              <img src={deuxpointsImg} alt=""/>
              <img src={pourcentageImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="5" titleCard="Musique" colorCard="#191919" widthCard="110" heightCard="220">
            <div className="skillDetailContainer skillDetail5">
              <a href="http://www.sweetwax-recordings.com/"><img src={logosweetImg} alt=""/></a>
            </div>
          </Skill>
          <Skill idCard="6" titleCard="Rigoureux" colorCard="#EA2E49" widthCard="110" heightCard="220">
            <div className="skillDetailContainer skillDetail6">
              <img src={precisImg} alt=""/>
              <img src={exigeantImg} alt=""/>
              <img src={organiseImg} alt=""/>
              <img src={dieseImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="7" titleCard="Curieux" colorCard="rgb(245, 248, 130)" widthCard="100" heightCard="100">
          </Skill>
          <Skill idCard="8" titleCard="React.Js" colorCard="rgb(90, 198, 213)" widthCard="120" heightCard="120">
            <div className="skillDetailContainer skillDetail8">
              <img src={propsImg} alt=""/>
              <img src={reactLogo} alt=""/>
              <img src={nodejsImg} alt=""/>
              <img src={stateImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="9" titleCard="Agile" colorCard="rgb(90, 198, 213)" widthCard="120" heightCard="100">
            <div className="skillDetailContainer skillDetail9">
              <img src={kanbanImg} alt=""/>
              <img src={trelloImg} alt=""/>
              <img src={scrumImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="10" titleCard="Culture Web" colorCard="#EA2E49" widthCard="100" heightCard="100">
          </Skill>
          <Skill idCard="11" titleCard="CSS" colorCard="rgb(90, 198, 213)" widthCard="190" heightCard="100">
          </Skill>
          <Skill idCard="12" titleCard="Communicant" colorCard="rgb(245, 248, 130)" widthCard="130" heightCard="100">
          </Skill>
          <Skill idCard="13" titleCard="SEO" colorCard="rgb(90, 198, 213)" widthCard="110" heightCard="86">
          </Skill>
          <Skill idCard="14" titleCard="HTML" colorCard="rgb(90, 198, 213)"  widthCard="180" heightCard="50">
          </Skill>
          <Skill idCard="15" titleCard="Force de proposition" colorCard="rgb(245, 248, 130)"  widthCard="190" heightCard="80">
          </Skill>
        </div>
      </div>
    );
  }
}

export default Skills;