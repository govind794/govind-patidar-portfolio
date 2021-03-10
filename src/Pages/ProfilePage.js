import React from 'react';
import dp from '../images/govind.jpg';
import pdf from '../images/Govind.pdf';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import Fact from '../Components/Fact';
import { ImTree } from 'react-icons/im';
import { SiZapier } from 'react-icons/si';
import { IoSettingsOutline } from 'react-icons/io5';
import { GiAutoRepair, GiAutomaticSas } from 'react-icons/gi';
import { FaRecycle } from 'react-icons/fa';

function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="image-container">
                <div className="mask"></div>
                <div className="main-heading">
                    <h1>PR<span>O</span>FILE</h1>
                </div>
            </div>
            <div className="content-container">
                <div className="story">
                    <h2 className="small-heading">STORY OF GLORY</h2>
                    <div className="story-content">
                        <div className="pro-img">
                            <img src={dp} alt="about-img" />
                        </div>
                        <div className="story-text">
                            <h3>Journey Of Start</h3>
                            <p>
                                I am a Master in Computer Applications student at MNNIT Prayagraj and I am currently working
                                in Drivezy.com.
                            </p>
                            <p>
                                I have worked on a number of software testing projects in this company which helped me
                                familiarize myself with various programming languages. I am pretty much comfortable with
                                writing and designing the test cases, test preparation, and test plans.
                            </p>
                            <p>
                                I have hands-on
                                experience in creating and implementing automation projects in Python and Javascript. During
                                my experience, I implemented several automation projects ranging from parser for Python to a
                                Q/A platform. I also bring some experience of working in the field of Selenium webdriver, Rest
                                API, API Automation, Web Automation, Postman API Automation, and my latest project that API
                                automation in python. All of my work experience in the area of STLC, Agile Model, and
                                Automation has been majorly in Python. I am familiar with version control and Google
                                Colaboratory. I also have experience with Linux based systems (Ubuntu). I am fluent in both
                                spoken and written English. I am comfortable with making and delivering presentations as well.
                            </p>
                            {/* <a href="/" className="hire-me">Hire Me</a> */}
                            <a href="patidar.govind.794@gmail.com?subject=Suggestions" className="hire-me" target="_top">
                                Hire Me
                            </a>
                            <a href={pdf}>Download Resume</a>
                        </div>
                    </div>

                </div>
                <div className="serviceContainer">
                    <div className="service-title">
                        <h2 >WHAT CAN I DO?</h2>
                    </div>
                    <div className="service-grid">
                        <Services image={<IoSettingsOutline />} title={"Manual Testing"}
                            text={'When any tester, developer, or QA team begins a functional or performance testing process for the first time, they’ll likely start with manual testing.'} />
                        <Services image={<SiZapier />} title={"API Testing"}
                            text={'API TESTING is a software testing type that validates APIs. The purpose of API Testing is to check the functionality, reliability, performance, and security of the programming interfaces.'} />
                        <Services image={<GiAutoRepair />} title={"API Automation"}
                            text={'Web application testing, a software testing technique exclusively adopted to test the applications that are hosted on web in which the application interfaces and other functionalities are tested.'} />
                        <Services image={<GiAutomaticSas />} title={"Web Automation"}
                            text={'Web automation is the concept of letting software robots perform actions, tasks, and processes on a web browser or web application.'} />
                        <Services image={<FaRecycle />} title={"SDLC"}
                            text={'SDLC is an abbreviation of Software Development Life Cycle. SDLC is series of steps that offers a defined model for the development and lifecycle management of an application.'} />
                        <Services image={<ImTree />} title={"DevOps"}
                            text={'DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity.'} />
                    </div>
                </div>

                <Fact />

                <Footer />
            </div>

        </div>
    );
}

export default ProfilePage;