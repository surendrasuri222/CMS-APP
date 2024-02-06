import React from 'react'
import { NavLink } from 'react-router-dom'


const Dashboard = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="list-group">
                                <NavLink to="/dashboard" className="list-group-item active"
                                ><i className="glyphicon glyphicon-dashboard"></i> Dashboard</NavLink>
                                <NavLink to="/pages" className="list-group-item"
                                ><i className="glyphicon glyphicon-file"></i> Pages</NavLink>
                                <NavLink to="/categories" className="list-group-item"
                                ><i className="glyphicon glyphicon-folder-open"></i> Categories</NavLink>
                                <NavLink to="/users" className="list-group-item"
                                ><i className="glyphicon glyphicon-user"></i> User Accounts</NavLink>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="page-header">
                                <i className="glyphicon glyphicon-dashboard"></i> Dashboard
                            </h1>
                            <h3>Latest Pages</h3>
                            <table className="table table-striped">
                                <tr>
                                    <th>Page Title</th>
                                    <th>Category</th>
                                    <th>Author</th>
                                </tr>

                                <tr>
                                    <td><NavLink to="/pages">Sample Page One</NavLink></td>
                                    <td>Category One</td>
                                    <td>John Wick</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/pages">Sample Page Two</NavLink></td>
                                    <td>Category Two</td>
                                    <td>Vicky Nash</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/pages">Sample Page Three</NavLink></td>
                                    <td>Category One</td>
                                    <td>Jenni lora</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/pages">Sample Page Four</NavLink></td>
                                    <td>Category Three</td>
                                    <td>Haley maya</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/pages">Sample Page Five</NavLink></td>
                                    <td>Category Two</td>
                                    <td>Austen Paige</td>
                                </tr>
                            </table>
                            <NavLink className="btn btn-default" to="/pages">View All Pages</NavLink>
                            <hr />

                            <h3>Latest Users</h3>
                            <table className="table table-striped">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Group</th>
                                </tr>

                                <tr>
                                    <td><NavLink to="/users">Austen Paige</NavLink></td>
                                    <td>paige@info.com</td>
                                    <td>Admin</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/users">Vicky Nash</NavLink></td>
                                    <td>vicky@info.com</td>
                                    <td>Admin</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/users">John Wick</NavLink></td>
                                    <td>wick@info.com</td>
                                    <td>Registered</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/users">Haley maya</NavLink></td>
                                    <td>maya@info.com</td>
                                    <td>Admin</td>
                                </tr>

                                <tr>
                                    <td><NavLink to="/users">Jenni lora</NavLink></td>
                                    <td>jenni@info.com</td>
                                    <td>Registered</td>
                                </tr>
                            </table>
                            <NavLink className="btn btn-default" to="/users">View All Users</NavLink>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </div>
    )

}


export default Dashboard;

