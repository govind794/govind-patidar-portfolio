import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function ContactDetails({ address, mobile, email }) {
    return (
        <div className="contact-details">
            <h2 className="small-heading">CONTACT DETAILS</h2>
            <div className="contact">
                <div className="contact-title">
                    <h3><FaMapMarkerAlt /></h3>
                    <h3>{address}</h3>
                </div>
                <div className="contact-title">
                    <h3><FaPhoneAlt /></h3>
                    <h3>{mobile}</h3>
                </div>
                <div className="contact-title">
                    <h3><FaEnvelope /></h3>
                    <h3>{email}</h3>
                </div>
            </div>

            <div className="social-media">
                <p>
                    <a href="https://www.linkedin.com/in/govind794"
                        className="facebook social">
                        <div data-tip="Linkedin" data-for='tooltip' data-place='bottom'><FaLinkedinIn /></div>
                        <ReactTooltip />
                    </a>
                    <a href="https://github.com/govind794"
                        className="github social">
                        <div data-tip="Github" data-for='tooltip' data-place='bottom'><FaGithub /></div>
                        <ReactTooltip />
                    </a>
                    <a href="https://twitter.com/Govind794"
                        className="twitter social">
                        <div data-tip="Twitter" data-for='tooltip' data-place='bottom'><FaTwitter /></div>
                        <ReactTooltip />
                    </a>
                    <a href="https://www.youtube.com/"
                        className="youtube social">
                        <div data-tip="youtube" data-for='tooltip' data-place='bottom'><FaYoutube /></div>
                        <ReactTooltip id="tooltip" />
                    </a>
                </p>
            </div>
        </div>
    );
}

export default ContactDetails;