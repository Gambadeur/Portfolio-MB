import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

    

  render() {
    return (

      <div className="footerContainer">
        <div className="gridFooter">
            <p>Mathieu Blardone</p>
            <p>Paris</p>
        </div>
        <div className="gridFooter">
            <div className="logoFooter">
                <div className="circleLogoFooter">
                    <div className="bracketsLogoFooter"> {"{"} {" }"}
                    </div>
                </div>
            </div>
        </div>
        <div className="gridFooter"></div>
      </div>
    );
  }
}

export default Footer;