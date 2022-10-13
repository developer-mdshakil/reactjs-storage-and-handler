import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotal } from '../utilities/Calculation/Calculation';
import Common from '../utilities/Common';

const Bank = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
       fetch('data.json')
       .then(res => res.json())
       .then(data => setProducts(data))
    } ,[])
    const Total = getTotal(products);
    return (
        <div>
            <h2>My Eid Shopping Here!!!..</h2>
            <p>Total amount: {Total}</p>
            {
                products.map(product => <Common key={product.id} product={product}></Common>)
            }
        </div>
    );
};

export default Bank;