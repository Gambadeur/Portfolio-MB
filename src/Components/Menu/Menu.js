import React, { Component } from 'react';
import './menu.css';
import origamiSvg from './../../images/svg/origami.svg';
import codepenSvg from './../../images/png/codepen.png';
import MonFilm2 from './../../images/video/Monfilm2.mp4';
import ptdinterroImg from './../../images/png/ptdinterro.png';
import bracketRight from './../../images/png/bracketLeftWhite.png';
import bracketLeft from './../../images/png/bracketRightWhite.png';


class Menu extends Component {
  constructor(){
    super()
    this.state = {
        displayIconHome : 'none',
        displayIconSkills : 'none',
        displayIconCp: 'none',
        displayIconContact: 'none',
        displayIconAbout: 'none'
    }
  }

  render() {
    return (

      <div className="menuContainer" style={{display:this.props.isMenuActive ? 'block' : 'none'}}>
        <div className="flexMenuContainer">
        <div className="menuItemContainer">
          <ul>
            <li><a onMouseOver={()=> this.setState({displayIconHome : 'block'})} onMouseOut={()=> this.setState({displayIconHome : 'none'})} onClick={(e) => this.props.menuClosed(false)} href="#home">Accueil</a></li>
            <li><a onMouseOver={()=> this.setState({displayIconSkills : 'block'})} onMouseOut={()=> this.setState({displayIconSkills : 'none'})} onClick={(e) => this.props.menuClosed(false)} href="#skills">Compétences</a></li>
            <li><a onMouseOver={()=> this.setState({displayIconCp : 'block'})} onMouseOut={()=> this.setState({displayIconCp : 'none'})} onClick={(e) => this.props.menuClosed(false)} href="#codepen">CodePen</a></li>
            <li><a onMouseOver={()=> this.setState({displayIconAbout : 'block'})} onMouseOut={()=> this.setState({displayIconAbout : 'none'})} onClick={(e) => this.props.menuClosed(false)} href="#about">Qui suis-je?</a></li>
            <li><a onMouseOver={()=> this.setState({displayIconContact : 'block'})} onMouseOut={()=> this.setState({displayIconContact : 'none'})} onClick={(e) => this.props.menuClosed(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="animMenuContainer">
            <div className="HomeItemsAnim" style={{display: this.state.displayIconHome}}>
              <div className="circleMenuHome">
                <div className="containerBracketsMenu">
                  <img className="bracketleftmenuItem" src={bracketLeft} alt=""/>
                  <img className="bracketrightmenuItem" src={bracketRight} alt=""/>
                </div>
              </div>
            </div>
            <div className="SkillsItemsAnim" style={{display: this.state.displayIconSkills}}>
              <img src={origamiSvg} alt=""/>
            </div>
            <div className="CpItemsAnim" style={{display: this.state.displayIconCp}}>
              <img src={codepenSvg} alt=""/>
            </div>
            <div className="AboutItemsAnim" style={{display: this.state.displayIconAbout}}>
              <img src={ptdinterroImg} alt=""/>
            </div>
            <div className="ContactAnim" style={{display: this.state.displayIconContact}}>
              <video autoPlay muted loop src={MonFilm2}></video>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Menu;