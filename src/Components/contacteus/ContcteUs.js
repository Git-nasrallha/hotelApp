import React from 'react';
import "./contacteUs.css";
import Title from '../sectionTitle/Title'
import ContactForm from "../Forms/ContactForm";
import contactImg from "../../images/contactus.jpg";
import {ButtonLink} from "../Buttons/Button";
import Fade from 'react-reveal/Fade';
const ContcteUs = () => {


    return (
        <section className="contact-us">
            <Title header="contact us"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                     <Fade left>
                        <div className="contact-img">
                            <img src={contactImg} className="img-fluid" alt="contact-us" />
                            <ButtonLink to="/contact" >More Information</ButtonLink>
                        </div>
                     </Fade>
                    </div>
                    <div className="col-md-12 col-lg-6 ">
                        <Fade right>
                            <ContactForm />
                        </Fade>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContcteUs
