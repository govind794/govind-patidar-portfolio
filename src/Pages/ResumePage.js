import React from 'react';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';

function ResumePage() {
    return (
        <div className="resume-page">
            <div className="image-container">
                <div className="mask"></div>
                <div className="main-heading">
                    <h1>RE<span>S</span>UME</h1>
                </div>
            </div>
            <div className="content-container">
                <h2 className="edu-small-heading">EDUCATION</h2>
                <Education
                    school="Motilal Nehru National Institute Of Technology, Prayagraj"
                    year="July 2014 - May 2017"
                    description="This prepares the students for the industry requirements so that they can flourish in
                                the corporate IT Sector. MCA courses are more focused on implementation of Programming
                                Languages, IT Skills and other such concepts with a detailed curriculum that stretches to
                                five semesters. The sixth and final semester is dedicated to industrial training/ internship and projects."
                />

                <Education
                    school="Christian Eminent College DAVV, Indore (M.P.)"
                    year="July 2011 - May 2014"
                    description="Bachelors in Computer Application (BCA) is a three-year undergraduate degree course for
                                students who wish to delve into the world of Computer languages. The BCA course is
                                one of the most popular options to get started with a career in Information Technology."
                />

                <Education
                    school="K V S H S School, Nalkheda, Shajapur, 12th"
                    year="July 2009 - May 2011"
                    description="MPC Group is a part of Science stream. This group is also known as PCM Group.
                                It stands for Physics, Chemistry and Mathematics – the subjects chosen by a
                                student in 12th Science stream."
                />

                <Experience />
                {/* <h2 className="exp-small-heading">EXPERIENCE</h2> */}
                {/* <Experience
                    school="Automation Engineer"
                    year="Jun 2020 - Sep 2020"
                    title="API Automation through Postman"
                    description="Documentation at a Collection and its request level in Postman.
                                Created and executed test cases under a test suite and have taken respective actions.
                                Have a proper understanding in dealing with Environment and global level variables for collection.
                                To prevent human error and for flawless testing, I have automated unit tests, functional tests, 
                                integration tests, regression tests, and mock tests, etc"
                />

                <Experience
                    school="Automation Engineer"
                    year="April 2018 - Dec 2019"
                    title="Drivezy (Web Automation)"
                    description="Create manual test cases in Zephyr.Implemented automation using Selenium Webdriver, Python(Pyunit).
                                Extensively automated regression and functional test suites using Selenium WebDriver.
                                Performed Defect Tracking and Management in Jenkins.
                                Actively participated in writing Test Plan and Test cases and the creation of the automation framework.
                                Involved in the creation of an automation framework using selenium"
                />

                <Experience
                    school="Manual Tester"
                    year="May 2017 - April 2018"
                    title="Software Development Life Cycle"
                    description="SDLC is a framework that defines the different steps or processes in Software Development Cycle.
                                Software Development Life Cycle (SDLC) is also called as Application Development Life Cycle.
                                The different steps involved in the Software Development Life Cycle are Planning, Analysis,
                                Design, Implementation, and Maintenance. The Software Development Life Cycle process can be
                                applied both to the hardware or software components or configuration to define its scope and lifecycle process."
                /> */}

                <h2 className="skill-small-heading">SKILLS</h2>
                <div className="skills">
                    <Skills skill={'Selenium'} progress={'75%'} width={'75%'} />
                    <Skills skill={'Javascript'} progress={'50%'} width={'50%'} />
                    <Skills skill={'Python'} progress={'50%'} width={'50%'} />
                    <Skills skill={'Rest API'} progress={'75%'} width={'75%'} />
                    <Skills skill={'API Testing'} progress={'75%'} width={'75%'} />
                    <Skills skill={'Webdriver IO'} progress={'75%'} width={'75%'} />
                    <Skills skill={'Jenkins'} progress={'50%'} width={'50%'} />
                    <Skills skill={'DevOps'} progress={'75%'} width={'75%'} />
                    <Skills skill={'Jira'} progress={'75%'} width={'75%'} />
                    <Skills skill={'Git'} progress={'75%'} width={'75%'} />
                    <Skills skill={'Docker'} progress={'50%'} width={'50%'} />

                </div>
                <Footer />
            </div>
        </div>
    );
}
export default ResumePage;