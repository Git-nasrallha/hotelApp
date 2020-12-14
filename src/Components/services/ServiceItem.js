import React from 'react'

const ServiceItem = (props) => {
    const {service}=props;
    return (
        <>
           <div className="card" style={{width:"100%" }}>
                {service.icon}
                <div className="card-body">
                    <h5 className="card-title"> {service.title} </h5>
                    <p className="card-text"> {service.discription} </p>
                </div>
            </div>
        </>
    )
}

export default ServiceItem
