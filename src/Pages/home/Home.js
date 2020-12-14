import React from 'react';
import "./script";
import {ButtonLink} from "../../Components/Buttons/Button";
import Hero from "../../Components/Hero/Hero";
import Bannar from  "../../Components/Bannar/Bannar";
import Services from '../../Components/services/Services';
import FeaturedRom from '../../Components/featuredRom/FeaturedRom';
import AboutUs from '../../Components/About/AboutUs';
import Gallary from '../../Components/Gallary/Gallary';
import Testimonial from "../../Components/testimonials/Testimonial";
import ContcteUs from "../../Components/contacteus/ContcteUs";
import Footer from "../../Components/footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Hero >
               <Bannar
                    title="luxurious rooms"
                    subtitle="deluxe rooms starting at $299"
                    to="/rooms"
                    buttonContent="our rooms"
               />
            </Hero>
            <AboutUs
                description1="Suscipit libero pretium nullam potenti. Interdum, blandit 
                phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
                 sollicitudin pede nam maecenas, dolor sem. Neque 
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus."

                description2="Sydney College in Virginia, looked up one of the more obscure Latin words, 
                            consectetur, from a Lorem Ipsum passage,"
                button={<ButtonLink to="/about">Read Romer</ButtonLink>}
            />
            <Services />
            <FeaturedRom />
            <Gallary/>
            <Testimonial />
            <ContcteUs />
            <Footer />
        </div>
    )
}
export default Home;
