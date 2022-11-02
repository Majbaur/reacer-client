import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../User/AllAnnouncement/AllAnnouncement.css'
import auth from '../../firebase.init';
import Organizecard from './Organizecard';
const Organize = () => {
    const [user]= useAuthState(auth);
    const [addItems,setAddItems]=useState([])
    useEffect(() =>{
        const getAddItems=async () => {
            const email=user.email
            const url = `http://localhost:5000/addedItem?email=${email}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(result =>{
                setAddItems(result)
            })
        }
        getAddItems()
    },[user])
    return (
        <div className='container'>
            <h2>Remaining Games: {addItems.length}</h2>
            <div  className="row row-cols-1 row-cols-md-3 g-5">
            {
                addItems.map(addItem => <Organizecard
                    key={addItem._id}
                    addItem={addItem}
                >
                </Organizecard>)
            }
            </div>
        </div>
    );
};

export default Organize;