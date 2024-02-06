

import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here, such as calling an API
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-signin">
                <h2 className="form-signin-heading text-center">Login</h2>
                <label htmlFor="inputEmail" className="sr-only">
                    Email address
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                    value={email}
                    onChange={handleEmailChange}
                />
                <label htmlFor="inputPassword" className="sr-only">
                    Password
                </label>
                <div className="form-group">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                    <div className="form-check m-2">
                        <input
                            type="checkbox"
                            id="showPassword"
                            className="form-check-input"
                            checked={showPassword}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="showPassword" className="form-check-label"> &nbsp; Show Password</label>
                    </div>
                </div>
                <p>Don't have an account?<NavLink to="/signup"> Sign Up</NavLink></p>
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Login;
