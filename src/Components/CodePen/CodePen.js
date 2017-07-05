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
            {index: 1, name:"Hello", src:"//codepen.io/Gambadeur25/embed/gRgYLR/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/gRgYLR/"},
            {index: 2, name:"Menu", src:"//codepen.io/Gambadeur25/embed/rwpJRM/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/rwpJRM/"},
            {index: 3, name:"Loader", src:"//codepen.io/Gambadeur25/embed/rwpJRM/?height=265&theme-id=light&default-tab=result&embed-version=2", href:"https://codepen.io/Gambadeur25/pen/rwpJRM/"},
        ]

        return(
            <div className="containerCp">
                <div className="containerLeftCp">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="600"
                    height="200"
                    id="svg2">
                    <defs>

                        <filter
                        y="-0.2"
                        height="1.4"
                        color-interpolation-filters="sRGB"
                        id="filter3005">
                        <feMorphology
                            id="feMorphology3007"
                            in="SourceGraphic"
                            result="result8"
                            operator="dilate"
                            radius="7" />
                        <feComposite
                            in2="result8"
                            operator="arithmetic"
                            k1="0.5"
                            k2="0"
                            k3="0.5"
                            k4="0"
                            in="SourceGraphic"
                            result="result10"
                            id="feComposite3009" />
                        <feTurbulence
                            id="feTurbulence3011"
                            baseFrequency="0.07"
                            numOctaves="3"
                            type="fractalNoise"
                            result="result11" />
                        <feDisplacementMap
                            in2="result11"
                            scale="10"
                            xChannelSelector="R"
                            yChannelSelector="A"
                            in="result10"
                            result="result12"
                            id="feDisplacementMap3013" />
                        <feComposite
                            in2="result12"
                            operator="arithmetic"
                            k1="0.25"
                            k2="0.25"
                            k3="0.75"
                            k4="0"
                            in="SourceGraphic"
                            result="result13"
                            id="feComposite3015" />
                        </filter>
                    </defs>
                    <metadata>
                    </metadata>
                    <g
                        transform="translate(0,-952.36217)"
                        id="layer1">
                        <path
                        d="m 14.888824,17.615172 c 11.391328,20.502928 30.227628,36.762723 52.174315,45.037703 21.946688,8.27498 46.829151,8.499307 68.921461,0.621358 20.10272,-7.168475 37.78221,-20.958475 49.62941,-38.710943 7.08765,13.524422 15.76912,26.212715 25.8073,37.718355 11.0867,12.707436 24.14564,24.168532 39.77395,30.504911 7.81416,3.168189 16.20973,5.004115 24.64158,4.956109 8.43185,-0.04801 16.897,-2.013938 24.29235,-6.064521 7.39535,-4.050583 13.68085,-10.222241 17.49802,-17.74073 3.81717,-7.518489 5.08272,-16.377524 3.12237,-24.578467 -1.96035,-8.200942 -7.21884,-15.640144 -14.50586,-19.882521 -7.28702,-4.242377 -16.53784,-5.1118 -24.34865,-1.935371 -4.60415,1.872373 -8.56418,5.001686 -12.79725,7.606508 -2.11653,1.302411 -4.32227,2.483539 -6.67218,3.292188 -2.34992,0.808649 -4.85551,1.237483 -7.33045,1.012363 -4.18278,-0.380465 -8.14623,-2.717362 -10.50392,-6.19323 -2.35769,-3.475869 -3.06337,-8.022524 -1.87019,-12.049518 1.19319,-4.026994 4.26183,-7.455332 8.1325,-9.085759 3.87066,-1.630428 8.46743,-1.430961 12.18232,0.528624 1.04225,-1.86508 1.49441,-4.0543074 1.27633,-6.1796919 -0.21808,-2.1253846 -1.10539,-4.1771738 -2.50468,-5.79173622 -1.39928,-1.61456238 -3.30413,-2.78448918 -5.37694,-3.30243818 -2.07281,-0.5179491 -4.30408,-0.3815437 -6.29836,0.3850415 -1.65089,0.634589 -3.13831,1.69760791 -4.25427,3.06974915 -1.11597,1.37214125 -1.85533,3.05158395 -2.08939,4.80468595 -0.23406,1.753102 0.0411,3.5745475 0.80465,5.1698887 0.76357,1.595341 2.01564,2.956685 3.55383,3.829677 1.29762,0.736458 2.78305,1.122598 4.27406,1.177978 1.49102,0.05538 2.98682,-0.214946 4.38866,-0.725859 2.80369,-1.021827 5.18777,-2.975451 7.16763,-5.2081465 3.95973,-4.4653911 6.5121,-10.13447318 10.96954,-14.1031498 4.55438,-4.0549823 10.80795,-5.9486967 16.90309,-5.7628588 6.09513,0.1858374 12.02645,2.3371158 17.21946,5.5336525 10.38602,6.3930736 17.70371,16.6023676 25.43274,26.0365016 17.45143,21.301389 38.31028,39.805206 61.54048,54.592356 -10.55822,-0.107343 -21.06093,4.768918 -27.79247,12.903648 -4.72105,5.705155 -7.59498,12.914971 -8.09322,20.303401 -0.49823,7.38843 1.38171,14.91882 5.29406,21.20616 3.91235,6.28734 9.8377,11.30045 16.68624,14.11729 6.84854,2.81684 14.58631,3.42344 21.79014,1.70825 7.20383,-1.7152 13.838,-5.7437 18.68233,-11.34456 4.84433,-5.60085 7.87479,-12.74629 8.534,-20.1221 0.65922,-7.37581 -1.05608,-14.9454 -4.8304,-21.316557 -3.77432,-6.371153 -9.58896,-11.512266 -16.37445,-14.477767 l 95.28848,14.888824 c 17.46048,-0.236499 34.75228,-7.081171 47.64424,-18.859177 12.37726,-11.30778 20.6096,-27.056593 22.82953,-43.673885 l 18.85918,19.851766 c -0.64239,1.450961 -0.82765,3.100243 -0.52394,4.657716 0.3037,1.557472 1.09473,3.015343 2.23059,4.123392 1.13586,1.108049 2.60969,1.861332 4.17009,2.149596 1.5604,0.288264 3.19893,0.112919 4.67552,-0.468141 1.47659,-0.58106 2.78661,-1.5611 3.80408,-2.778769 1.01746,-1.217669 1.74358,-2.66605 2.19146,-4.188337 0.89576,-3.044575 0.64199,-6.293123 0.3262,-9.450987 l -1.98518,-19.851766"
                        transform="translate(0,952.36217)"
                        id="path3086"
                        style={{fill:'none',stroke:'#000000',strokeWidth:"1px",strokeLinecap:'butt', strokeLinejoin:'miter', strokeOpacity:1}} />
                    </g>
                    </svg>

                    <div className="ItemCp">   
                        <ul>
                            {codePenInfo.map( (item, index) => {
                                return (
                                <li onClick={(e) =>this.changeCP(item)}>{item.name}</li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="containerRightCp">
                    <iframe height='265' scrolling='no' title='3D FX with mousetracking (React)' 
                    src= {this.state.srcFrame}
                    allowtransparency='false' 
                    frameborder="0" 
                    allowFullScreen='false' 
                    style={{width: '100%'}}>
                    See the Pen <a href={this.state.hrefFrame}>3D FX with mousetracking (React)</a> by Gambadeur25 (<a href='https://codepen.io/Gambadeur25'>@Gambadeur25</a>) on <a href='https://codepen.io'>CodePen</a>
                    </iframe>
                    
                </div>
               
            </div>
        )
    }
}

export default CodePen