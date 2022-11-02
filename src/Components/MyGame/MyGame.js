
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import axiosPrivate from '../api/axiosPrivate';
// import auth from '../../firebase.init';
// import { signOut } from 'firebase/auth';

// const orders = () => {
//     const [user] = useAuthState(auth);
//     const [myGames, setmyGames] = useState([]);
//     const navigate = useNavigate();
//     useEffect( () => {
        
//         const getmyGames = async() =>{
//             const email = user?.email;
//             const url = `http://localhost:5000/myGame?email=${email}`;
//             try{
//                 const {data} = await axiosPrivate.get(url);
//                 setmyGames(data);
//             }
//             catch(error){
//                 console.log(error.message);
//                 if(error.response.status === 401 || error.response.status === 403){
//                     signOut(auth);
//                     navigate('/login')
//                 }
//             }
//         }
//         getmyGames();

//     }, [user])
//     return (
//         <div className='w-50 mx-auto'>
//             <h2>Total Participant: {myGames.length}</h2>
//             {
//                 myGames.map(myGame =><div key={myGame._id}>
//                     <p>{myGame.email} : {myGame.addedItem}</p>
//                 </div>)
//             }
//         </div>
//     );
// };

// export default MyGame;