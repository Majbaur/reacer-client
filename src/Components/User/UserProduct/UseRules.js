import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProduct.css'
import { Button } from 'react-bootstrap';
import GetProducts from './../../../Hooks/GetProducts';

const UseRules = ({addedRule}) => {
    
    const [addedRules , setAddedRules] = useState()

    const { _id, gameName,location ,date, Rules,time } = addedRule;

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/addedRules/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = addedRules.filter(addedRule => addedRule._id !== id);
                setAddedRules(remaining);
            })
        }
    }

    return (
        <article>
        <div data-aos="fade-up" className="col ">
            <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
                <div className="card-body">
                    <h2 className="card-title">{gameName}</h2>
                    <p>{location}</p>
                    <p>{Rules}</p>
                    <p>{date}</p>
                    <p>{time}</p>
                    <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(addedRule._id)}>Delete Item</Button>
                </div>
            </div>
        </div>

    </article>
    );
};

export default UseRules;