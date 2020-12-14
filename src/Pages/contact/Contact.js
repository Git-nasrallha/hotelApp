import React from 'react';
import "../../Components/contacteus/contacteUs.css";
import {StyledPageHero} from "../../StyleComponent/styleHero";
import contactbg from "../../images/contactbg.jpg";
import Breadcrumb from "../../Components/breadcrumb/Breadcrumb";
import BannarPage from "../../Components/Bannar/BannarPage";
import ContactForm from "../../Components/Forms/ContactForm";
import contactImg from "../../images/contactus.jpg";
import Footer from "../../Components/footer/Footer";
const Contact = () => {
    return (
        <div className="contact-page">
            <StyledPageHero img={contactbg}>
            <   Breadcrumb ActivePage="contact" />
               <BannarPage title="contact us" />
            </StyledPageHero>
            <div className="container">
                    <h2 className="contact_info"> Contact information</h2>
                <div className="row top-row">
                    
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <ul className="list-unstyled">
                                <li> <strong>Address:</strong> <span> 198 West 21th </span> </li>
                                <li> <strong>Street:</strong> <span>  Suite 721 New York </span> </li>
                                <li>  <span> NY 10016 </span> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <p> <strong>phone:</strong> <span>+ 1235 2355 98 </span> </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <p> <strong> Email:</strong> <span> info@yoursite.com </span> </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <p> <strong> website:</strong> <span> yoursite.com  </span> </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="contact-img">
                            <img src={contactImg} className="img-fluid" alt="contact" />
                           
                        </div>
                        
                    </div>
                    <div className="col-md-12 col-lg-6 ">
                       <ContactForm />
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Contact

