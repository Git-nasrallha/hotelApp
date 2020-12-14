import React,{useContext} from 'react';
import "./rooms.css";
import {AppContext} from "../../contextApi/AppContext";
import RoomFilter from "./RoomFilter";
import RoomLists from "./RoomLists";
import Loading from '../spinner/Loading';

const RoomContents = () => {
    const data=useContext(AppContext);
    if(!data){
        return <div className="alert alert-danger">No Data</div>
    }else{
        const {loading,sortRoom,rooms}=data;
        if(loading){
            return <Loading />
        }
        return (
            <div className="room-content">
               <div className="container">
                   <RoomFilter rooms={rooms} />
                   <RoomLists rooms={sortRoom}/>
               </div>
            </div>
        )
    }
   
}

export default RoomContents;
