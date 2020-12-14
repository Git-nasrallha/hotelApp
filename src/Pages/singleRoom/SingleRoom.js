import React,{useState,useContext} from 'react';
import "../../Components/singleRoom/singleRoom.css";
import {AppContext} from "../../contextApi/AppContext";
import Bannar from "../../Components/Bannar/Bannar";
import {StyleHero} from "../../StyleComponent/styleHero";
import RoomInfo from "../../Components/singleRoom/RoomInfo";
import SingleExtras from "../../Components/singleRoom/SingleExtras";

const SingleRoom = (props) => {
    const [slug]=useState(props.match.params.single);
    const {getRoom}=useContext(AppContext);
    const singleRoom=getRoom(slug);

    if(!singleRoom){
        return <div className="alert alert-danger text-center">
            <p> no sush room could be found </p>
        </div>
    }

    const {name,price,size,images,breakfast,capacity,description,extras,pets}=singleRoom;
    const [mainImage,...defaultImages]=images;
    //console.log(defaultImages)
    return (
        <div className="single-room-page">
            <StyleHero img={mainImage}>
                <Bannar 
                    title={`${name} room `}
                    buttonContent="back to room"
                    to="/rooms"
                />
            </StyleHero>
            <div className="container">
                <section className="rooms-images">
                    <div className="row">
                        {
                            defaultImages.map((img,index)=>{
                                return <div key={index} className="col-md-6 col-lg-4">
                                    <img  src={img} alt={img} className="roomImg img-fluid"/>
                                </div>
                            })
                        }
                    </div>
                </section>
                 <RoomInfo
                    description={description}
                    price={price}
                    size={size}
                    capacity={capacity}
                    breakfast={breakfast}
                    pets={pets}
                    
                 />

                 <SingleExtras extras={extras} />
            </div>
            
        </div>
    )
    
        
    
}
export default SingleRoom;
