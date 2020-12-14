import React from 'react';
import "./featuredRoom.css";
import { ButtonLink } from '../Buttons/Button';
const Room = (props) => {
    const {room}=props;
    const {name,slug,price,images}=room;
    return (
        <div className="card" style={{width:"100%"}}>
            <div className="feature-room-overlay">
                <ButtonLink to={`/rooms/${slug}`}>Features</ButtonLink>
            </div>
            <div className="room-price">
                <h6>$ {price}</h6>
                <small>per night</small>
            </div>
            <img src={images[0]} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {name} </h5>
            </div>
        </div>
    )
}

export default Room
