import React from "react";
import Banner from "../Components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import './Contact.css';

const Contact =()=>{
    return(
        <>
            <Banner title="Contact" smtitle="contact"/>
            <section className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <form>
                                <div className="form-control">
                                    <input placeholder="Your Name"/>
                                </div>
                                <div className="form-control">
                                    <input placeholder="Your Email"/>
                                </div>
                                <div className="form-control">
                                    <input placeholder="Phone Number"/>
                                </div>
                                <select>
                                    <option>Select Department</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <div className="form-control">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <button>Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="side">
                                <div className="overlay">
                                    <h3>Contact Us For Any Informations</h3>
                                    <li> <FontAwesomeIcon icon={faMap}/> Location</li>
                                    <hr/>
                                    <p>Address</p>
                                    <li><FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
                                    <hr/>
                                    <p>doconcall@gmail.com</p>
                                    <p>01233334455</p>
                                    <li><FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faGlobe}/></li>
                                        <li><FontAwesomeIcon icon={faGlobe}/></li>
                                        <li><FontAwesomeIcon icon={faGlobe}/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Contact;