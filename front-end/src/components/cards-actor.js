import React from  'react';

const Card = ({actor})=>{
    return (
        <div className="col-md-4 p-4">
        <div className="card">
            <img src={actor.photo} alt={actor.name} className="card-img-top" width="100"/>
            <div className="card-body">
                <h5>{actor.name} <span>|</span> {new Date(actor.DateBirth).getFullYear()}</h5>
                <p>{actor.Sex}</p>
            </div>
        </div>
        </div>
    )
}

export default Card;