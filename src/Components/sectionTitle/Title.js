import React from 'react'
import "./sectionTitle.css";
const Title = (props) => {
    return (
        <div className="section-header">
            <h2> {props.header} </h2>
        </div>
    )
}
export default Title;
