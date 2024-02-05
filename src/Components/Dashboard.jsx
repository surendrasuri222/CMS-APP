import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="list-group">
                                <a href="index.html" className="list-group-item active"
                                ><i className="glyphicon glyphicon-dashboard"></i> Dashboard</a
                                >
                                <a href="pages.html" className="list-group-item"
                                ><i className="glyphicon glyphicon-file"></i> Pages</a
                                >
                                <a href="categories.html" className="list-group-item"
                                ><i className="glyphicon glyphicon-folder-open"></i> Categories</a
                                >
                                <a href="users.html" className="list-group-item"
                                ><i className="glyphicon glyphicon-user"></i> User Accounts</a
                                >
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
                                    <td><a href="page.html">Sample Page One</a></td>
                                    <td>Category One</td>
                                    <td>John Wick</td>
                                </tr>

                                <tr>
                                    <td><a href="page.html">Sample Page Two</a></td>
                                    <td>Category Two</td>
                                    <td>Vicky Nash</td>
                                </tr>

                                <tr>
                                    <td><a href="page.html">Sample Page Three</a></td>
                                    <td>Category One</td>
                                    <td>Jenni lora</td>
                                </tr>

                                <tr>
                                    <td><a href="page.html">Sample Page Four</a></td>
                                    <td>Category Three</td>
                                    <td>Haley maya</td>
                                </tr>

                                <tr>
                                    <td><a href="page.html">Sample Page Five</a></td>
                                    <td>Category Two</td>
                                    <td>Austen Paige</td>
                                </tr>
                            </table>
                            <a className="btn btn-default" href="pages.html">View All Pages</a>
                            <hr />

                            <h3>Latest Users</h3>
                            <table className="table table-striped">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Group</th>
                                </tr>

                                <tr>
                                    <td><a href="user.html">Austen Paige</a></td>
                                    <td>paige@info.com</td>
                                    <td>Admin</td>
                                </tr>

                                <tr>
                                    <td><a href="user.html">Vicky Nash</a></td>
                                    <td>vicky@info.com</td>
                                    <td>Admin</td>
                                </tr>

                                <tr>
                                    <td><a href="user.html">John Wick</a></td>
                                    <td>wick@info.com</td>
                                    <td>Registered</td>
                                </tr>

                                <tr>
                                    <td><a href="user.html">Haley maya</a></td>
                                    <td>maya@info.com</td>
                                    <td>Admin</td>
                                </tr>

                                <tr>
                                    <td><a href="user.html">Jenni lora</a></td>
                                    <td>jenni@info.com</td>
                                    <td>Registered</td>
                                </tr>
                            </table>
                            <a className="btn btn-default" href="users.html">View All Users</a>
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

