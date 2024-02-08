import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileModal from './ProfileModal';

const Profile = () => {

    const [user, setUsers] = useState([{
        name: 'sourav', email: 'email.com', interests: ['DJ playing', 'Coding', 'Hiking'], age: '22', gender: 'male'
    }]);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">





                        <div className="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <h1 class="page-header"><i class="glyphicon glyphicon-user"></i> Welcome User!!!</h1>
                                </div>

                            </div>

                            <ol class="breadcrumb">
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li class="active">Profile</li>
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
                                <div class="col-md-6">
                                    <div class="btn-group actions" role="group" aria-label="...">
                                        {/* New - Modal Button */}
                                        <ProfileModal />
                                    </div>
                                </div>

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

export default Profile;