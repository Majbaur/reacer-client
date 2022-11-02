import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from './../../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const { addedItemId } = useParams();
    const [addedItem] = useServiceDetail(addedItemId);

    return (
        <div>
            <h2>You are about to book: {addedItem.gameName}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${addedItemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;