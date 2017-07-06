import React, { Component } from 'react';
import Home from './../Components/Home/Home';
import Skills from './../Components/Skills/Skills';
import Codepen from './../Components/CodePen/CodePen';
import Contact from './../Components/Contact/Contact';
import WrapperExt from './../Components/WrapperExt/WrapperExt';
import Footer from './../Components/Footer/Footer';
import './portfolio.css';
// import {SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage';
import BurgerMenu from './../Components/Menu/BurgerMenu';

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    // let options = {
    //   sectionClassName:     'section',
    //   anchors:              ['Home', 'Skills', 'CodePen', 'Form'],
    //   navigation:           false,
    //   verticalAlign:        false,
    //   sectionPaddingTop:    '0px',
    //   sectionPaddingBottom: '0px',
    //   arrowNavigation:      true
    // };

    return (
        <div className="mainContainer">
           <div className="containeranimBlackIntro">
              <div className="animBlackIntro"></div>
            </div>
            <WrapperExt />
            <BurgerMenu />
           
            <div className="portfolioContainer">
              {/*<ScrollToTopOnMount />*/}
              {/*<SectionsContainer {...options}>
                <Section>*/}
                  <Home />
          
                  <Skills />

                  <Codepen />

                  <Contact />

                  <Footer />
                {/*</Section>
              </SectionsContainer>*/}
            </div>
      </div>
    );
  }
}

export default Portfolio;
