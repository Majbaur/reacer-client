import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import axiosPrivate from './../api/axiosPrivate';

const MyGame = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    console.log(orders);
    useEffect( () => {
        
        const getOrders = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>My Participation: {orders.length}</h2>
            <table className="table table-striped table-success my-5 w-75 mx-auto">
                <thead className="">
                    <tr>
                        <td><h3>No.</h3></td>
                        <td><h3>Event Name</h3></td>
                        <td><h3>date</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    orders.map((user,id)=> <tr>
                    <td>{id+1}</td>
                      <td>{user.addedItem}</td> 
                      <td>{user.eventDetails} </td> 
              </tr>)
                }
                    </tbody>
                </table>

        </div>
    );
};

export default MyGame;