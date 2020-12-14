import React from 'react'
import {Link} from "react-router-dom";
import "./Buttons.css";

export const ButtonLink = ({to,children,...rest}) => {
    return (
        <>
            <Link to={to} {...rest} className="btn-link">
                <button  className="btn-style">{children} </button>
            </Link>
        </>
    )
}


export const Button = ({children,type,className,...rest}) => {
    return (
        <>
            <button type={type} {...rest} className={`btn-style ${className}`}>{children} </button>
        </>
    )
}
