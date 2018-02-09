import React from 'react';
import './contact.css';

// creates Contact component to render to the page
const Contact = () => {
    return (
        <form>
            <label htmlFor="formName" className="formLabel" >
                Name
            </label>
            <br />
            <input id="formName" type="text" name="email" className="formInput" />
            <br /><br />

            <label htmlFor="formEmail" className="formLabel" >
                Email
            </label>
            <br />
            <input id="formEmail" type="email" className="formInput"/>
            <br /><br />

            <label htmlFor="formMessage" className="formLabel" >
                Message
            </label>
            <br />
            <textarea id="formMessage" type="text" name="email" className="formInput" />
            <br /> <br />

            <button id="sendMail">
                Send Message
            </button>

        </form>
    )
};

// exports Contact for external use
export default Contact;