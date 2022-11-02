import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../User/AllAnnouncement/AllAnnouncement.css'
import HomeUserProduct from '../User/UserProduct/HomeUserProduct';
import auth from '../../firebase.init';
const HomeAllAnnouncement = () => {
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
                    addItems.map(addItem => <HomeUserProduct
                        key={addItem._id}
                        addItem={addItem}
                    >
                    </HomeUserProduct>)
                }
            </div>
        </div>
    );
};

export default HomeAllAnnouncement;