import React, { useEffect } from 'react'
import $ from "jquery";
import "tablesorter";
import VerticalNav from './VerticalNav';

import { NavLink } from 'react-router-dom';


const Users = () => {

    useEffect(() => {
        $("#sort-table").tablesorter({
            sortList: [[0, 0], [1, 0]]
        });
    }, []);


    return (
        <>
            <section>
                <div class="container">
                    <div class="row">
                        <div className="row">
                            <div className="col-md-4">
                                <VerticalNav />
                            </div>

                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h1 class="page-header"><i class="glyphicon glyphicon-user"></i> Users</h1>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="btn-group actions" role="group" aria-label="...">
                                            {/* New - Modal Button */}
                                            <button type="button" className="btn btn-primary shadow - lg" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i className="glyphicon glyphicon-plus"></i> New</button>

                                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form>
                                                                <div className="form-group">
                                                                    <label htmlFor="fullName" className="col-form-label">Full Name:</label>
                                                                    <input type="text" className="form-control" id="fullName" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                                                    <input type="email" className="form-control" id="email" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="age" className="col-form-label">Age:</label>
                                                                    <input type="number" className="form-control" id="age" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="gender" className="col-form-label">Gender:</label>
                                                                    <select className="form-control" id="gender">
                                                                        <option>Select</option>
                                                                        <option>Male</option>
                                                                        <option>Female</option>
                                                                        <option>Other</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="interests" className="col-form-label">Interests:</label>
                                                                    <textarea className="form-control" id="interests" rows="5" placeholder="Enter your interests"></textarea>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Add User</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <ol class="breadcrumb">
                                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                    <li class="active">Users</li>
                                </ol>

                                <table id="sort-table" class="table table-striped tablesorter">
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" /></th>
                                            <th>Full Name <i class="glyphicon glyphicon-chevron-down"></i></th>
                                            <th>Email <i class="glyphicon glyphicon-chevron-down"></i></th>
                                            <th>Group <i class="glyphicon glyphicon-chevron-down"></i></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td><NavLink to="/users/user">Austin DJ</NavLink></td>
                                            <td>paige@info.com</td>
                                            <td>Admin</td>
                                        </tr>

                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td><NavLink to="/users/user">Vicky Nash</NavLink></td>
                                            <td>vicky@info.com</td>
                                            <td>Admin</td>
                                        </tr>

                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td><NavLink to="/users/user">John Wick</NavLink></td>
                                            <td>wick@info.com</td>
                                            <td>Registered</td>
                                        </tr>

                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td><NavLink to="/users/user">Jenni lora</NavLink></td>
                                            <td>jenni@info.com</td>
                                            <td>Registered</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Users
