import React from 'react';
import "./footer.css";
import {Link} from "react-router-dom";
import {FaPhoneAlt,FaEnvelope,FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
import {MdPlace} from "react-icons/md";
import { ButtonLink } from '../Buttons/Button';
import {TiArrowSortedUp} from "react-icons/ti";


const Footer = () => {
 
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="foot-left">
                            <h3>beach restore </h3>
                            <p>
                                Far far away, behind the word mountains, far from 
                                the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul className="list-unstyled">
                                <li> <Link to="/"> <FaFacebook/> </Link> </li>
                                <li> <Link to="/"> <FaTwitter/> </Link> </li>
                                <li> <Link to="/"> <FaInstagram/> </Link> </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="foot-midel">
                            <h3> useful Links </h3>
                            <ul className="list-unstyled">
                                <li> <Link to="/">Home</Link> </li>
                                <li> <Link to="/about">About</Link> </li>
                                <li> <Link to="/services">Services</Link> </li>
                                <li> <Link to="/contact">Contact</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="foot-right">
                            <h3> Have a Questions?</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <MdPlace/>
                                      203 Fake St. Mountain View, San<br/>
                                       <span>  Francisco,  California, USA</span>
                                     
                                </li>
                                <li> <FaPhoneAlt/> +2 392 3929 210 </li>
                                <li> <FaEnvelope/> info@yourdomain.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" footer-bottom text-center">
                    <ButtonLink to="/bookroom" >Book Room</ButtonLink>
                   <p>  Copyright &copy; 2020 All rights reserved </p>
                   
                </div>

                <div id="button-up" className="btn-up">
                    <TiArrowSortedUp/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
