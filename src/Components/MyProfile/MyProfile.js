import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init.js';
import Stat from '../Stat/Stat.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../api/axiosPrivate';
import { signOut } from 'firebase/auth';
const MyProfile = () => {
    const [user] = useAuthState(auth);
        const [users, setUsers] = useState([]);
        const navigate = useNavigate();
        useEffect( () => {
            
            const getmyGames = async() =>{
                const email = user?.email;
                const url = `http://localhost:5000/userRegistion?email=${email}`;
                try{
                    const {data} = await axiosPrivate.get(url);
                    setUsers(data);
                }
                catch(error){
                    console.log(error.message);
                    if(error.response.status === 401 || error.response.status === 403){
                        signOut(auth);
                        navigate('/login')
                    }
                }
            }
            getmyGames();
    
        }, [user])
    let demo=[
        {
            "displayName" :"21-03-21",
            "Time":10
        },
        {
            "displayName" :"22-03-21",
            "Time":20
        },
        {
            "displayName" :"23-03-21",
            "Time":50
        },
        {
            "displayName" :"24-03-21",
            "Time":5
        }, 
        {
            "displayName" :"30-03-21",
            "Time":30
        },
    ]
    return (
        <div className=''>
            <h2>Profile</h2>

            
                {
                    users.map(user=> <div><h3>Name:{user.displayName} </h3> 
                                            <h3>Email: {user.email}</h3>
                                            <h3> Point: {user.point}</h3>
                                            <h3> Level: {user.badge}</h3>
                                            </div>)
                }
            
            <Stat users={demo}></Stat>
        </div>
    );
};

export default MyProfile;

