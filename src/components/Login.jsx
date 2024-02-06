import { NavLink } from 'react-router-dom';
import React from 'react';
export default function Login() {
    return (
        <>
            <div className="container">
                <form action="index.html" method="get" className="form-signin">
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
                    />
                    <p>Don't have an acoount?<NavLink to="/signup"> Sign Up</NavLink></p>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </>
    )
}