import React from 'react';

function Education({ school, year, description }) {
    return (
        <div className="education">
            <div className="education-container">
                <div className="item">
                    <div className="bullet"></div>
                    <div className="education-content">
                        <h3>{school}<span> / {year}</span></h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Education;