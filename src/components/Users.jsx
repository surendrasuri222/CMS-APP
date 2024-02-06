import React, { useEffect } from 'react'
import $ from "jquery";
import "tablesorter";

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
                        <div class="col-md-4">
                            <div class="list-group">
                                <a href="index.html" class="list-group-item"><i class="glyphicon glyphicon-dashboard"></i> Dashboard</a>
                                <a href="pages.html" class="list-group-item "><i class="glyphicon glyphicon-file"></i> Pages</a>
                                <a href="categories.html" class="list-group-item"><i class="glyphicon glyphicon-folder-open"></i> Categories</a>
                                <a href="users.html" class="list-group-item active"><i class="glyphicon glyphicon-user"></i> User Accounts</a>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <h1 class="page-header"><i class="glyphicon glyphicon-user"></i> Users</h1>
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
            </section>

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Users
