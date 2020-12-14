import React,{ useContext} from 'react';
import { AppContext } from '../../contextApi/AppContext';
import Title from "../sectionTitle/Title";
import "./featuredRoom.css";
import Room from './Room';
import Loading from '../spinner/Loading';

const FeaturedRom = () => {
    const {loading,featuredRooms}=useContext(AppContext); 
      
    const fetuesRooms=featuredRooms.map((room)=>{
        return <div key={room.id} className="col-md-4">
                    <Room room={room}/>
            </div>
    })

    return (
        <section className="featured-room">
            <div className="container">
                <Title header="featured rooms"/>
                <div className="row">
                    {loading ?<Loading />:fetuesRooms}
                </div>
            </div>
        </section>
    )
}

export default FeaturedRom
