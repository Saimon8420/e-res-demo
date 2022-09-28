import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const formValue = { email, password };
        console.log(formValue);
        event.target.reset();
        navigate('/home');
    }
    return (
        <div className='display-login'>
            <div className='shipping-info'>
                <h4>Login</h4>
                <form onSubmit={handleFormSubmit}>
                    <div className='shipping-input'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' required />
                    </div>
                    <div className='shipping-input'>
                        <label htmlFor="phone">Password:</label>
                        <input type="password" name="password" id="password" placeholder='Enter password' required />
                    </div>
                    <button className='submit-btn' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;