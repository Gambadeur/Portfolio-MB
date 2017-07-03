import React, { Component } from 'react';
import './menu.css';
// import { CSSTransitionGroup } from 'react-transition-group' 

class Menu extends Component {

    

  render() {
    return (

      <div className="menuContainer" style={{display:this.props.isMenuActive ? 'block' : 'none'}}>
        <div className="menuItemContainer">
            <ul>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="/#Home">Accueil</a></li>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="/#Skills">Compétences</a></li>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="/#CodePen">CodePen</a></li>
                <li><a onClick={(e) => this.props.menuClosed(false)} href="/#Form">Contact</a></li>
            </ul>
            <div className="contactme">CONTACT ME</div>
        </div>
        <div className="animMenuContainer">
        </div>
      </div>
    );
  }
}

export default Menu;