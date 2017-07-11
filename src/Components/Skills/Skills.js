import React, { Component } from 'react';
import Skill from './Skill';
import './skills.css';

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
        <Skill idCard="1" titleCard="Animation">
          <div>hello</div>
        </Skill>
        <Skill idCard="2" titleCard="Créativité!">
          <div>hello</div>
        </Skill>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard3">
              <div className="skillCardInfo skillInfo3">
                  <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard4">
              <div className="skillCardInfo skillInfo4">
                <h3>Adaptabilité</h3>
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard5">
              <div className="skillCardInfo skillInfo5">
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard6">
              <div className="skillCardInfo skillInfo6">
                 <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quam quasi molestiae neque illum quo volup.</p>
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard7">
              <div className="skillCardInfo skillInfo7">
                
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard8">
              <div className="skillCardInfo skillInfo8">
               <h3>React.Js</h3>
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard9">
              <div className="skillCardInfo skillInfo9">
                 <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quam quasi molestiae neque illum quo volup.</p>
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute">
              <div className="skillCardInfo">
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard11"> 
              <div className="skillCardInfo skillInfo11">
                 <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quam quasi molestiae neque illum quo volup.</p>
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute skillCard12">
              <div className="skillCardInfo skillInfo12">
                 <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quam quasi molestiae neque illum quo volup.</p>
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute">
              <div className="skillCardInfo">
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute">
              <div className="skillCardInfo">
              </div>
            </div>
          </div>
          <div className="skillCardRelative">
            <div className="skillCardAbsolute">
              <div className="skillCardInfo">
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Skills;