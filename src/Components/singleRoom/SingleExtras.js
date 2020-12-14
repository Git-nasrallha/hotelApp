import React from 'react'

const SingleExtras = (props) => {
    const {extras}=props
    return (
        <div className="extras">
            <h3>Extras</h3>
            <div className="row">
                {
                    extras.map((item,index)=>{
                        return <div key={index} className="coll col-md-6 col-lg-4">
                        < >
                            <li> {item} </li>
                        </>
                    </div>
                    })
                }
            </div>
        </div>
    )
}

export default SingleExtras
