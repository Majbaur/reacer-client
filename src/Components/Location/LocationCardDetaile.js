import React, { useState }  from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Location.css'

const LocationCardDetaile = ({addItem}) => {
    const [addedItems , setAddedItems] = useState()
    const { _id, gameName,location ,eventDetails, description,photo } = addItem;
    const navigate = useNavigate();

    
    return (
        <div data-aos="fade-up" className="col ">
        <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
            <div className="card-body">
            <img className='w-100' src={photo} alt="" />
                <h2 className="card-title">{gameName}</h2>
                <p><span className="fw-bold">Location: </span> {location}</p>
                <p> <span className="fw-bold">Description: </span> {description}</p>
                <p><span className="fw-bold">Date: </span> {eventDetails}</p>
       <button style={{backgroundColor:'#00CBA4'}}><a  target="_blank" href="https://www.google.com/android/find?hl=en&did=82L0IjY3suXWX-b8m76-FGLLQTa1AKcAVeISomx5s08%3D">See Your Game Location</a></button>
       

   </div>
   </div>
   </div>
    );
};

export default LocationCardDetaile;