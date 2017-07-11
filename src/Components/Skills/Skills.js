import React, { Component } from 'react';
import Skill from './Skill';
import './skills.css';
import keyframesImg from './../../images/png/keyframes.png';
import svgImg from './../../images/png/svg.png';
import uiImg from './../../images/png/ui.png';
import uxImg from './../../images/png/ux.png';

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
            </div>
          </Skill>
          <Skill idCard="2" titleCard="Créativité!" colorCard="rgb(245, 248, 130)" widthCard="230" heightCard="70">
            
          </Skill>
          <Skill idCard="3" titleCard="JavaScript" colorCard="rgb(90, 198, 213)">
            <div>hello</div>
          </Skill>
          <Skill idCard="4" titleCard="Adaptabilité" colorCard="#EA2E49">
            <div>hello</div>
          </Skill>
          <Skill idCard="5" titleCard="">
            <div></div>
          </Skill>
          <Skill idCard="6" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="7" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="8" titleCard="React.Js" colorCard="rgb(90, 198, 213)">
            <div>hello</div>
          </Skill>
          <Skill idCard="9" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="10" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="11" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="12" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="13" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="14" titleCard="">
            <div>hello</div>
          </Skill>
          <Skill idCard="15" titleCard="">
            <div>hello</div>
          </Skill>
        </div>
      </div>
    );
  }
}

export default Skills;