
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import useServiceDetail from './../../Hooks/useServiceDetail';
// import auth from './../../firebase.init';

// const MygameCheckout = () => {
//     const { addedItemId } = useParams();
//     const [addedItem] = useServiceDetail(addedItemId);
//     const [user] = useAuthState(auth);
    

//     const handlePlaceMyGame = event =>{
//         event.preventDefault();
//         const myGame = {
//             email:user.email,
//             addedItem: addedItem.gameName,
//             addedItemId: addedItemId,
//             address: event.target.address.value,
//             phone: event.target.phone.value
//         }
//         axios.post('http://localhost:5000/myGame', myGame)
//         .then(response =>{
//             const {data} = response;
//             if(data.insertedId){
//                 toast('Your myGame is booked!!!');
//                 event.target.reset();
//             }
//         })
//     }

//     return (
//         <div className='w-50 mx-auto'>
//             <h2>Please myGame: {addedItem.gameName}</h2>
//             <form onSubmit={handlePlaceMyGame}>
//                 <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
//                 <br />
//                 <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
//                 <br />
//                 <input className='w-100 mb-2' type="text" value={addedItem.gameName} name="addedItem" placeholder='addedItem' required readOnly />
//                 <br />
//                 <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
//                 <br />
//                 <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
//                 <br />
//                 <input className='btn btn-primary' type="submit" value="Place myGame" />
//             </form>
//         </div>
//     );
// };

// export default MygameCheckout;