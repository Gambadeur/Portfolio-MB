import React, { Component } from 'react';
import './contact.css';
// import Form from './Form/Form';
import MonFilm2mp4 from './../../images/video/Monfilm2.mp4';
import MonFilm2webm from './../../images/video/Monfilm2.webm';

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            openform : 'none'
        }
    }

    componentWillMount() {
        if (window.innerWidth < 1000) {
            this.setState({
                openform : 'block'
            });
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
                <video playsinline autoPlay muted loop>
                    <source src={MonFilm2mp4} type="video/mp4"/>
                    <source src={MonFilm2webm} type="video/webm"/>
                </video>
                <div className="textVideo">
                    <h3>Connectez-Moi</h3>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;