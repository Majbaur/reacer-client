import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UserRegistionForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    if (user) {
        console.log(user)
    }
    const onSubmit = data => {
        document.getElementById("myForm").reset();

        data.point=parseFloat(data.point)
        console.log(data);
        const url = `http://localhost:5000/userRegistion`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='p-3'>Profile Update</h2>
            <form id="myForm" className=' mb-8 d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='w-100 mb-2' type="text" name="userName" placeholder='useName'{...register("displayName")} />
            <input className='mb-2' placeholder='email' value={user.email} name="email" {...register("email", { required: true })} />
            <input className='mb-2' type='number'  placeholder='Point' name="Point" {...register("point", { required: true })} />
            <input className='mb-2' type='text' placeholder='Badge' name="Badge" {...register("badge", { required: true })} />
            <input className='submitbt ' type="submit" value="Submit" />

        </form>
        </div>


    );

};



export default UserRegistionForm;