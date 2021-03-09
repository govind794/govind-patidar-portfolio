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
                <Education />
                <Experience />
                <h2 className="skill-small-heading">SKILLS</h2>
                <div className="skills">
                    <Skills skill={'Selenium'} progress={'75%'} width={'75%'} />
                    <Skills skill={'Javascript'} progress={'50%'} width={'50%'} />
                    <Skills skill={'Python'} progress={'50%'} width={'50%'} />
                    <Skills skill={'Javascript'} progress={'50%'} width={'50%'} />
                    <Skills skill={'Javascript'} progress={'50%'} width={'50%'} />
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default ResumePage;