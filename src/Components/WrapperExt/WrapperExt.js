import React, { Component } from 'react';
import './wrapperext.css';
import SocialLinks from './../SocialLinks/SocialLinks';


class WrapperExt extends Component {

    render(){
        return(
            <div className="containerWrap">
                <div className="containerWrapUp">
                </div>
                 <div className="containerWrapDown">
                     <div className="socialLinks">
                        <SocialLinks />
                     </div>
                </div>
            </div>
        )
    }
}

export default WrapperExt