import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from '../../App';
import './CheckOut.css';
const CheckOut = () => {
    const { value, value2, value3 } = useContext(FoodContext);
    const [foods, setFoods] = value;
    const [totalQn, setTotalQn] = value2;
    const [totalPrice, setTotalPrice] = value3;
    let count = 0;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const formValue = { name, email, phone, address };
        console.log(formValue);
        event.target.reset();
        document.getElementById('display-checkout').style.display = 'none';
        document.getElementById('confirm-msg').style.display = 'block';
        setFoods([]);
    }
    return (
        <div className='checkout-container'>
            <div id='display-checkout' className='display-checkout'>
                <div className='order-summary'>
                    <Link className='link' to='/home/cart'>Go Back to Cart</Link>
                    <h3 style={{ 'color': 'green', 'borderBottom': '1px solid black' }}>Order Summary:</h3>
                    {
                        foods.map(food => <div className='list-container' key={food.id}><p>{++count}. <span>{food.quantity} X {food.name} = ${food.quantity * food.price}</span></p></div>)
                    }
                    <h4 style={{ 'color': 'green', 'borderTop': '1px solid black' }}>Grand Total: ${totalPrice}</h4>
                </div>
                <div className='shipping-info'>
                    <h4 style={{ 'color': 'green', 'borderBottom': '1px solid black' }}>Shipping Information</h4>
                    <form onSubmit={handleFormSubmit}>
                        <div className='shipping-input'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id='name' placeholder='Enter your name' required />
                        </div>
                        <div className='shipping-input'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder='Enter your email' required />
                        </div>
                        <div className='shipping-input'>
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" id="phone" placeholder='Enter your number' required />
                        </div>
                        <div className='shipping-input'>
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id='address' placeholder='Enter address' required />
                        </div>
                        <button className='submit-btn' type="submit">Confirm Order</button>
                    </form>
                </div>
            </div>
            <div id='confirm-msg' className='confirm'>
                <p>Thanks for purchase!! </p>
                <p><Link to={'/home'}>Continue Shopping</Link></p>
            </div>
        </div>
    );
};

export default CheckOut;