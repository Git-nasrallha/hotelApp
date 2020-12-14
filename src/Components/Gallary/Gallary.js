import React from 'react';
import "./Gallary.css";
import Title from "../sectionTitle/Title";
import gallary1 from "../../images/room-1.jpeg";
import gallary2 from "../../images/room-2.jpeg";
import gallary3 from "../../images/room-3.jpeg";
import gallary4 from "../../images/room-4.jpeg";
import gallary5 from "../../images/room-5.jpeg";
import gallary6 from "../../images/room-6.jpeg";

const Gallary = () => {
    return (
        <section className="gallary">
            <Title header="Our Gallary" />
            <div className="container">
               <div className="row">
                   <div className="col-md-6 col-lg-4">
                       <div className="gallary-img">
                            <a data-fancybox="gallery"  href={gallary1}><img src={gallary1} className='img-fluid' alt="gallary"/></a>
                       </div>
                   </div>
                   <div className="col-md-6 col-lg-4">
                       <div className="gallary-img">
                            <a data-fancybox="gallery" href={gallary2}><img src={gallary2} className='img-fluid' alt="gallary"/></a>
                        </div>
                   </div>
                   <div className="col-md-6 col-lg-4">
                       <div className="gallary-img">
                            <a data-fancybox="gallery" href={gallary3}><img src={gallary3} className='img-fluid' alt="gallary"/></a>
                        </div>
                   </div>
                   <div className="col-md-6 col-lg-4">
                       <div className="gallary-img">
                            <a data-fancybox="gallery" href={gallary4}><img src={gallary4} className='img-fluid' alt="gallary"/></a>
                        </div>
                   </div>
                   <div className="col-md-6 col-lg-4">
                       <div className="gallary-img">
                            <a data-fancybox="gallery" href={gallary5}><img src={gallary5} className='img-fluid' alt="gallary"/></a>
                        </div>
                   </div>
                   <div className="col-md-6 col-lg-4">
                       <div className="gallary-img">
                            <a data-fancybox="gallery" href={gallary6}><img src={gallary6} className='img-fluid' alt="gallary"/></a>
                        </div>
                   </div>
               </div>
            </div>
        </section>
    )
}

export default Gallary
