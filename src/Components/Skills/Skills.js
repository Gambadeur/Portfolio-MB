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
import autonome2Img from './../../images/png/autonome2.png';
import soupleImg from './../../images/png/souple.png';
import flexibleImg from './../../images/png/flexible.png';
import deuxpointsImg from './../../images/png/2pts.png';
import pourcentageImg from './../../images/png/pourcentage.png';
import reactLogo from './../../images/react.svg';
import nodejsImg from './../../images/png/nodejs.png';
import propsImg from './../../images/png/props.png';
import stateImg from './../../images/png/state.png';
import attentifImg from './../../images/png/attentif.png';
import ptdexImg from './../../images/png/ptdex.png';
import flexboxImg from './../../images/png/flexbox.png';
import sassImg from './../../images/png/sass.png';
import bemImg from './../../images/png/bem.png';
import alecouteImg from './../../images/png/alecoute.png';
import joueurImg from './../../images/png/joueur.png';
import diplomateImg from './../../images/png/diplomate.png';
import dynamiqueImg from './../../images/png/dynamique.png';
import impliqueImg from './../../images/png/implique.png';
import petitcssImg from './../../images/png/petitcss.png';
import opquastImg from './../../images/png/opquast.png';
import semantichtmlImg from './../../images/png/semantichtml.png';
import optimisationImg from './../../images/png/optimisation.png';
import referencementImg from './../../images/png/referencement.png';
import feedlyImg from './../../images/png/feedly.png';
import stampleImg from './../../images/png/stample.png';
import twitterImg from './../../images/png/twitter.png';

import forcepropTitle from './../../images/png/force2.png';
import adaptableTitle from './../../images/png/adaptable.png';
import agileTitle from './../../images/png/agile.png';
import communicantTitle from './../../images/png/communicant.png';
import culturewebTitle from './../../images/png/cultureweb.png';
import curieuxTitle from './../../images/png/curieux.png';
import creatifTitle from './../../images/png/creatif.png';
import javascriptTitle from './../../images/png/javascript.png';
import musiqueTitle from './../../images/png/musique.png';
import reactjsTitle from './../../images/png/reactjs.png';
import rigoureuxTitle from './../../images/png/rigoureux.png';
import animationTitle from './../../images/png/animation.png';
import cssTitle from './../../images/png/css.png';
import htmlTitle from './../../images/png/html.png';
import seoTitle from './../../images/png/seo.png';


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
          <Skill idCard="1" titleCard={animationTitle} colorCard="rgb(90, 198, 213)" widthCard="100" heightCard="175">
            <div className="skillDetailContainer skillDetail1">
              <img src={keyframesImg} alt=""/>
              <img src={svgImg} alt=""/>
              <img src={uiImg} alt=""/> 
              <img src={uxImg} alt=""/>
              <img src={arobaseImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="2" titleCard={creatifTitle} colorCard="rgb(245, 248, 130)" widthCard="230" heightCard="70">
             <div className="skillDetailContainer skillDetail2">
              <img src={crochetblancblancImg} alt=""/>
              <img src={dieseImg} alt=""/>
              <img src={inventifImg} alt=""/>
              <img src={intuitifImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="3" titleCard={javascriptTitle} colorCard="rgb(90, 198, 213)" widthCard="100" heightCard="130">
            <div className="skillDetailContainer skillDetail3">
              <img src={reactImg} alt=""/>
              <img src={vanillajsImg} alt=""/>
              <img src={jqueryImg} alt=""/>
              <img src={deuxpointsImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="4" titleCard={adaptableTitle} colorCard="#EA2E49" widthCard="100" heightCard="120">
            <div className="skillDetailContainer skillDetail4">
              <img src={autonome2Img} alt=""/>
              <img src={flexibleImg} alt=""/>
              <img src={deuxpointsImg} alt=""/>
              <img src={pourcentageImg} alt=""/>
              <img src={soupleImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="5" titleCard={musiqueTitle} colorCard="#191919" widthCard="110" heightCard="220">
            <div className="skillDetailContainer skillDetail5">
              <a target="_blank" rel="noopener noreferrer" href="http://www.sweetwax-recordings.com/" ><img src={logosweetImg} alt=""/></a>
            </div>
          </Skill>
          <Skill idCard="6" titleCard={rigoureuxTitle} colorCard="#EA2E49" widthCard="110" heightCard="220">
            <div className="skillDetailContainer skillDetail6">
              <img src={precisImg} alt=""/>
              <img src={exigeantImg} alt=""/>
              <img src={organiseImg} alt=""/>
              <img src={dieseImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="7" titleCard={curieuxTitle} colorCard="rgb(245, 248, 130)" widthCard="100" heightCard="100">
            <div className="skillDetailContainer skillDetail7">
              <img src={attentifImg} alt=""/>
              <img src={deuxpointsImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="8" titleCard={reactjsTitle} colorCard="rgb(90, 198, 213)" widthCard="120" heightCard="120">
            <div className="skillDetailContainer skillDetail8">
              <img src={propsImg} alt=""/>
              <img src={reactLogo} alt=""/>
              <img src={nodejsImg} alt=""/>
              <img src={stateImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="9" titleCard={agileTitle} colorCard="rgb(90, 198, 213)" widthCard="120" heightCard="100">
            <div className="skillDetailContainer skillDetail9">
              <img src={kanbanImg} alt=""/>
              <img src={trelloImg} alt=""/>
              <img src={scrumImg} alt=""/>
              <img src={ptdexImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="10" titleCard={culturewebTitle} colorCard="#EA2E49" widthCard="100" heightCard="100">
            <div className="skillDetailContainer skillDetail10">
              <img src={feedlyImg} alt=""/>
              <img src={stampleImg} alt=""/>
              <img src={twitterImg} alt=""/>
              <img src={arobaseImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="11" titleCard={cssTitle} colorCard="rgb(90, 198, 213)" widthCard="190" heightCard="100">
            <div className="skillDetailContainer skillDetail11">
              <img src={flexboxImg} alt=""/>
              <img src={sassImg} alt=""/>
              <img src={keyframesImg} alt=""/>
              <img src={dieseImg} alt=""/>
              <img src={bemImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="12" titleCard={communicantTitle} colorCard="rgb(245, 248, 130)" widthCard="130" heightCard="100">
            <div className="skillDetailContainer skillDetail12">
              <img src={alecouteImg} alt=""/>
              <img src={joueurImg} alt=""/>
              <img src={diplomateImg} alt=""/>
              <img src={dieseImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="13" titleCard={seoTitle} colorCard="rgb(90, 198, 213)" widthCard="110" heightCard="86">
            <div className="skillDetailContainer skillDetail13">
              <img src={referencementImg} alt=""/>
              <img src={optimisationImg} alt=""/>
              <img src={crochetblancblancImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="14" titleCard={htmlTitle} colorCard="rgb(90, 198, 213)"  widthCard="180" heightCard="50">
            <div className="skillDetailContainer skillDetail14">
              <img src={semantichtmlImg} alt=""/>
              <img src={opquastImg} alt=""/>
              <img src={petitcssImg} alt=""/>
            </div>
          </Skill>
          <Skill idCard="15" titleCard={forcepropTitle} colorCard="rgb(245, 248, 130)"  widthCard="190" heightCard="80">
            <div className="skillDetailContainer skillDetail15">
              <img src={impliqueImg} alt=""/>
              <img src={dynamiqueImg} alt=""/>
              <img src={ptdexImg} alt=""/>
            </div>
          </Skill>
        </div>
      </div>
    );
  }
}

export default Skills;