import React, { Component } from 'react';
import './contact.css';
import Form from './Form/Form';

class Contact extends Component {



render() {
    return (
        <div className="contactContainer">
            <div className="contactContainerLeft"> 
                <Form />
            </div>
         <div className="contactContainerRight"> 
        </div>
        </div>
        );
    }
}

export default Contact;