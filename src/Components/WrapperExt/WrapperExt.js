import React, { Component } from 'react';
import './wrapperext.css';


class WrapperExt extends Component {

    render(){
        return(
            <div className="containerWrap">
                <div className="containerWrapUp">
                    <div className="textLeft">Mathieu Blardone</div>
                </div>
                 <div className="containerWrapDown">
                </div>
            </div>
        )
    }
}

export default WrapperExt