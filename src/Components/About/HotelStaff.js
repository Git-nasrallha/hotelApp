import React,{useState} from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Title from '../sectionTitle/Title';

import managerImg from "../../images/staff/manger.jpg";
import doctorImg from "../../images/staff/doctor-2.jpg";
import chefImg from "../../images/staff/chef.jpg";
import garsonstaffImg from "../../images/staff/garsonstaff.jpg";
import resptionestImg from "../../images/staff/resptionest.jpg";
import cleanerImg from "../../images/staff/cleaner.jpg";

const TestHotleItem=({img,description,name})=>{
    return(
        <div className="item">
           <div className="media">
                <img src={img} className="mr-3" alt="...img"/>
                <div className="media-body">
                    <h5 className="mt-0">{name} </h5>
                    {description}
                </div>
            </div>
        </div>
    )
}

const HotelStaff = () => {
    const [responsive]=useState(
            {
                0: {
                    items: 1,
                },
                450: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        
    )

    return (
        <section className="hotel-staff">
            <Title header="hotel staff"/>
            <div className='container'>
            <OwlCarousel
                    className="owl-theme"
                    loop={true}
                    dots={false}
                    
                    autoplay={true}
                    margin={10}
                    items={3}
                    responsive={responsive}    
                    autoplayTimeout={2000}
                >
                    <TestHotleItem
                        img={managerImg}
                        name="manager"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    />
                    <TestHotleItem
                        img={doctorImg}
                        name="doctor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    />
                    <TestHotleItem
                        img={chefImg}
                        name="chef"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    />
                    <TestHotleItem
                        img={resptionestImg}
                        name="Receptionist"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    />
                    <TestHotleItem
                        img={garsonstaffImg}
                        name="Barkeepstaff"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    />
                    <TestHotleItem
                        img={cleanerImg}
                        name="cleaner"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
                    />


                </OwlCarousel>    
            </div>
        </section >
    )
}

export default HotelStaff
