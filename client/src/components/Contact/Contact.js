import React, {Component} from 'react';
import './contact.css';

// creates Contact component to render to the page
class Contact extends Component {

    constructor() {
        super();
        this.state={};
    }

    getValues = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    };

    sendData = (event) => {
        event.preventDefault();
        console.log("submit!");
        console.log(this.state);
    };

    render() {
        return (
            <form>
                <label
                    htmlFor="formName"
                    className="formLabel" >
                    Name
                </label>
                <br />
                <input
                    id="formName"
                    type="text"
                    name="name"
                    className="formInput"
                    onChange={this.getValues} />
                <br /><br />

                <label
                    htmlFor="formEmail"
                    className="formLabel" >
                    Email
                </label>
                <br />
                <input
                    id="formEmail"
                    type="email"
                    name="email"
                    className="formInput"
                    onChange={this.getValues} />
                <br /><br />

                <label
                    htmlFor="formMessage"
                    className="formLabel" >
                    Message
                </label>
                <br />
                <textarea
                    id="formMessage"
                    type="text"
                    name="message"
                    className="formInput"
                    onChange={this.getValues} />
                <br /> <br />

                <button
                    onClick={this.sendData}>
                    Submit
                </button>

            </form>
        )
    }

};

// exports Contact for external use
export default Contact;