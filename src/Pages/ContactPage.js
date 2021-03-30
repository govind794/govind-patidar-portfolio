import React from 'react';
import ContactDetails from '../Components/ContactDetails';
import Footer from '../Components/Footer';

function ContactPage() {
    return (
        <div className="contact-page">
            <div className="image-container">
                <div className="mask"></div>
                <div className="main-heading">
                    <h1>CO<span>N</span>TACT</h1>
                </div>
            </div>
            <div className="content-container">
                <div className="content-head">
                    <h2 className="small-heading">SAY HELLO!</h2>
                    <div className="contact-form">
                        <form action="#" id="contactForm" method="post" name="contactForm">
                            <fieldset>
                                <div className="col-sm-12">
                                    <input id="name" name="name" placeholder="Your Name*" type="text" value="" />
                                </div>

                                <div className="col-sm-12">
                                    <input id="email" name="email" placeholder="Your Email*" type="text" value="" />
                                </div>

                                <div className="col-xs-12">
                                    <textarea cols="5" id="message" name="message"
                                        placeholder="Your Message....*"></textarea>
                                </div>

                                <div className="col-xs-12">
                                    <button className="submit active">SEND</button>
                                </div>

                                {/* <div className="error col-xs-12">
                                    <h3></h3>
                                </div> */}

                                <div className="success col-xs-12">
                                    <h3>Success! Your message was sent.</h3>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <div className="google-map" id="google-map">
                    <iframe title="My Daily Tracker" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0163074340126!2d77.62904221529799!3d12.970808218404034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a02304bd51%3A0x3094ed8d821ae61f!2s168%2C%204th%20Cross%20Rd%2C%20Airports%20Authority%20of%20India%20Colony%2C%20Someshvarapura%20Layout%2C%20Jogupalya%2C%20Bengaluru%2C%20Karnataka%20560008!5e0!3m2!1sen!2sin!4v1613962151141!5m2!1sen!2sin" width="59%" height="500" frameBorder="0" style={{ border: 0 }} allowFullScreen="" loading="lazy" tabIndex="0"></iframe>
                </div>

                <ContactDetails address="Bangalore" mobile="7470708255" email="patidar.govind.794@gmail.com" />
                <Footer />
            </div>
        </div>
    );
}
export default ContactPage;