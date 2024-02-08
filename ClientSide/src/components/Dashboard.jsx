import React from 'react';
import { NavLink } from 'react-router-dom';
import VerticalNav from './VerticalNav';
import 'bootstrap/dist/css/bootstrap.min.css';
const Dashboard = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <VerticalNav />
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                <h1 className="page-header">
                                    <i className="glyphicon glyphicon-dashboard"></i> Dashboard
                                </h1>

                                <div className="col-md-12">
                                    <h3>Latest Books</h3>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Book Title</th>
                                                <th>Category</th>
                                                <th>Author</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Book One</NavLink></td>
                                                <td>Category One</td>
                                                <td>John Wick</td>
                                            </tr>
                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Book Three</NavLink></td>
                                                <td>Category One</td>
                                                <td>Jenni lora</td>
                                            </tr>

                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Book Four</NavLink></td>
                                                <td>Category Three</td>
                                                <td>Haley maya</td>
                                            </tr>

                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Book Five</NavLink></td>
                                                <td>Category Two</td>
                                                <td>Austen Paige</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <NavLink className="btn btn-default" to="/books">View All Books</NavLink>
                                    <hr />




                                </div>

                                <div className="col-md-12">
                                    <h3>Latest Users</h3>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Group</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
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
                                            </tr>

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

            <footer className="text-center">
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    );
};

export default Dashboard;
