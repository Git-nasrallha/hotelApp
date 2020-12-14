import React from 'react'
import "./Bannar.css";
import Zoom from "react-reveal/Zoom";
const BannarPage = (props) => {
    const {title}=props;
    return (
       <Zoom>
            <div className="bannar-page">
                <h1 className="title"> {title} </h1>
            </div>
       </Zoom>
    )
}

export default BannarPage;
