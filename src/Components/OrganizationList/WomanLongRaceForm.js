// WomanLongRaceForm
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const WomanLongRaceForm = ({order}) => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const { _id, addedItem} = order;

    if(user){
        console.log(user)
    }
    const onSubmit = data => {
        document.getElementById("myForm").reset();
        
        data.Time=parseFloat(data.Time)
        console.log(data);
        const url = `http://localhost:5000/womanLongRaceResult`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    }

    return (
        <form id="myForm" className='mb-8 d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='w-100 mb-2' type="text" name="userName" value={order?.displayName} placeholder='useName'{...register("displayName")} readOnly/>
        <input className='mb-2 d-none' placeholder='email' name="email" value={order?.email} {...register("email", { required: true })} readOnly />
        <input className='mb-2 d-none' placeholder='addedItem' value={order?.addedItem} name="addedItem" {...register("addedItem", { required: true })} readOnly/>
        <input className='w-100 mb-2' type="double" name="number" placeholder='Time'{...register("Time")} />
        <input className='submitbt ' type="submit" value="Submit" />

    </form>
    
    
    );
    
};



export default WomanLongRaceForm;