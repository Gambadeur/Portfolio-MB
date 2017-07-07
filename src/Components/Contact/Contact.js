import React, { Component } from 'react';
import './contact.css';
import Form from './Form/Form';
import MonFilm2 from './../../images/video/Monfilm2.mp4';

class Contact extends Component {



render() {
    return (
        <div className="contactContainer">
            <div className="contactContainerLeft"> 
                <Form />
            </div>
         <div className="contactContainerRight"> 
              <video className="videoFooter" autoPlay muted loop src={MonFilm2}></video>
        </div>
        </div>
        );
    }
}

export default Contact;