import React,{useState} from 'react'
import "./Navbar.css";
import {Link,NavLink} from "react-router-dom";
import {ButtonLink} from "../Buttons/Button";
import { FaBars,FaTimes} from "react-icons/fa";
import logo from "../../images/logo.svg";

const NavLinks=({lable,to,className,...rest})=>{
    return <li className={`navbar-item ${className}`}>
        <NavLink  to={to} className="navbar-link" exact activeClassName="active-link" {...rest} > {lable} </NavLink>
    </li>
}
const Navbar = () => {

    //const {auth}=useContext(AppContext);
    
    const [toggleMenuo,setToggelMenuo]=useState(false);
    const [button,setButton]=useState(true);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton)
    const HandleToggleMenuo=()=>{
        setToggelMenuo(!toggleMenuo);
    }
    
    const closeMenuo=()=>{
        setToggelMenuo(false);
    }
    /*
    const logOut=()=>{
        if(localStorage.jwt){
            localStorage.removeItem("jwt")
        }
    }
    */
    return (
        <div>
            <nav>
                <div className="container d-flex">
                    <button className="toggle-menuo" onClick={HandleToggleMenuo}>{toggleMenuo? <FaTimes/> : <FaBars/> }</button>
                    <div className="logo">
                        <Link to="/"> <img src={logo} alt="logo"/> </Link>
                    </div>
                    <ul className={toggleMenuo ? " list-unstyled show-links show-active-links " :" list-unstyled show-links" }>
                
                        <NavLinks  lable="Home" to="/" onClick={closeMenuo} />
                        <NavLinks lable="About" to="/about" onClick={closeMenuo}/>
                        <NavLinks lable="Rooms" to="/rooms" onClick={closeMenuo}/>
                        <NavLinks lable="services" to="/service" onClick={closeMenuo}/>
                        <NavLinks  lable="Contact" to="/contact" onClick={closeMenuo} />
                        <NavLinks lable="login" to="/login" className="login" onClick={closeMenuo}  />
                                                                
                            {button?
                                <ButtonLink to="/signin"> 
                                    sign up
                                </ButtonLink>
                            :null
                            }
                        

                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
 export default Navbar;
