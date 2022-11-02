import { useEffect, useState } from 'react';

const GetProducts = (page , size) => 
{
    const [products , setProducts] = useState([])

    useEffect(()=>
    {
        fetch(`http://localhost:5000/items?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    } , [page , size])

    return [products , setProducts]
};

export default GetProducts;