import React, { useEffect } from 'react'
import $ from "jquery";
import "tablesorter";

const Pages = () => {
    
    useEffect(() => {
        $("#sort-table").tablesorter({
            sortList: [[0, 0], [1, 0]]
        });
    }, []);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="list-group">
                                <a href="index.html" className="list-group-item"><i className="glyphicon glyphicon-dashboard"></i> Dashboard</a>
                                <a href="pages.html" className="list-group-item "><i className="glyphicon glyphicon-file"></i> Pages</a>
                                <a href="categories.html" className="list-group-item"><i className="glyphicon glyphicon-folder-open"></i> Categories</a>
                                <a href="users.html" className="list-group-item active"><i className="glyphicon glyphicon-user"></i> User Accounts</a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="page-header"><i className="glyphicon glyphicon-user"></i> Users</h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="btn-group actions" role="group" aria-label="...">
                                        <a href="#" type="button" className="btn btn-default"><i className="glyphicon glyphicon-plus"></i> New</a>
                                        <a href="#" type="button" className="btn btn-default"><i className="glyphicon glyphicon-pencil"></i> Edit</a>
                                        <a href="#" type="button" className="btn btn-default"><i className="glyphicon glyphicon-remove"></i> Delete</a>
                                    </div>
                                </div>
                            </div>

                            <ol className="breadcrumb">
                                <li><a href="index.html">Dashboard</a></li>
                                <li className="active">Users</li>
                            </ol>

                            <table id="sort-table" className="table table-striped tablesorter">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Full Name <i className="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Email <i className="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Group <i className="glyphicon glyphicon-chevron-down"></i></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><a href="user.html">Austen Paige</a></td>
                                        <td>paige@info.com</td>
                                        <td>Admin</td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><a href="user.html">Vicky Nash</a></td>
                                        <td>vicky@info.com</td>
                                        <td>Admin</td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><a href="user.html">John Wick</a></td>
                                        <td>wick@info.com</td>
                                        <td>Registered</td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><a href="user.html">Jenni lora</a></td>
                                        <td>jenni@info.com</td>
                                        <td>Registered</td>
                                    </tr>
                                </tbody>
                            </table>

                            <nav aria-label="Page navigation">
                                <ul className="pagination">
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
        </>
    )
}

export default Pages
