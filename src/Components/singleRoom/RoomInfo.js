import React from 'react'

const RoomInfo = (props) => {
    const {description,price,size,capacity,pets,breakfast}=props
    return (
        <section className="room-info-details">
            <div className="row">
                <div className="col-md-7 col-lg-8">
                    <article className="room-details">
                        <h3>Details</h3>
                        <p className="lead">
                            {description}
                        </p>
                    </article> 
                </div>    

                <div className="col-md-5 col-lg-4">
                    <div className="room-info">
                        <h3>Info</h3>
                        <ul className="list-unstyled">
                            <li> <strong>price:</strong>  <span>$ {price} </span> </li>
                            <li> <strong>size:</strong>  <span>$ {size} SQFT </span> </li>
                            <li> <strong>max capacity:</strong>  
                                {capacity>1 ?<span> ${capacity} Pepole</span>:<span>${capacity} person</span> }
                             </li>
                            <li>  
                                {  pets? <span> Peta Allowed </span> :<span> Pets Not Allowed </span> }
                             </li>
                            <li> 
                                { breakfast ? <span>free breakfast included</span>: <span>No breakfast included</span> }
                                 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomInfo
