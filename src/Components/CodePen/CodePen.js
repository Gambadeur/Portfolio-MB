import React, { Component } from 'react';
import './codepen.css';


class CodePen extends Component {

    render(){
        return(
            <div className="containerCodepen">
                <iframe height='298' scrolling='no' title='HELLO (SVG/CSS)' src='//codepen.io/Gambadeur25/embed/preview/gRgYLR/?height=298&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style={{width: '70%'}}>See the Pen <a href='https://codepen.io/Gambadeur25/pen/gRgYLR/'>HELLO (SVG/CSS)</a> by Gambadeur25 (<a href='https://codepen.io/Gambadeur25'>@Gambadeur25</a>) on <a href='https://codepen.io'>CodePen</a>.
                </iframe>
                {/*<img src="https://codepen.io/Gambadeur25/pen/gRgYLR/image/large.png" alt="test"/>*/}
            </div>
        )
    }
}

export default CodePen