import React, { Component } from 'react';
import './codepen.css';


class CodePen extends Component {

    render(){
        return(
            <div className="containerCp">
                <div className="containerLeftCp">
                    <div className="ItemCp">
                        <ul>
                            <li><a>Hello</a></li>
                            <li><a>Boom!</a></li>
                            <li><a>Loader</a></li>
                            <li><a>Hover Menu</a></li>
                        </ul>
                    </div>
                </div>
                <div className="containerRightCp">
                    {/*<iframe height='265' scrolling='no' title='HELLO (SVG/CSS)' src='//codepen.io/Gambadeur25/embed/gRgYLR/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style={{width: '100%'}}>See the Pen <a href='https://codepen.io/Gambadeur25/pen/gRgYLR/'>HELLO (SVG/CSS)</a> by Gambadeur25 (<a href='https://codepen.io/Gambadeur25'>@Gambadeur25</a>) on <a href='https://codepen.io'>CodePen</a>
                    </iframe>*/}
                    <iframe height='265' scrolling='no' title='3D FX with mousetracking (React)' src='//codepen.io/Gambadeur25/embed/ZyaVKV/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style={{width: '100%'}}>See the Pen <a href='https://codepen.io/Gambadeur25/pen/ZyaVKV/'>3D FX with mousetracking (React)</a> by Gambadeur25 (<a href='https://codepen.io/Gambadeur25'>@Gambadeur25</a>) on <a href='https://codepen.io'>CodePen</a>.
                    </iframe>
                    
                </div>
               
            </div>
        )
    }
}

export default CodePen