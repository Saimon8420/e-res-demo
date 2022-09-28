import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FoodContext } from '../../App';
import './Cart.css';
const Cart = () => {
    const { value, value3 } = useContext(FoodContext);
    const [foods, setFoods] = value;
    const [totalPrice, setTotalPrice] = value3;
    const handleIncrease = (item, sign) => {
        if (sign === '+') {
            const exists = foods.find(food => food.id === item.id);
            if (exists) {
                const existCart = foods.map(food => food.id === item.id ? { ...exists, quantity: exists.quantity + 1 } : food);
                setFoods(existCart);
            }
        }
        else {
            const exists = foods.find(food => food.id === item.id);
            if (exists.quantity === 1) {
                const existCart = foods.filter(food => food.id !== item.id);
                setFoods(existCart);
            }
            else if (exists && exists.quantity >= 1) {
                const existCart = foods.map(food => food.id === item.id ? { ...exists, quantity: exists.quantity - 1 } : food);
                setFoods(existCart);
            }

        }
    }
    let total = foods.map(food => {
        let totalPrice = food.quantity * food.price;
        return totalPrice;
    })
    const grandTotal = total.reduce((current, previous) => current + previous, 0);
    setTotalPrice(grandTotal);

    const navigate = useNavigate();
    const gotoCheckout = () => {
        navigate('/home/cart/checkout');
    }
    const gotoSignUp = () => {
        navigate('/home/cart/signup');
    }
    return (
        <div className='shopping-cart'>
            <div className='display-cart'>
                <Link className='link' to='/home'>Continue Shopping</Link>
                {
                    foods.map(food => <div className='each-item'>
                        <img src={food.img} alt="" />
                        <h4>Name:{food.name}</h4>
                        <p>Price: ${food.price}</p>
                        <div className='quantity'>
                            <button onClick={() => handleIncrease(food, '+')}>+</button>
                            <p>{food.quantity}</p>
                            <button onClick={() => handleIncrease(food, '-')}>-</button>
                        </div>
                        <p>Total: ${food.quantity * food.price}</p>
                    </div>)
                }
            </div>
            <div className='display-cart2'>
                <h4>Total Price: ${grandTotal}</h4>
                <div className='cart-btn'>
                    <button onClick={gotoCheckout}>Checkout as guest</button>
                    <button onClick={gotoSignUp}>Create Account</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;