
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import StopWatch from './../StopWatch/StopWatch';
import axiosPrivate from './../api/axiosPrivate';
import { signOut } from 'firebase/auth';
import BoyShortRaceForm from './BoyShortRaceForm';
const BoyShortRace = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/boyShortRace?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])
    return (
        <div>
 <h2 className='mb-5'>Boy Short Race Participant: {orders.length}</h2>
            <div className='w-75 mx-auto'>
                {
                    orders.map(order => <div className='row row-cols-3'>
                        <div> <h3> {order.displayName}</h3></div>
                        <div><StopWatch></StopWatch></div>
                        <div><BoyShortRaceForm
                            key={order._id}
                            order={order}
                        >
                        </BoyShortRaceForm></div>
                    </div>
                    )
                }
            </div>
        </div>

    );
};

export default BoyShortRace;