import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProduct.css'
import { Button } from 'react-bootstrap';
import GetProducts from './../../../Hooks/GetProducts';

const UserProduct = ({addItem}) => {
    
    const [addedItems , setAddedItems] = useState()

    const { _id, gameName,location ,eventDetails, description ,photo} = addItem;

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/addedItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = addedItems.filter(addedItem => addedItem._id !== id);
                setAddedItems(remaining);
            })
        }
    }

    return (
        <article>
        <div data-aos="fade-up" className="col ">
            <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
                <div className="card-body">
                    <img className='w-100' src={photo} alt="" />
                    <h2 className="card-title">{gameName}</h2>
                    <p><span className="fw-bold">Location: </span> {location}</p>
                     <p> <span className="fw-bold">Description: </span> {description}</p>
                     <p><span className="fw-bold">Date: </span> {eventDetails}</p>
                    <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(addItem._id)}>Delete Item</Button>
                </div>
            </div>
        </div>

    </article>
    );
};

export default UserProduct;