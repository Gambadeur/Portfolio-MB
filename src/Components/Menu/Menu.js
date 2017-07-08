import React, { Component } from 'react';
import './menu.css';
import crochet from './../../images/svg/crochet.svg'
// import { CSSTransitionGroup } from 'react-transition-group' 

class Menu extends Component {

    

  render() {
    return (

      <div className="menuContainer" style={{display:this.props.isMenuActive ? 'block' : 'none'}}>
        <div>youhouhfds</div>
        <div className="menuItemContainer">
            <ul>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="#home">Accueil</a></li>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="#skills">Compétences</a></li>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="#codepen">CodePen</a></li>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <div className="animMenuContainer">
          <img src={crochet} alt=""/>
          <p>youhou</p>
        </div>
      </div>
    );
  }
}

export default Menu;