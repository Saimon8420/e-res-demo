import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodContext } from '../../App';
import './Header.css';
const Header = () => {
    const { value, value2 } = useContext(FoodContext);
    const [foods, setFoods] = value;
    const [totalQn, setTotalQn] = value2;
    let totalQuantity = foods.map(food => {
        let quantity = 0;
        quantity = quantity + food.quantity;
        return quantity;
    })
    const total = totalQuantity.reduce((current, previous) => current + previous, 0);

    setTotalQn(total);

    const navigate = useNavigate();
    const gotoCart = () => {
        navigate('/home/cart');
    }

    const gotoLogin = () => {
        navigate('/home/login');
    }

    return (
        <div className='display-header'>
            <div>
                <h4>E-Res</h4>
            </div>
            <div className='header-part2'>
                <p className='cart'><button onClick={gotoLogin}>Login</button></p>
                <p className='cart'><button onClick={gotoCart}>Cart</button><span>{total}</span></p>
            </div>
        </div>
    );
};

export default Header;