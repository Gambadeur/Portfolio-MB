import React, { Component } from 'react';
import Skill from './Skill';
import './skills.css';
import keyframesImg from './../../images/png/keyframes.png';
import svgImg from './../../images/png/svg.png';
// import uiImg from './../../images/png/ui.png';
import uxImg from './../../images/png/ux.png';
import crochetblancblancImg from './../../images/png/crochetblancblanc.png';
import reactImg from './../../images/png/react.png';
import reactrouterImg from './../../images/png/reactrouter.png';
import vanillajsImg from './../../images/png/vanillajs.png';
import jqueryImg from './../../images/png/jquery.png';
import dieseImg from './../../images/png/diese.png';
import logosweetImg from './../../images/png/sweetLogo.jpg';

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
              {/* <img src={uiImg} alt=""/> */}
              <img src={uxImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="2" titleCard="Créativité!" colorCard="rgb(245, 248, 130)" widthCard="230" heightCard="70">
             <div className="skillDetailContainer skillDetail2">
              <img src={crochetblancblancImg} alt=""/>
              <img src={dieseImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="3" titleCard="JavaScript" colorCard="rgb(90, 198, 213)" widthCard="100" heightCard="130">
            <div className="skillDetailContainer skillDetail3">
              <img src={reactImg} alt=""/>
              <img src={vanillajsImg} alt=""/>
              <img src={jqueryImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="4" titleCard="Adaptable" colorCard="#EA2E49" widthCard="100" heightCard="120">
          </Skill>
          <Skill idCard="5" titleCard="Musique" colorCard="#191919" widthCard="110" heightCard="220">
            <div className="skillDetailContainer skillDetail5">
              <a href="http://www.sweetwax-recordings.com/"><img src={logosweetImg} alt=""/></a>
            </div>
          </Skill>
          <Skill idCard="6" titleCard="Rigoureux" colorCard="#EA2E49" widthCard="110" heightCard="220">
          </Skill>
          <Skill idCard="7" titleCard="Curieux" colorCard="rgb(245, 248, 130)" widthCard="100" heightCard="100">
          </Skill>
          <Skill idCard="8" titleCard="React.Js" colorCard="rgb(90, 198, 213)" widthCard="120" heightCard="120">
            <div className="skillDetailContainer skillDetail8">
              <img src={reactImg} alt=""/>
              <img src={vanillajsImg} alt=""/>
              <img src={jqueryImg} alt=""/>
              <img src={reactrouterImg} alt=""/> 
            </div>
          </Skill>
          <Skill idCard="9" titleCard="Agile" colorCard="rgb(90, 198, 213)" widthCard="120" heightCard="100">
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