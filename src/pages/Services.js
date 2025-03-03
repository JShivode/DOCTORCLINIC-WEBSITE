import React from "react";
import './Services.css'; // Make sure to link the CSS file
import Banner from "../Components/Banner/Banner";

const Services = () => {
    return (
        <div>
            <Banner title="Our Services" smtitle="services" />
            <section className="service-section">
                <div className="container">
                    <div className="row">
                        {/* Example of a single service */}
                        <div className="col-md-4 service-item">
                            <h3>Dental Care</h3>
                            <p>Provide comprehensive dental care services, from routine check-ups to advanced surgeries.</p>
                        </div>
                        {/* Add more services as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
