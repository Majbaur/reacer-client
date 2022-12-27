import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import auth from './../../firebase.init';
import LocationCardDetaile from './LocationCardDetaile';

const LocationCard = () => {
    const [user] = useAuthState(auth);
    const [addItems, setAddItems] = useState([])
    useEffect(() => {
        const getAddItems = async () => {
            const email = user.email
            const url = `http://localhost:5000/addedItem?email=${email}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(result => {
                    setAddItems(result)
                })
            // const{data}= await axios.get(url)
            // setAddItems(data)
        }
        getAddItems()
    }, [user])
    return (
        <div className='container'>
        <h2 className='m-4'>TOTAL UPCOMMING GAMES: {addItems.length}</h2>
        <div className="row row-cols-1 row-cols-md-3 g-5">
            {
                addItems.map(addItem => <LocationCardDetaile
                    key={addItem._id}
                    addItem={addItem}
                >
                </LocationCardDetaile>)
            }
        </div>
    </div>
    );
};

export default LocationCard;