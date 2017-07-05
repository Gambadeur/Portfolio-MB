import React, { Component } from 'react';
import './codepen2.css';


class CodePen2 extends Component {

    constructor(props){
        super(props);
        this.state={
            handleIframe: 'none',
            heightCards: '100px',
            widthCards: '100px'
        }
        this.openCard = this.openCard.bind(this);
    }

    openCard(){
        this.setState({
            handleIframe: 'block',
            heightCards: '300px',
            widthCards: '300px'
        })
        console.log("testououou")
    }


    render(){
        return(
            <div className="containerCodepen">
               <div className="cardsCp" style={{height:this.state.heightCards, width:this.state.widthCards}} onClick={this.openCard}>
                   <p>Hello</p>
                   <div className="iframeCards" style={{display:this.state.handleIframe}}>
                        <iframe height='265' scrolling='no' title='3D FX with mousetracking (React)' src='//codepen.io/Gambadeur25/embed/ZyaVKV/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style={{width: '100%'}}>See the Pen <a href='https://codepen.io/Gambadeur25/pen/ZyaVKV/'>3D FX with mousetracking (React)</a> by Gambadeur25 (<a href='https://codepen.io/Gambadeur25'>@Gambadeur25</a>) on <a href='https://codepen.io'>CodePen</a>
                        </iframe>
                    </div>
               </div>
               <div className="cardsCp">Boom!</div>
               <div className="cardsCp">Loader</div>
            </div>
        )
    }
}

export default CodePen2