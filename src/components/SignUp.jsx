import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
    return (
        <div className="container">
            <form action="index.html" method="get" className="form-signin">
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
                <label htmlFor="inputConfirmPassword" className="sr-only">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="inputConfirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                />
                <p>Already have an acoount?<NavLink to="/login"> Login</NavLink></p>

                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default SignUp;