import React from 'react'
import Hero from "../../Components/Hero/Hero";
import Bannar from "../../Components/Bannar/Bannar";
import RoomContents from '../../Components/roomContents/RoomContents';
import Breadcrab from "../../Components/breadcrumb/Breadcrumb";
import Footer from '../../Components/footer/Footer';
const Rooms = () => {
    return (
        <div className="rooms">
            <Hero hero="room-hero">
             <Breadcrab ActivePage="rooms" />   
            <Bannar
                    title="our rooms"
                    to="/"
                    buttonContent="back to home"
               />
            </Hero>
            <RoomContents />
            <Footer/>
        </div>
    )
}
export default Rooms;
