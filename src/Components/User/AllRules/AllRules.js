import React, { useEffect, useState } from 'react';
import { axios } from 'axios';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './../AllAnnouncement/AllAnnouncement.css'
import UseRules from './../UserProduct/UseRules';
const AllRules = () => {
    const [user]= useAuthState(auth);
    const [addedRules,setAddRules]=useState([])
    useEffect(() =>{
        const getAddItems=async () => {
            const email=user.email
            const url = `http://localhost:5000/addedRules?email=${email}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(result =>{
                setAddRules(result)
            })
            // const{data}= await axios.get(url)
            // setAddItems(data)
        }
        getAddItems()
    },[user])
    return (
        <div className='container'>
            <h2>All Rules: {addedRules.length}</h2>
            <div  className="row row-cols-1 row-cols-md-3 g-5">
            {
                addedRules.map(addedRule => <UseRules
                    key={addedRule._id}
                    addedRule={addedRule}
                >
                </UseRules>)
            }
            </div>
        </div>
    );
};

export default AllRules;