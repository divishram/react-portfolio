import React from 'react';
import "../App.css";


const Contact = () => {
      return (
  
        <section id="contact-form">
        <h2>Contact</h2>
        <form id="contact" name="contact" acceptCharset="utf-8">
          <label><span>Name</span><input name="name" type="text" placeholder="Divish" /></label>
          <label><span>Email</span><input name="email" type="email" placeholder="divish@email.com" /></label>
          <label><span>Message</span><textarea name="message" placeholder="Enter Message..." defaultValue={""} /></label>
          <input name="submit" type="submit" defaultValue="Send" />
        </form>
      </section>
      );
}
export default Contact;
