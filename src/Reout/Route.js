import React from 'react'
import {Route,Switch} from "react-router-dom";
import Home from "../Pages/home/Home";
import About from "../Pages/about/About";
import Rooms from "../Pages/rooms/Rooms";
import Contact from "../Pages/contact/Contact";
//import Login from "../Pages/Login/Login";
import NotFound from '../Pages/notFound/NotFound';
import SingleRoom from '../Pages/singleRoom/SingleRoom';
import Service from '../Pages/service/Service';
import BookRoom from "../Components/Bookroom/BookRoom";

/*
const ProtectedRoute=({component:Component,...rest})=>{
    return <Route {...rest} render={(props)=>{
        return localStorage.getItem('jwt')?<Component {...props} />:<Redirect to='/login'/>
    }}
    />
}
*/

const Router = () => {
    return (
       <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/rooms/:single" component={SingleRoom}/>
            <Route exact path="/bookroom" component={BookRoom} />
            <Route component={NotFound}/> 
        </Switch>
       </>
    )
}
export default Router;
