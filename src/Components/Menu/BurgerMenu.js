import React, { Component } from 'react';
import './burgermenu.css';

class BurgerMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBurgerActive: true
        }
        this.burgerClick = this.burgerClick.bind(this)
    }

    burgerClick() {
    this.setState(prevState => ({
      isBurgerActive : !prevState.isBurgerActive
    }));
}

  render() {
    return (
      <div className="BurgerMenuContainer">
        <div className="burger" onClick={this.burgerClick} style={{display:this.state.isBurgerActive ? 'block' : 'none'}} >
            <span></span>
            <span></span>
            <span></span>
        </div> 
        <div className="burgerClose" onClick={this.burgerClick} style={{display:this.state.isBurgerActive ? 'none' : 'block'}} >
            <span></span>
            <span></span>
            <span></span>
        </div> 
      </div>
    );
  }
}

export default BurgerMenu;