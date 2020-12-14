import React,{useState,useEffect} from 'react';
import axios from "axios";
import "../../Components/services/Services.css";
import {StyledPageHero} from "../../StyleComponent/styleHero";
import servicebg from "../../images/services/service-bg.jpg";
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BannarPage from "../../Components/Bannar/BannarPage";
import Services from "../../Components/services/Services";
import PulsServices from "../../Components/services/PulsServices";
import Footer from "../../Components/footer/Footer";
const Service = () => {
    const [pulsServices,setPulsServices]=useState([]);

    useEffect(()=>{
        axios.get("/json/data.json").then(res=>{
            const allServices=res.data.services;
            setPulsServices(allServices);
        })

    },[]);

    return (
        <div className="service-page">
           <StyledPageHero  img={servicebg}>
               <Breadcrumb ActivePage="services" />
               <BannarPage title="Welcom in our hotel" />
           </StyledPageHero>
           <Services />
            <div className="container">
                <div className="service-content">
                    <div className="row">
                        {pulsServices && pulsServices.map(ser=>{
                            return <div key={ser.id} className="col-md-6 col-lg-4">
                                <PulsServices services={ser}/>
                            </div>
                        })
                            
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Service
