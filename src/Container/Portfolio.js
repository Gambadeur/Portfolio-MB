import React, { Component } from 'react';
import Home from './../Components/Home/Home';
import Skills from './../Components/Skills/Skills';
import Codepen from './../Components/CodePen/CodePen';
import Contact from './../Components/Contact/Contact';
import WrapperExt from './../Components/WrapperExt/WrapperExt';
import Footer from './../Components/Footer/Footer';
import BurgerMenu from './../Components/Menu/BurgerMenu';
import About from './../Components/About/About.js';

import ScrollableAnchor from 'react-scrollable-anchor';
import './portfolio.css';

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.handleScroll = this.handleScroll.bind(this);
  }  

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    //  console.log('reffff :' + this.refs.contactref)
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }


  handleScroll(event) {
   
    // console.log(window.scrollY)
    if (document.body.scrollTop > 50) {
      console.log('50')
    }
  }

  render() {

    return (
        <div className="mainContainer">
           <div className="containeranimBlackIntro">
              <div className="animBlackIntro"></div>
            </div>
            <WrapperExt />
            <BurgerMenu />
            <div className="portfolioContainer">
                  <ScrollableAnchor id={'home'} >
                    <Home />
                  </ScrollableAnchor>
                  <ScrollableAnchor id={'skills'} >
                    <Skills />
                  </ScrollableAnchor>
                  <ScrollableAnchor id={'codepen'} >
                    <Codepen />
                  </ScrollableAnchor>
                  <ScrollableAnchor id={'about'} >
                    <About />
                  </ScrollableAnchor>
                  <ScrollableAnchor id={'contact'} >
                    <div ref='contactref'>
                    <Contact/>
                    </div>
                  </ScrollableAnchor>
                  <Footer />
            </div>
      </div>
    );
  }
}

export default Portfolio;
