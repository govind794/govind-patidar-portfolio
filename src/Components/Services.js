import React from 'react';

function Services({ image, title, text }) {
    return (
        <div className="services-container">
            <div className="services">
                <div className="service-contant">
                    <i>{image}</i>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Services;