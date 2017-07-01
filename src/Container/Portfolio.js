import React, { Component } from 'react';
import Home from './../Components/Home/Home';
import Skills from './../Components/Skills/Skills';
import Codepen from './../Components/CodePen/CodePen';
import WrapperExt from './../Components/WrapperExt/WrapperExt';
import './portfolio.css';
import {SectionsContainer, Section} from 'react-fullpage';
import BurgerMenu from './../Components/Menu/BurgerMenu';

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['Home', 'Skills', 'CodePen'],
      navigation:           false,
      verticalAlign:        false,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation:      true
    };

    return (
        <div>
            <WrapperExt />
            <BurgerMenu />
            <div className="portfolioContainer">
              <SectionsContainer {...options}>
                <Section>
                  <Home />
                </Section>
                <Section>
                <Skills />
                </Section>
                <Section>
                <Codepen />
                </Section>
              </SectionsContainer>
            </div>
      </div>
    );
  }
}

export default Portfolio;
