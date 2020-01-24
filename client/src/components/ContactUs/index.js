import React from "react";
import emailjs from "emailjs-com";
import './style.css';


function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_DoxoMt5Go2TzXNORV56Z5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label style={{marginLeft: 10, marginRight: 10}}>Name:</label>
      <input type="text" name="user_name" />
      <label style={{marginLeft: 10, marginRight: 10}}>Email:</label>
      <input type="email" name="user_email" />
      <br></br>
      <div style={{marginLeft: -20}}>
      <label style={{marginLeft: 10, marginRight: 10}}>Message:</label>
      <textarea style={{width: 430}} rows="5" name="message" />
      </div>
      <input style={{width: 430, marginLeft: 65}} class="btn btn-info font-weight-bold" type="submit" value="Send" />
    </form>
  );
}

export default ContactUs