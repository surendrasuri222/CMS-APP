import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const User = () => {

    const [user, setUsers] = useState([{
        name: 'sourav', email: 'email.com', interests: ['DJ playing', 'Coding', 'Hiking'], age: '22', gender: 'male'
    }]);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">

                        <div class="col-md-4">
                            <div class="list-group">
                                <a href="index.html" class="list-group-item"><i class="glyphicon glyphicon-dashboard"></i> Dashboard</a>
                                <a href="pages.html" class="list-group-item "><i class="glyphicon glyphicon-file"></i> Pages</a>
                                <a href="categories.html" class="list-group-item"><i class="glyphicon glyphicon-folder-open"></i> Categories</a>
                                <a href="users.html" class="list-group-item active"><i class="glyphicon glyphicon-user"></i> User Accounts</a>
                            </div>
                        </div>



                        <div className="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <h1 class="page-header"><i class="glyphicon glyphicon-user"></i> Users Details</h1>
                                </div>
                                <div class="col-md-6">
                                    <div class="btn-group actions" role="group" aria-label="...">
                                        <a href="#" type="button" class="btn btn-default"><i class="glyphicon glyphicon-plus"></i> New</a>
                                        <a href="#" type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</a>
                                        <a href="#" type="button" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i> Delete</a>
                                    </div>
                                </div>
                            </div>

                            <ol class="breadcrumb">
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li><NavLink to="/users">Users</NavLink></li>
                                <li class="active">User Details</li>
                            </ol>



                            <div className="d-flex">
                                {
                                    user.map((user) => {
                                        return <>
                                            <p><strong>Name:</strong> {user.name}</p>
                                            <p><strong>Email:</strong> {user.email}</p>
                                            <p><strong>Gender:</strong> {user.gender}</p>
                                            <p><strong>Age:</strong> {user.age}</p>
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
            </section >

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    )
}

export default User;