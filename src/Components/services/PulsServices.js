import React from 'react';
import "./Services.css";

const PulsServices = (props) => {
    const {services}=props;
    return (
        <>
            <div className="media">
                <img src={services.image} className="mr-3 img-thumbnail" alt="..."/>
                <div className="media-body">
                    <h5 className="mt-0"> {services.title} </h5>
                    {services.description}
                </div>
            </div>
        </>
    )
}

export default PulsServices
