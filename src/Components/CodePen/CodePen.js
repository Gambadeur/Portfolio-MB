import React, { Component } from 'react';
import './codepen.css';


class CodePen extends Component {
    constructor(){
        super();
        this.state = {
            srcFrame : '//codepen.io/Gambadeur25/embed/ZyaVKV/?height=265&theme-id=light&default-tab=result&embed-version=2',
            hrefFrame : 'https://codepen.io/Gambadeur25/pen/ZyaVKV/',
        }
        this.changeCP = this.changeCP.bind(this);
    }

    changeCP(item){
        console.log('charge');
        this.setState({
            srcFrame: item.src,
            hrefFrame: item.href
        })
    }



    render(){

        const codePenInfo = [
            {index: 0, name:"Boom", src:"//codepen.io/Gambadeur25/embed/ZyaVKV/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/ZyaVKV/"},
            {index: 1, name:"Hey!", src:"//codepen.io/Gambadeur25/embed/gRgYLR/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/gRgYLR/"},
            {index: 2, name:"Menu", src:"//codepen.io/Gambadeur25/embed/rwpJRM/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/rwpJRM/"},
            {index: 3, name:"Load", src:"//codepen.io/Gambadeur25/embed/rwpJRM/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/rwpJRM/"},
            {index: 4, name:"Logo", src:"//codepen.io/Gambadeur25/embed/BZpByd/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/BZpByd/"},
        ]

        return(
            <div className="containerCp">
                <div className="containerLeftCp">
                    <div className="itemsCp">   
                        <ul>
                            {codePenInfo.map( (item, index) => {
                                return (
                                <li onClick={(e) =>this.changeCP(item)}>{item.name}</li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="containerRightCp">
                    <iframe height='300' scrolling='no' title='3D FX with mousetracking (React)' 
                    src= {this.state.srcFrame}
                    allowtransparency='false' 
                    frameborder="0" 
                    allowFullScreen='false' 
                    style={{width: '75%'}}>
                    See the Pen <a href={this.state.hrefFrame}>3D FX with mousetracking (React)</a> by Gambadeur25 (<a href='https://codepen.io/Gambadeur25'>@Gambadeur25</a>) on <a href='https://codepen.io'>CodePen</a>
                    </iframe>
                    
                </div>
               
            </div>
        )
    }
}

export default CodePen