import React, {Component, createContext } from "react";
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa";
import items from "../data";

export const AppContext=createContext();

export class ThemeProvider extends Component {
    state={
        //auth:{},
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
        pets:false,
        isOpen:false
    }
    componentDidMount(){
        let rooms=this.formatData(items);
        let featuredRooms=rooms.filter(room=>room.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price));
        let maxSize=Math.max(...rooms.map(item=>item.size));
        //const token=JSON.parse(localStorage.getItem("jwt"));
        //const authEmail=JSON.parse(LocalStorage.getItem("authEmail"));

        this.setState({
            rooms,
            featuredRooms,
            sortRoom:rooms,
            loading:false,
            price:maxPrice,
            maxPrice:maxPrice,
            maxSize:maxSize, 
          
        })
      
       
    };

     //formatData function
    formatData=(items)=>{
    let tempItems=items.map((item)=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=>image.fields.file.url);
            let room ={id,...item.fields,images};
            return room;
        });
        return tempItems;
    }
//get room 
    getRoom=(slug)=>{
        const AllRoom=[...this.state.rooms];
        const room=AllRoom.find(room=>room.slug===slug);
        return room;
    }

//handel change
    handelChange=(e)=>{
        const target=e.target;
        const value=target.type==="checkbox" ?target.checked:target.value;
        const name=e.target.name; 
        this.setState({[name]:value},this.filterRooms)
    }
       
// filter rooms
    filterRooms=()=>{
        let{rooms,type,capacity, price,minPrice,minSize,maxSize,breakfast,pets}=this.state;
        let tempRooms=[...rooms];
         capacity=parseInt(capacity);
         price=parseInt(price);
        //filter by type
        if(type === 'all'){
          this.setState({sortRoom:tempRooms});
        }else{
            tempRooms=tempRooms.filter(room=>room.type===type);
            
        }
        //filter by capacity
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>room.capacity>=capacity);
        }
        if(price !==minPrice){
            tempRooms=tempRooms.filter(room=>room.price<=price);
        }
        //filter by size
        tempRooms=tempRooms.filter(room=>room.size >=minSize && room.size <=maxSize);
        //filter by breakfast
        if(breakfast){
            tempRooms=tempRooms.filter(room=>room.breakfast===true);
        }
        //filter by pets
        if(pets){
            tempRooms=tempRooms.filter(room=>room.pets===true);
        }

        this.setState({sortRoom:tempRooms})
    }  

//modal functions
    openModal=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }    
    render(){
        return (
            <AppContext.Provider value={
                    {   ...this.state,
                        getRoom:this.getRoom,
                        handelChange:this.handelChange,
                        openModal:this.openModal
                    }
                }>
                {this.props.children}
            </AppContext.Provider>
        )
    }
   

   
}