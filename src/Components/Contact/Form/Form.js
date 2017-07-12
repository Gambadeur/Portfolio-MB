import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      name: "",
      mail: "",
      phone: "",
      message: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

render() {
    return (
        <div className="formContainer">
            {/* <h4 className="titleForm">CONTACTEZ-MOI</h4> */}
            <form onSubmit={this.handleSubmit}>
                <input
                    name="firstName"
                    type="string"
                    placeholder="Prénom"
                    value={this.state.firstName}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="name"
                    type="string"
                    placeholder="Nom"
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="mail"
                    type="string"
                    placeholder="Mail"
                    value={this.state.mail}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="phone"
                    type="string"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="message"
                    type="string"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleInputChange} />
                <button type="submit">Envoyer</button>
            </form>

        </div>
        );
    }
}

export default Form;