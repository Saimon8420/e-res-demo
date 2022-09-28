import React from 'react';
import './Product.css';
const Product = ({ food, handleAddToCart }) => {
    return (
        <div className='display-food'>
            <img src={food.img} alt="" />
            <h4>Name: {food.name}</h4>
            <p>Price: {food.price}</p>
            <button onClick={() => handleAddToCart(food)}>Add To Cart</button>
        </div>
    );
};

export default Product;