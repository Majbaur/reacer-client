
import React, { useEffect, useState } from 'react';

const BoyShortRaceList = () => {
    const [users,setUsers]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/boyShortRaceResult')
        .then(res=> res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h2>Avilable user in this game:{users.length}</h2>
            <ul>
                {
                    users.map(user=> <li>Name:{user.displayName}  Email: {user.email}  Time: {user.Time}  ::  {user.addedItem}</li>)                  }
            </ul>
        </div>
    );
};

export default BoyShortRaceList;
