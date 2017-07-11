import React, { Component } from 'react';
import './skills.css'

class SkillDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
    }

}


  render() {
    return (
        <div className={"skillDetailContainer skillDetail"+this.props.idSkillDetail}>

        </div>
    );
  }
}

export default SkillDetail;