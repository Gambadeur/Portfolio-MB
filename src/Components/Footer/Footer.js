import React, { Component } from 'react';
import reactLogo from './../../images/react.svg';
import './footer.css';
import ScrollToTop from 'react-scroll-up';

class Footer extends Component {

    

  render() {
    return (

      <div className="footerContainer">
        <div className="gridFooter">
          <div className="arrowContactContainer">
            <p>CONTACT</p>
            <div className="arrowContact">
              <span></span>
              <span></span>
              <span></span>
            </div>
            
          </div>
        </div>
        <div className="gridFooter">
          <p>Mathieu Blardone</p>
            <p>++33(0)6 67 03 14 08</p>
            <p>mathieublardone(@)gmail.com</p>
            <div className="logoFooter">
               <p>Site powered by React</p>
                  <div className="animLogoFooter">
                    <img src={reactLogo} alt=""/>
                  </div>
            </div>
        </div>
        <div className="gridFooter">
            <div className="containerLeftFooter">
              <ScrollToTop showUnder={160} duration={500}>
              <div className="arrowUp">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>UP</p>
              </ScrollToTop>
            </div>

        </div>
      </div>
    );
  }
}

export default Footer;