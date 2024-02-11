import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
const Dashboard = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        // Fetching the data using axios
        axios.get("http://localhost:4000/api/users/id")
            .then((users) => {
                setUsers(users.data)
                // console.log(users)
            })
            .catch((err) => {
                console.log(err);
            })
        // console.log(users)

    }, [])

    return (
        <>
            <section>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded p-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <h1 className="page-header">
                                    <i className="glyphicon glyphicon-dashboard"></i> Dashboard
                                </h1>

                                <div className="col-md-12">
                                    <h3>Latest Pages</h3>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Page Title</th>
                                                <th>Category</th>
                                                <th>Author</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Page One</NavLink></td>
                                                <td>Category One</td>
                                                <td>John Wick</td>
                                            </tr>
                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Page Three</NavLink></td>
                                                <td>Category One</td>
                                                <td>Jenni lora</td>
                                            </tr>

                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Page Four</NavLink></td>
                                                <td>Category Three</td>
                                                <td>Haley maya</td>
                                            </tr>

                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Page Five</NavLink></td>
                                                <td>Category Two</td>
                                                <td>Austen Paige</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <NavLink className="btn btn-default" to="/pages">View All Pages</NavLink>
                                    <hr />







                                </div>

                                <div className="col-md-12">
                                    <h3>Latest Users</h3>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Group</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <tr>
                                                <td><NavLink to="/user">Austen Paige</NavLink></td>
                                                <td>paige@info.com</td>
                                                <td>Admin</td>
                                            </tr>
                                            <tr>
                                                <td><NavLink to="/user">Vicky Nash</NavLink></td>
                                                <td>vicky@info.com</td>
                                                <td>Admin</td>
                                            </tr>

                                            <tr>
                                                <td><NavLink to="/user">John Wick</NavLink></td>
                                                <td>wick@info.com</td>
                                                <td>Registered</td>
                                            </tr>

                                            <tr>
                                                <td><NavLink to="/user">Haley maya</NavLink></td>
                                                <td>maya@info.com</td>
                                                <td>Admin</td>
                                            </tr>

                                            <tr>
                                                <td><NavLink to="/user">Jenni lora</NavLink></td>
                                                <td>jenni@info.com</td>
                                                <td>Registered</td>
                                            </tr> */}

                                            {
                                                users.map((user) => {
                                                    return (
                                                        <tr className='p-2'>
                                                            <td><NavLink to="/users/user">{user.email}</NavLink></td>
                                                            <td>{user.email}</td>
                                                            <td>{user.email}</td>
                                                            {/* <td><button className='btn btn-default bi bi-trash3-fill p-2' onClick={() => deleteHandler(user._id)}></button></td> */}
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                    <NavLink className="btn btn-default" to="/users">View All Users</NavLink>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </section >

            <Footer/>
        </>
    );
};

export default Dashboard;
