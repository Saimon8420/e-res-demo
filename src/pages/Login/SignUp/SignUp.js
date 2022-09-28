import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_pass = event.target.confirm_pass.value;
        if (password === confirm_pass) {
            const formValue = { name, email, password };
            console.log(formValue);
            event.target.reset();
            navigate('/home/cart/checkout');
        }
        else {
            alert("Password doesn't match");
        }

    }
    return (
        <div className='Sign-up'>
            <div className='shipping-info'>
                <h4>Sign up</h4>
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
                        <label htmlFor="phone">Password:</label>
                        <input type="password" name="password" id="password" placeholder='Enter password' required />
                    </div>
                    <div className='shipping-input'>
                        <label htmlFor="address">Confirm Password:</label>
                        <input type="password" name="confirm_pass" id='confirm_pass' placeholder='Re-enter password' required />
                    </div>
                    <button className='submit-btn' type="submit">Sign-Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;