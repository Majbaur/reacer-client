import React, { useEffect, useState } from 'react';
import Stat from './../Stat/Stat';

const WomanLongRaceList = () => {
    const [users,setUsers]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/womanLongRaceResult')
        .then(res=> res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Avilable Racers in Woman Long Race:{users.length}</h1>
            
            <table className="table table-striped table-info my-5 w-50 mx-auto">
                <thead className="">
                    <tr>
                        <td><h3>Pos.</h3></td>
                        <td><h3>Name</h3></td>
                        <td><h3>Time</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    users.map((user,id)=> <tr>
                    <td>{id+1}</td>
                      <td>{user.displayName}</td> 
                      <td>{user.Time} </td> 
              </tr>)
                }
                    </tbody>
                </table>
            <Stat users={users}></Stat>
        </div>
    );
};

export default WomanLongRaceList;