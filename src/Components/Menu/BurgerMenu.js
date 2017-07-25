import React, { Component } from 'react';
import './burgermenu.css';
import Menu from './Menu';

class BurgerMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isBurgerActive: true,
            isMenuActive: false,
        }
        this.burgerClick = this.burgerClick.bind(this);
        this.menuClosed = this.menuClosed.bind(this)
    }

    burgerClick() {
        this.setState(prevState => ({
            isBurgerActive : !prevState.isBurgerActive,
            isMenuActive : !prevState.isMenuActive,

        }));
    }
    
    menuClosed(value) {
        this.setState({
            isMenuActive: value,
            isBurgerActive: true,
        })
    }


  render() {
    return (
        <div>
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
            <Menu isMenuActive={this.state.isMenuActive} menuClosed={this.menuClosed}/>
            }
        </div>
    );
  }
}

export default BurgerMenu;