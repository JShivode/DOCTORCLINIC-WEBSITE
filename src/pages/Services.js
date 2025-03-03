import React from "react";
import './Services.css'; // Make sure to link the CSS file
import Banner from "../Components/Banner/Banner";
import dentalImage from '../Assets/dental.jpg'; // Ensure the path matches the location of your images
import cardiologyImage from '../Assets/cardiology.jpg';

const Services = () => {
    return (
        <div>
            <Banner title="Our Services" smtitle="services" />
            <section className="service-section">
                <div className="container">
                    <div className="row">
                        {/* Dental Care */}
                        <div className="col-md-4 service-item">
                            <img src={dentalImage} alt="Dental Care"/>
                            <h3>Dental Care</h3>
                            <p>Comprehensive dental care services from routine check-ups to advanced surgeries.</p>
                        </div>
                        {/* Cardiology */}
                        <div className="col-md-4 service-item">
                            <img src={cardiologyImage} alt="Cardiology"/>
                            <h3>Cardiology</h3>
                            <p>Expert cardiovascular care with advanced diagnostic and treatment services.</p>
                        </div>
                        {/* More services can be added here */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
