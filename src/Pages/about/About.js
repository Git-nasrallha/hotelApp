import React from 'react';
import "../../Components/About/About.css";
import {StyledPageHero} from "../../StyleComponent/styleHero";
import Breadcrumb from "../../Components/breadcrumb/Breadcrumb";
import BannarPage from "../../Components/Bannar/BannarPage";
import AboutUs from "../../Components/About/AboutUs";
import Testimonial from "../../Components/testimonials/Testimonial";
import aboutimg from "../../images/aboutbg.jpg";
import HotelStaff from '../../Components/About/HotelStaff';
import Footer from "../../Components/footer/Footer";

const About = () => {
    return (
        <div className="about-page">
            <StyledPageHero img={aboutimg} >
                <Breadcrumb ActivePage="about us"/>
                <BannarPage 
                    title="about our hotel"
                />
            </StyledPageHero>
            
            <AboutUs 
                topheader="
                Suscipit libero pretium nullam potenti. Interdum, blandit phasellus 
                consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus 
                sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. 
                Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
                "
                description1="Suscipit libero pretium nullam potenti. Interdum, blandit phasellus 
                consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus 
                sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. 
                Dapibus lorem feugiat facilisi faucibus et. Rhoncus."

                description2="Sydney College in Virginia, looked up one of the more obscure Latin words, 
                                consectetur, from a Lorem Ipsum passage,"
                
            />
            <HotelStaff />    

            <Testimonial />
            <Footer />
        </div>
    )
}

export default About
