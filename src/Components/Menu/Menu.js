import React, { Component } from 'react';
import './menu.css';
// import crochet from './../../images/svg/crochet.svg'
// import { CSSTransitionGroup } from 'react-transition-group' 

class Menu extends Component {
  constructor(){
    super()
    this.state = {
        displayIcon : 'none'
    }
    this.mouseoverSvg = this.mouseoverSvg.bind(this)
    this.mouseoutSvg = this.mouseoutSvg.bind(this)
  }
  
componentDidMount(){
}

mouseoverSvg() {
  this.setState({
    displayIcon : 'block'
  })
}

mouseoutSvg() {
  this.setState({
    displayIcon : 'none'
  })
}

  render() {
    return (

      <div className="menuContainer" style={{display:this.props.isMenuActive ? 'block' : 'none'}}>
        <div className="flexMenuContainer">
        <div className="menuItemContainer">
          <ul>
            <li><a onMouseOver={this.mouseoverSvg} onMouseOut={this.mouseoutSvg} onClick={(e) => this.props.menuClosed(false)} href="#home">Accueil</a></li>
            <li><a onClick={(e) => this.props.menuClosed(false)} href="#skills">Compétences</a></li>
            <li><a onClick={(e) => this.props.menuClosed(false)} href="#codepen">CodePen</a></li>
            <li><a onClick={(e) => this.props.menuClosed(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="animMenuContainer">

            <div className="svgtest1" style={{display: this.state.displayIcon}}>
              <div className="circle" style={{color:'white', backgroundColor: 'rgb(245, 248, 130)', height:'200px', width:'200px', border: 'solid white 5px'}}>
                <div className="brackets" style={{fontSize:'100px'}}> {"{"} {" }"}</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="svg4864"
              width="400px"
              viewBox="0 0 400 100"
              
                >
                
              <defs
                id="defs4866">
              </defs>
              <metadata
                id="metadata4869">
              </metadata>
              <g
                transform="translate(0,-902.36218)"
                id="layer1"
                >
                <path
                  d="m 108.7963,46.759259 c 0.16297,-0.03256 0.40429,0.358796 0.74522,1.140772 0.34094,0.781977 0.78084,1.95735 1.39519,3.463906 0.61436,1.506557 1.40124,3.348696 2.51042,5.380666 1.10918,2.03197 2.53793,4.259036 4.54588,6.378754 1.42522,1.529614 3.17004,2.979975 5.23343,4.2297 2.06338,1.249724 4.44692,2.29907 7.06937,3.001828 2.28487,0.620232 4.75575,1.000699 7.38941,1.158369 2.63365,0.157669 5.43039,0.09202 8.34232,-0.131974 5.6162,-0.449729 11.62569,-1.589879 18.0219,-3.117974 5.90313,-1.415575 12.10308,-3.187527 18.66755,-5.048634 5.59066,-1.588313 11.47351,-3.275636 17.75976,-4.63144 4.77828,-1.057166 10.00806,-1.974267 15.6704,-1.739369 2.18838,0.08679 4.52575,0.440798 6.90447,1.256099 2.1106,0.724343 4.16283,1.923525 5.94613,3.64303 3.64019,3.622717 6.45129,7.83365 8.83451,12.062028 2.15058,3.734143 3.94749,7.374273 6.20939,10.3043 2.01972,2.593032 4.52772,4.784289 7.33621,5.704911 4.04283,1.588763 9.14137,1.176028 14.50087,0.365527 1.75684,-0.275364 3.61611,-1.047781 5.57838,-2.010243 0,-3e-6 10e-6,-6e-6 10e-6,-8e-6 2.21411,-1.111202 4.40919,-2.526414 6.66681,-4.070667 4.91314,-3.37633 9.83112,-7.316566 15.3404,-11.016405 5.12227,-3.510965 11.02203,-6.863599 17.97114,-8.498238 3.26965,-0.741753 6.74749,-0.950544 10.25751,-0.464251 1e-5,10e-7 2e-5,3e-6 3e-5,4e-6 3.78429,0.562026 7.34872,1.904535 10.50862,3.815609 1.5465,0.929713 3.06907,1.895204 4.56947,2.891841 5.20878,3.459908 10.07065,7.240019 14.68777,11.120565 4.71976,3.934573 9.00974,7.789068 13.57869,10.538816 4.7874,2.94901 10.29169,4.720053 15.88505,5.491778 9.23251,1.300649 18.75584,0.385541 28.14726,-0.823627 16.9132,-2.247152 32.96245,-5.110182 47.81856,-8.602626 14.85612,-3.492444 28.51987,-7.612924 40.80449,-12.131313 8.28105,-3.049 15.91961,-6.278028 22.80418,-9.643756 6.88457,-3.365728 13.0172,-6.866178 18.38887,-10.357849 5.50542,-3.586815 10.21455,-7.167843 14.10944,-10.509317 3.89489,-3.341474 6.98456,-6.440712 9.39822,-9.05276 2.41365,-2.612048 4.16013,-4.73388 5.38014,-6.152403 1.22001,-1.418523 1.92039,-2.130677 2.13364,-2.001204 0.21325,0.129473 -0.0685,1.0975 -0.90887,2.807755 -0.84041,1.710256 -2.24655,4.160653 -4.38131,7.151097 -2.13477,2.990444 -5.0071,6.518314 -8.75709,10.315419 -3.74999,3.797105 -8.38666,7.860635 -13.89092,11.895331 -5.35474,3.933751 -11.52646,7.883897 -18.48478,11.678932 -6.95832,3.795036 -14.70504,7.432708 -23.09757,10.833256 -12.43487,5.043417 -26.3205,9.652193 -41.42461,13.561302 -15.10411,3.909114 -31.42656,7.116584 -48.58769,9.601974 -9.65347,1.43596 -19.99967,2.46274 -30.73074,1.13219 -6.79489,-0.86105 -13.58755,-3.03187 -19.74526,-6.72131 -5.5661,-3.397388 -10.29434,-7.536745 -14.84376,-11.360449 -4.44616,-3.705394 -9.01808,-7.261319 -13.81361,-10.446858 -1.38138,-0.917605 -2.77523,-1.800264 -4.18357,-2.643458 -2.16232,-1.282259 -4.48375,-2.189705 -6.78953,-2.505709 0,-10e-7 -1e-5,-2e-6 -1e-5,-3e-6 -2.13817,-0.328025 -4.42397,-0.173527 -6.67793,0.308259 -4.9892,1.009828 -9.80177,3.863039 -14.6472,6.993514 -5.06898,3.348412 -10.00116,7.243392 -15.33344,10.846472 -2.43984,1.655763 -5.02993,3.271335 -7.83804,4.665742 -10e-6,3e-6 -2e-5,6e-6 -2e-5,1e-5 -2.46721,1.247419 -5.24797,2.288965 -8.31685,2.817886 -6.05699,1.092244 -12.8118,1.258384 -19.30882,-1.026385 -4.86954,-1.901154 -8.7315,-5.204833 -11.47543,-9.018379 -2.83279,-3.921753 -4.75986,-7.89866 -6.66196,-11.40768 -2.1832,-3.932972 -4.40908,-7.533283 -7.15429,-10.295974 -0.65717,-0.720962 -1.63604,-1.289981 -2.72418,-1.724907 -1.29489,-0.516065 -2.8314,-0.754665 -4.47759,-0.893091 -4.38345,-0.355118 -8.96596,0.382371 -13.58706,1.215107 -5.97206,1.108938 -11.76515,2.586522 -17.41879,3.987874 -6.61177,1.642222 -12.9949,3.212374 -19.14816,4.428746 -6.6478,1.319446 -13.07632,2.222305 -19.14701,2.410706 -3.14721,0.106845 -6.23128,0.0032 -9.17097,-0.356183 -2.93969,-0.359417 -5.73524,-0.974099 -8.33544,-1.844208 -3.04779,-1.027129 -5.74922,-2.465877 -8.04267,-4.118192 -2.29344,-1.652314 -4.18052,-3.51841 -5.67793,-5.439303 -2.03914,-2.65834 -3.35148,-5.271518 -4.274,-7.5981 -0.92252,-2.326583 -1.4522,-4.371665 -1.78396,-6.032453 -0.33176,-1.660788 -0.46308,-2.941322 -0.48877,-3.808271 -0.0257,-0.866948 0.0558,-1.32254 0.21872,-1.355104 z"
                  transform="translate(0,902.36218)"
                  id="path4888"
                  style={{fill:"white",fillRule:"evenodd",stroke:"none"}} />
              </g>
            </svg>
            </div>

          {/*<p>youhou</p>
          <img src={crochet} alt=""/>
          {crochet}*/}
        </div>
        </div>
      </div>
    );
  }
}

export default Menu;