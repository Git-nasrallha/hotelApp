import React,{useContext} from 'react'
import "./Services.css";
import Title from '../sectionTitle/Title'
import { AppContext } from '../../contextApi/AppContext';
import ServiceItem from './ServiceItem';

const Services = () => {
    const {services}=useContext(AppContext);
    
    return (
        <section className="sercives">
            <Title header="services"/>
           <div className="services-content">
               <div className="container">
                   <div className="row">
                       {services && services.map((service,index)=>{
                           return(
                               <div key={index} className=" col-sm-12 col-md-6 col-lg-3">
                                   <ServiceItem service={service} />
                               </div>
                           )
                       })}
                   </div>
               </div>
           </div>    
        </section>
    )
}

export default Services
