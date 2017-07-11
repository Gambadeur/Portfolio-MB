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
            <div className={"skillCardAbsolute skillCard"+this.props.idCard} onMouseOver={this.isCardActive} onMouseOut={this.isCardOff}>
              <div className={"skillCardInfo skillInfo"+this.props.idCard}>
                <h3 className="titleCard" style={{display: this.state.handleCard ? 'none' : 'block'}}>{this.props.titleCard}</h3>
                {this.state.handleCard ? this.props.children : null}
              </div>
            </div>
        </div>
    );
  }
}

export default Skill;