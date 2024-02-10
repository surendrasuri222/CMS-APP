import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const User = () => {

    const [user, setUsers] = useState([{
        name: 'sourav', email: 'email.com', interests: ['DJ playing', 'Coding', 'Hiking'], age: '22', gender: 'male', group:'admin'
    }]);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">

                        



                        <div className="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <h1 class="page-header"><i class="glyphicon glyphicon-user"></i> User Details</h1>
                                </div>

                            </div>

                            <ol class="breadcrumb">
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li><NavLink to="/users">Users</NavLink></li>
                                <li class="active">User Details</li>
                            </ol>



                            <div className="row">

                                <div className="col-md-6">
                                    {
                                        user.map((user) => {
                                            return <>
                                                <p><strong>Name:</strong> {user.name}</p>
                                                <p><strong>Email:</strong> {user.email}</p>
                                                <p><strong>Gender:</strong> {user.gender}</p>
                                                <p><strong>Age:</strong> {user.age}</p>
                                                <p><strong>Group:</strong> {user.group}</p>
                                                <p><strong>Interests:</strong></p>
                                                <ul>
                                                    {user.interests.map((interest, i) => (
                                                        <li key={i}>{interest}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        })
                                    }
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section >

            <Footer/>
        </>
    )
}

export default User;