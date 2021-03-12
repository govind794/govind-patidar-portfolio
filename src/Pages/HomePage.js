import React from 'react';
import ReactTooltip from "react-tooltip";
import { NavLink } from 'react-router-dom';
import { FaGithubSquare, FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare, FaUser, FaGraduationCap, FaBriefcase, FaEnvelope } from "react-icons/fa";

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
                <NavLink to='/' className="nav-link">
                    <div className="introduction" style={{ width: open ? '100%' : '50%', height: open ? '50%' : '100%', left: open ? '-940px' : '0' }}>
                        <img alt="home-dp" src={home_dp} style={{ width: open ? '100%' : '100%', height: open ? 'auto' : '100%' }} />
                        <div className="mask"></div>
                        <div className="intro-content">
                            <h1>HELLO<br /> I'M <span>GOVIND</span> PATIDAR</h1>
                            <h2>AUTOMATION ENGINEER</h2>
                            <p className="social-media">
                                <a href="https://www.youtube.com/"
                                    className="youtube social">
                                    <div data-tip="youtube" data-for='tooltip' data-place='bottom'><FaYoutubeSquare /></div>
                                    <ReactTooltip id="tooltip" />
                                </a>
                                <a href="https://www.facebook.com/"
                                    className="facebook social">
                                    <div data-tip="Facebook" data-for='tooltip' data-place='bottom'><FaFacebookSquare /></div>
                                    <ReactTooltip />
                                </a>

                                <a href="https://twitter.com/Govind794"
                                    className="twitter social">
                                    <div data-tip="Twitter" data-for='tooltip' data-place='bottom'><FaTwitterSquare /></div>
                                    <ReactTooltip />
                                </a>
                                <a href="https://github.com/govind794"
                                    className="github social">
                                    <div data-tip="Github" data-for='tooltip' data-place='bottom'><FaGithubSquare /></div>
                                    <ReactTooltip />
                                </a>
                            </p>
                        </div>
                    </div>
                </NavLink>
                <div className="menu" style={{ width: open ? '100%' : '50%', height: open ? '50%' : '100%', left: open ? '940px' : '0' }}
                    onClick={menuClick}>
                    <NavLink to='/profile' className="nav-link">
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
                    <NavLink to='/resume' className="nav-link">
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
                    <NavLink to='/portfolio' className="nav-link">
                        <div className="portfolio-btn">
                            <img alt="portfolio_bg" src={portfolio_bg} />
                            <div className="mask"></div>
                            <div className="heading">
                                <i><FaBriefcase /></i>
                                <h2>PORT<span>F</span>OLIO</h2>
                                <h3>Have a spoon of my work.</h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/contact' className="nav-link">
                        <div className="contact-btn">
                            <img alt="contact_bg" src={contact_bg} />
                            <div className="mask"></div>
                            <div className="heading">
                                <i><FaEnvelope /></i>
                                <h2>CO<span>N</span>TACT</h2>
                                <h3>Say hello or find me.</h3>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="close-btn" onClick={menuClick}></div>
        </div>
    )
}
export default HomePage;