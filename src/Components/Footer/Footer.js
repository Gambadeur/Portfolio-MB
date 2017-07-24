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
            <a target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DACKaWYTMaU/bh9tdg8PShxAPYQwTRD_Vg/view?utm_content=DACKaWYTMaU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
              <p>Mon CV</p>
              <div className="arrowContact">
                <span></span>
                <span></span>
                <span></span>
            </div>   
            </a>
          </div>
        </div>
        <div className="gridFooter">
          <p>Mathieu Blardone</p>
            <p>Creativ Front-End</p>
            <p>Developpeur Junior</p>
            <div className="logoFooter">
               <p>Site powered by React</p>
                  <div className="animLogoFooter">
                    <img src={reactLogo} alt=""/>
                  </div>
            </div>
        </div>
        <div className="gridFooter">
            <div className="containerLeftFooter">
              <ScrollToTop 
              showUnder={160} 
              duration={500}
              style={{position: 'relative', bottom: 'inherit', right:'inherit'}}
              >
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