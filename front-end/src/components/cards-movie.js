import React from  'react';

const Card = ({data})=>{
    return (
        <div className="col-md-4 p-4">
        <div className="card">
            <img src={data.photo} alt={data.title} className="card-img-top" width="100"/>
            <div className="card-body">
                <h5>{data.title} <span>|</span> {new Date(data.datereleased).getFullYear()}</h5>
                <p>{data.gender}</p>
            </div>
        </div>
        </div>
    )
}

export default Card;