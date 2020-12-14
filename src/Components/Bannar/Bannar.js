import React from 'react';
import Zoom from "react-reveal/Zoom";
import { ButtonLink } from '../Buttons/Button'
import "./Bannar.css";
const Bannar = (props) => {
    const {title,subtitle,to,buttonContent}=props;
    return (
       <Zoom>
            <div className="bannar">
                <h1 className="title"> {title} </h1>
                <h6 className="subtitle"> {subtitle} </h6>
                <ButtonLink to={to}> {buttonContent} </ButtonLink>
            </div>
       </Zoom>
    )
}

export default Bannar;
