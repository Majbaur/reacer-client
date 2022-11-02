import React from 'react';
import { useForm } from "react-hook-form";
//majba
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init.js';

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    if(user){
        console.log(user)
    }
        const onSubmit = data => {
            
        console.log(data);
        const url = `http://localhost:5000/addedItem`;
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    };
    console.log('user',user.displayName);
    return (
        <div className='w-50 mx-auto'>
            <h2>Profile</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <img className='w-25 mx-auto pb-2' src={user?.photoURL} alt="" />
                <h2 className='w-100 mb-2'>{user?.displayName}</h2>
                <h2 className='w-100 mb-2'>{user?.email}</h2>
                <h2 className='w-100 mb-2'>Point: 500</h2>
                <h2 className='w-100 mb-2'>Badge: Frist Reacer</h2>
            </form>
        </div>
    );
};

export default MyProfile;