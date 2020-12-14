import React from 'react';
import "./About.css";
import {AiFillPlayCircle} from "react-icons/ai";
import Title from "../sectionTitle/Title";


const AboutUs = (props) => {
    const {description1,description2,button,topheader}=props
    return (
        <section className="about-us">
            <Title header="about us"/>
            <div className="container">
                <div className="topheader text-center">
                    <p className="lead"> {topheader} </p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-us-content">
                            <h2>
                                Welcome <span>To </span>our hotel
                            </h2>
                            <p> {description1} </p>
                             <p> {description2} </p>   

                            {button}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-us-right">
                            <a href="https://youtu.be/rMxTreSFMgE" data-fancybox data-caption="Beach Restort">
                                    <AiFillPlayCircle />
                            </a>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
        
      
    )
}

export default AboutUs
