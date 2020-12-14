import React from 'react'
import Hero from "../../Components/Hero/Hero";
import Bannar from "../../Components/Bannar/Bannar";
const NotFound = () => {
    return (
        <div className="not-found">
            <Hero>
            <Bannar
                    title="404"
                    subtitle="page not fonud"
                    to="/"
                    buttonContent="back to home"
               />
            </Hero>
        </div>
    )
}
export default NotFound;
