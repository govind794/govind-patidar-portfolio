import React from 'react';

function Experience() {
    return (
        <div className="experience">
            <h2 className="small-heading">EXPERIENCE</h2>
            <div
                className="experience-container">
                <div className="item">
                    <div className="bullet"></div>
                    <div className="experience-content">
                        <h3>Automation Engineer
                            <span> / Jun 2020 - Sep 2020<br />
                                API Automation through Postman
                            </span>
                        </h3>
                        <p>
                            Documentation at a Collection and its request level in Postman.
                            Created and executed test cases under a test suite and have taken respective actions.
                            Have a proper understanding in dealing with Environment and global level variables for collection.
                            To prevent human error and for flawless testing, I have automated unit tests, functional tests, integration tests, regression tests, and mock tests, etc
                        </p>
                    </div>
                </div>

                <div className="item">
                    <div className="bullet"></div>
                    <div className="experience-content">
                        <h3>Automation Engineer
                            <span> / April 2018 - Dec 2019<br />
                                Drivezy (Web Automation)
                            </span>
                        </h3>
                        <p>
                            Create manual test cases in Zephyr.Implemented automation using Selenium Webdriver, Python(Pyunit).
                            Extensively automated regression and functional test suites using Selenium WebDriver.
                            Performed Defect Tracking and Management in Jenkins.
                            Actively participated in writing Test Plan and Test cases and the creation of the automation framework.
                            Involved in the creation of an automation framework using selenium
                        </p>
                    </div>
                </div>

                <div className="item">
                    <div className="bullet"></div>
                    <div className="experience-content">
                        <h3>Manual Tester
                            <span> / May 2017 - April 2018<br />
                                Software Development Life Cycle
                            </span>
                        </h3>
                        <p>
                            SDLC is a framework that defines the different steps or processes in Software Development Cycle.
                            Software Development Life Cycle (SDLC) is also called as Application Development Life Cycle.
                            The different steps involved in the Software Development Life Cycle are Planning, Analysis,
                            Design, Implementation, and Maintenance. The Software Development Life Cycle process can be
                            applied both to the hardware or software components or configuration to define its scope and lifecycle process.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Experience;