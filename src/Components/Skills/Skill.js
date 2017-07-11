import React, { Component } from 'react';
import './skills.css'

class Skill extends Component {
  constructor(props){
    super(props);
    this.state = {
      handleCard : false
    }
    this.isCardActive = this.isCardActive.bind(this);
    this.isCardOff = this.isCardOff.bind(this)
}

isCardActive() {
  console.log('actifffff')
  this.setState({
    handleCard : true
  })
}


isCardOff() {
  this.setState({
    handleCard : false
  })
}

  render() {
    return (
        <div className="skillCardRelative">
            <div 
            className={"skillCardAbsolute skillCard"+this.props.idCard} 
            onMouseEnter={this.isCardActive} 
            onMouseLeave={this.isCardOff}
            style={{backgroundColor: this.state.handleCard ? this.props.colorCard : 'rgb(255, 255, 255, 0.6)',
            borderColor: this.props.colorCard,
            /*width: this.state.handleCard ? "105%" : this.props.widthCard+"%",
            height: this.state.handleCard ? "180%" : this.props.heightCard+"%",*/
            }}
            >
              <div 
              className={"skillCardInfo skillInfo"+this.props.idCard} 
              style={{display: this.state.handleCard ? 'none' : 'block'}}>
                  <h3 className="titleCard" >{this.props.titleCard}</h3>   
              </div>
              {this.state.handleCard ? this.props.children : null}
            </div>
        </div>
    );
  }
}

export default Skill;