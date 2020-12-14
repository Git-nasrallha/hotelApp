import React, { createContext ,useState,useEffect} from "react";
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa";
import items from "../data";
export const AppContext=createContext();

export const ThemeProvider=(props)=>{
    const [INIT_STATE,setIinitState]=useState({
        services:[
            {
                icon:<FaCocktail />,
                title:"free FaCocktails",
                discription:"lorem ipsum dolor sit amet constecteture adipsicing elit magni,corporis!"
            },
            {
                icon:<FaHiking />,
                title:"endless FaHiking",
                discription:"lorem ipsum dolor sit amet constecteture adipsicing elit magni,corporis!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free FaShuttleVan",
                discription:"lorem ipsum dolor sit amet constecteture adipsicing elit magni,corporis!"
            },
            {
                icon:<FaBeer />,
                title:"strongest FaBeer",
                discription:"lorem ipsum dolor sit amet constecteture adipsicing elit magni,corporis!"
            }
        ],
        rooms:[],
        featuredRooms:[],
        sortRoom:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSise:0,
        breakfast:false,
        pets:false
    });
// get data from data.js

    useEffect(() => {
        let rooms=formatData(items);
        let featuredRooms=rooms.filter(room=>room.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price));
        let maxSize=Math.max(...rooms.map(item=>item.size));

        setIinitState({
            rooms,
            featuredRooms,
            sortRoom:rooms,
            loading:false,
            price:maxPrice,
            maxPrice:maxPrice,
            maxSize:maxSize, 
        })
    }, []);

    //formatData function
   const formatData=(items)=>{
        let tempItems=items.map((item)=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=>image.fields.file.url);
            let room ={...item.fields,images,id};
            return room;
        });
        return tempItems;
    }
//get room 
    const getRoom=(slug)=>{
        const AllRoom=[...INIT_STATE.rooms];
        const room=AllRoom.find(room=>room.slug===slug);
        return room;
    }
//handel change
    const handelChange=(e)=>{
        const target=e.target;
        const value=e.type==="checkbox" ?target.checked:target.value;
        const name=e.target.name; 
        setIinitState({[name]:value},filterRooms)
    } 
    
// filter rooms
const filterRooms=()=>{
   let{rooms,type,capacity, price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=INIT_STATE;
   //let tempRooms=[...rooms];
   //filter by type
   console.log('helloo')
}    

    return (
        <AppContext.Provider value={{...INIT_STATE,getRoom,handelChange}}>
            {props.children}
        </AppContext.Provider>
    )
}