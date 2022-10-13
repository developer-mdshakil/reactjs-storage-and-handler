import React from 'react';
import { addToDB, removeFromDb } from './Calculation/Calculation';
import './Common.css';

const Common = (props) => {
    const {name, price, id} = props.product;
    const addToCart = (id)=>{
        addToDB(id);
    }
    const removeCart = id => {
        removeFromDb(id);
    }
    return (
        <div className="product">
            <h1>Product Name: {name}</h1>
            <h3>Product Price: {price}</h3>
            <h4>Product Order Id: {id}</h4>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeCart(id)}>Remove To Cart</button>
        </div>
    );
};

export default Common;