import React from 'react';
import ReactTooltip from "react-tooltip";
import { NavLink, Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube, FaUser, FaGraduationCap, FaBriefcase, FaEnvelope } from "react-icons/fa";

import home_dp from '../images/01.png';
import profile_bg from '../images/menu/11.png';
import resume_bg from '../images/menu/12.png';
import portfolio_bg from '../images/menu/13.png';
import contact_bg from '../images/menu/14.png';
import { useState } from "react";

function HomePage() {
    const [open, setOpen] = useState(false);
    const menuClick = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className="home-page" style={{ visibility: open ? 'hidden' : 'visible' }}>
                <div className="introduction" style={{ left: open ? '-940px' : '0' }}>
                    <img alt="home-dp" src={home_dp} style={{ width: open ? '100%' : '100%', height: open ? 'auto' : '100%' }} />
                    <div className="mask"></div>
                    <div className="intro-content">
                        <h1>HELLO<br /> I'M <span>GOVIND</span> PATIDAR</h1>
                        <h2>AUTOMATION ENGINEER</h2>
                        <p className="social-media">
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
                <div className="menu" style={{ left: open ? '940px' : '0' }}
                    onClick={menuClick}>
                    <NavLink to='/govind-patidar-portfolio/profile' className="nav-link">
                        <div className="profile-btn">
                            <img alt="profile_bg" src={profile_bg} />
                            <div className="mask"></div>
                            <div className="heading">
                                <i><FaUser /></i>
                                <div className="text">
                                    <h2>PR<span>O</span>FILE</h2>
                                    <h3>Some words about me.</h3>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/govind-patidar-portfolio/resume' className="nav-link">
                        <div className="resume-btn">
                            <img alt="resume_bg" src={resume_bg} />
                            <div className="mask"></div>
                            <div className="heading">
                                <i><FaGraduationCap /></i>
                                <div className="text">
                                    <h2>RE<span>S</span>UME</h2>
                                    <h3>Something about my experience and skills.</h3>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/govind-patidar-portfolio/portfolio' className="nav-link">
                        <div className="portfolio-btn">
                            <img alt="portfolio_bg" src={portfolio_bg} />
                            <div className="mask"></div>
                            <div className="heading">
                                <i><FaBriefcase /></i>
                                <div className="text">
                                    <h2>PORT<span>F</span>OLIO</h2>
                                    <h3>Have a spoon of my work.</h3>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/govind-patidar-portfolio/contact' className="nav-link">
                        <div className="contact-btn">
                            <img alt="contact_bg" src={contact_bg} />
                            <div className="mask"></div>
                            <div className="heading">
                                <i><FaEnvelope /></i>
                                <div className="text">
                                    <h2>CO<span>N</span>TACT</h2>
                                    <h3>Say hello or find me.</h3>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="close-btn" onClick={menuClick}></div>
        </div >
    )
}
export default HomePage;