import React,{useContext} from 'react'
import Title from "../sectionTitle/Title";
import {AppContext} from "../../contextApi/AppContext";

    //get uniqe value
    export const getUniqe=(items,value)=>{
        return [...new Set(items.map(item=>item[value]))]
    }

const RoomFilter = ({rooms}) => {
    const filterData=useContext(AppContext);
    const {type,capacity, price,minPrice,maxPrice,minSize,maxSize,breakfast,pets,handelChange}=filterData;
    //get type
   let Types=getUniqe(rooms,"type");
       Types=['all',...Types];
        Types=Types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    }) 
        
    //get capacity
    let pepole=getUniqe(rooms,"capacity"); 
    pepole=pepole.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="room-filter">
            <Title header="searsh rooms" />
            <div className="row">
               {/*start room type*/ }
               <div className="col-md-2 ">
                   
                        <div className="form-group">
                            <label htmlFor="type">Room Type</label>
                        </div>
                        <select className="custom-select custom-select-sm form-control"
                            name="type" id="type" value={type} onChange={handelChange}
                        >
                          {Types}
                        </select>
                    
                </div>
                {/*end room type*/ }

                {/*start geuest*/ }
               <div className="col-md-2">
                   
                        <div className="form-group">
                            <label htmlFor="pepole">Geuest</label>
                        </div>
                        <select className="custom-select custom-select-sm form-control"
                            name="capacity" id="pepole" value={capacity} onChange={handelChange}
                        >
                            {pepole}   
                        </select>
                    
                </div>
                {/*end geuest*/ }

                {/*start price filter*/}
                <div className="col-md-3">
                  
                    <label htmlFor="customRange2"> {`Room Price $ ${price}`} </label>
                        <input type="range" className="custom-range " min={minPrice} max={maxPrice} id="customRange2"
                            value={price} onChange={handelChange} name="price"
                        />
                   
                </div>
                {/*end price filter*/} 

                {/*end size filter*/} 
                <div className="col-md-2">
                   
                        <div className="form-group">
                            <label htmlFor="size">Room Size</label>
                            <div className="d-flex justify-content-around size">
                                <input id="size" type="number" min={minSize} value={minSize} onChange={handelChange} name="minSize" className="form-control"/>
                                <input id="size" type="number" max={minSize} value={maxSize} onChange={handelChange} name="maxSize" className="form-control"/>
                            </div>
                        </div>
                    
                </div>
                {/*end size filter*/} 

                {/*end exast filter*/} 
                <div className="col-md-2 extres">
                  
                    <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={breakfast} id="defaultCheck1"
                                name="breakfast" onChange={handelChange}  checked={breakfast}
                            />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                breakfast
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={pets} id="defaultCheck2"
                                name="pets" onChange={handelChange} checked={pets}
                            />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                pets
                            </label>
                        </div>
                   
                </div>
                {/*end exast filter*/} 
            </div>
        </section>
    )
}

export default RoomFilter
