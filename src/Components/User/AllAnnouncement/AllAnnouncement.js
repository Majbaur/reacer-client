import React, { useEffect, useState } from 'react';
import { axios } from 'axios';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import UserProduct from '../UserProduct/UserProduct';
import './AllAnnouncement.css'
const AllAnnouncement = () => {
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
            // const{data}= await axios.get(url)
            // setAddItems(data)
        }
        getAddItems()
    },[user])
    return (
        <div className='container'>
            <h2>Your Add Task: {addItems.length}</h2>
            <div  className="row row-cols-1 row-cols-md-3 g-5">
            {
                addItems.map(addItem => <UserProduct
                    key={addItem._id}
                    addItem={addItem}
                >
                </UserProduct>)
            }
            </div>
        </div>
    );
};

export default AllAnnouncement;