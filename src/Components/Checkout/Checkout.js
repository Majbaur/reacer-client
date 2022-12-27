import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import useServiceDetail from './../../Hooks/useServiceDetail';
import auth from './../../firebase.init';

const Checkout = () => {
    const { addedItemId } = useParams();
    const [addedItem] = useServiceDetail(addedItemId);
    const [user] = useAuthState(auth);


    console.log(addedItem);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
        
            displayName: event.target.name.value,
            email: user.email,
            addedItem: addedItem.gameName,
            addedItemId: addedItemId,
            address: event.target.address.value,
            phone: event.target.phone.value,
            eventDetails: event.target.eventDetails.value
        }
        console.log(order)
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Register: {addedItem.gameName}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" placeholder='name' required />
              
                <input className='w-100 mb-2 d-none' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={addedItem.gameName} name="addedItem" required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={addedItem.eventDetails} name="eventDetails" required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Checkout;