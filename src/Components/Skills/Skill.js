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

componentWillMount() {
  if(window.innerWidth < 1280){
    this.setState({
      handleCard: true
    })
  }
}

isCardActive() {
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
            onMouseEnter={window.innerWidth < 1200 ? null : this.isCardActive} 
            onMouseLeave={window.innerWidth < 1200 ? null : this.isCardOff}
            style={{backgroundColor: this.state.handleCard ? this.props.colorCard : 'rgba(255, 255, 255, 0.6)',
            borderColor: this.props.colorCard,
            width: this.state.handleCard ? Number(this.props.widthCard)+5+"%" : this.props.widthCard+"%",
            height: this.state.handleCard ? Number(this.props.heightCard)+5+"%" : this.props.heightCard+"%"
            }}
            >
              <div 
              className={"skillCardInfo skillInfo"+this.props.idCard} 
              style={{display: this.state.handleCard ? 'none' : 'block'}}>
                  <img src={this.props.titleCard} alt=""/>
              </div>
              {this.state.handleCard ? this.props.children : null}
            </div>
        </div>
    );
  }
}

export default Skill;