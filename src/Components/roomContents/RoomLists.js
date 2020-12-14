import React from 'react'
import Room from "../featuredRom/Room";


const RoomLists = (props) => {
    const {rooms}=props;
    
    if(rooms.length===0){
        return <div className="alert alert-danger">
            <h3 className="text-center">unfortunately no rooms matced ypor search parameters </h3>
        </div>
    }else{
        return  <section className="room-lists">
            <div className="row">
            {
                rooms.map((item)=>{
                    return <div key={item.id} className="col-md-6 col-lg-3">
                            <Room room={item}/>
                    </div> 
                })
            }
            </div>
        </section>
    }
    
}


export default RoomLists;
