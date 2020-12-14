import React from 'react';
import "./breadcrumb.css" ;
import {Link} from "react-router-dom";

const Breadcrumb = ({ActivePage}) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"> {ActivePage} </li>
                    </ol>
                </div>
            </nav>
          
        </>
    )
}

export default Breadcrumb
