import React from 'react';
import "./Testimonial.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Title from '../sectionTitle/Title';

import img1 from "../../images/testimonial/img1.jpg";
import img2 from "../../images/testimonial/img2.jpg";
import img3 from "../../images/testimonial/img3.jpg";
import img5 from "../../images/testimonial/img5.jpg";


const TestItem=({img,description,name})=>{
    return(
        <div className="item">
            <div className="card" >
                <img src={img} className="card-img-top" alt="testimonial"/>
                <div className="card-body">
                    <h5 className="card-title"> {name} </h5>
                    <p className="card-text"> {description} </p>
                </div>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (
        <section className="testimonial">
            <Title header="Happy Clients  Feedbacks"/>
            <div className="container">        
                <OwlCarousel
                    className="owl-theme"
                    loop={true}
                    autoplay={true}
                    margin={10}
                    nav
                    items={1}
                    center={true}
                    autoplayTimeout={6000}
                >
                    <TestItem 
                        img={img1}
                        name="Mohamed"
                        description="It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less normal distribution of letters,."
                    />

                    <TestItem 
                        img={img2}
                        name="maria"
                        description="It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less normal distribution of letters,."
                    />

                    <TestItem 
                        img={img3}
                        name="said"
                        description="It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less normal distribution of letters,."
                    />

                    <TestItem 
                        img={img5}
                        name="jone due"
                        description="It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less normal distribution of letters,."
                    />
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Testimonial
