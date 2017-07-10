import React, { Component } from 'react';
import './menu.css';
import origamiSvg from './../../images/svg/origami.svg'
import codepenSvg from './../../images/png/codepen.png'
// import { CSSTransitionGroup } from 'react-transition-group' 

class Menu extends Component {
  constructor(){
    super()
    this.state = {
        displayIconHome : 'none',
        displayIconSkills : 'none',
        displayIconCp: 'none'
    }
    this.mouseoverSvg = this.mouseoverSvg.bind(this)
    this.mouseoutSvg = this.mouseoutSvg.bind(this)
  }
  
componentDidMount(){
}

mouseoverSvg() {
  this.setState({
    displayIconHome : 'block',
    
  })
}

mouseoutSvg() {
  this.setState({
    displayIconHome : 'none',
  })
}

  render() {
    return (

      <div className="menuContainer" style={{display:this.props.isMenuActive ? 'block' : 'none'}}>
        <div className="flexMenuContainer">
        <div className="menuItemContainer">
          <ul>
            <li><a onMouseOver={this.mouseoverSvg} onMouseOut={this.mouseoutSvg} onClick={(e) => this.props.menuClosed(false)} href="#home">Accueil</a></li>
            <li><a onMouseOver={()=> this.setState({displayIconSkills : 'block'})} onMouseOut={()=> this.setState({displayIconSkills : 'none'})} onClick={(e) => this.props.menuClosed(false)} href="#skills">Compétences</a></li>
            <li><a onMouseOver={()=> this.setState({displayIconCp : 'block'})} onMouseOut={()=> this.setState({displayIconCp : 'none'})} onClick={(e) => this.props.menuClosed(false)} href="#codepen">CodePen</a></li>
            <li><a onClick={(e) => this.props.menuClosed(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="animMenuContainer">
            <div className="HomeItemsAnim" style={{display: this.state.displayIconHome}}>
              <div className="circleMenuHome">
                <div className="bracketsMenuHome"> {"{"} {" }"}</div>
              </div>
            </div>
            <div className="SkillsItemsAnim" style={{display: this.state.displayIconSkills}}>
              <img src={origamiSvg} alt=""/>
            </div>
            <div className="CpItemsAnim" style={{display: this.state.displayIconCp}}>
              <img src={codepenSvg} alt=""/>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Menu;