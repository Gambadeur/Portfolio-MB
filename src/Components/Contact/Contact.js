import React, { Component } from 'react';
import './contact.css';
// import Form from './Form/Form';
import MonFilm2 from './../../images/video/Monfilm2.mp4';

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            openform : 'none'
        }
    }

render() {
    return (
        <div className="contactContainer">
            <div className="contactContainerForm" style={{display: this.state.openform}}> 
                <p>mblardone[@]gmail.com</p>
                {/* <Form /> */}
            </div>
            <div className="contactContainerVideo" onClick={() => this.setState({openform : 'block'})}> 
                <video autoPlay muted loop src={MonFilm2}></video>
                <div className="textVideo">
                    <h3>Connectez-Moi</h3>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;