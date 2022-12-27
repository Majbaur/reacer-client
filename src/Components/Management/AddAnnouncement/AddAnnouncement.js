import React from 'react';
import { useForm } from "react-hook-form";
//majba
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddAnnouncement = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    if(user){
        console.log(user)
    }
        const onSubmit = data => {
            
        console.log(data);
        const url = `http://localhost:5000/addedItem`;
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
    };
    console.log('user',user.displayName);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Announcement</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="userName" placeholder='useName'{...register("displayName")} />
                <input className='mb-2' placeholder='email' value={user?.email} name="email" {...register("email", { required: true })} />
                {/* <input className='w-100 mb-2' type="text" name="gameName" placeholder='Game Name'{...register("gameName")} /> */}

                <select className='w-100 mb-2' type="text" name="gameName" placeholder='Game Name'{...register("gameName")} >
                    <option disabled selected>Enter Game Name please </option>
                    <option>Boy Short Race</option>
                    <option>Woman Short Race</option>
                    <option>Boy Long Race</option>
                    <option>Woman Long Race</option>
                    <option>Hill Track Race</option>
                </select>

                <input className='w-100 mb-2' type="photo" name="photo" placeholder='Image Address'{...register("photo")} />
                <input className='w-100 mb-2' type="text" name="location" placeholder='Location'{...register("location")} />
                <input className='w-100 mb-2' type="date" name="eventDetails" placeholder='Event Details'{...register("eventDetails")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddAnnouncement;