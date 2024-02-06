import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign up logic here, such as calling an API
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-signin">
                <h2 className="form-signin-heading text-center">Sign Up</h2>
                <label htmlFor="inputFirstName" className="sr-only">
                    First Name
                </label>
                <input
                    type="text"
                    id="inputFirstName"
                    className="form-control"
                    placeholder="First Name"
                    required
                    autoFocus
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <label htmlFor="inputLastName" className="sr-only">
                    Last Name
                </label>
                <input
                    type="text"
                    id="inputLastName"
                    className="form-control"
                    placeholder="Last Name"
                    required
                    autoFocus
                    value={lastName}
                    onChange={handleLastNameChange}
                />
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
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                />
                <label htmlFor="inputConfirmPassword" className="sr-only">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="inputConfirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                <p>Already have an account?<NavLink to="/login"> Login</NavLink></p>

                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default SignUp;
