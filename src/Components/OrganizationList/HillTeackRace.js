import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from './../api/axiosPrivate';
import { signOut } from 'firebase/auth';
import StopWatch from './../StopWatch/StopWatch';
import { useForm } from 'react-hook-form';
import "./HillTeackRace.css"
import HillTracRaceForm from './HillTracRaceForm';

const HillTeackRace = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000//hillTeackRace?email=${email}`;
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
            <h2 className='mb-5'>Hill Track Race Participant: {orders.length}</h2>
            <div className='w-75 mx-auto'>
                {
                    orders.map(order => <div className='row row-cols-3'>
                        <div> <h3> {order.displayName}</h3></div>
                        <div><StopWatch></StopWatch></div>
                        <div><HillTracRaceForm
                            key={order._id}
                            order={order}
                        >
                        </HillTracRaceForm></div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};
export default HillTeackRace;