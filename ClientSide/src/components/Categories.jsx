import React from 'react';
import VerticalNav from './VerticalNav';

export default function Categories() {
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
                                <div className="col-md-6">
                                    <h1 className="book-header">
                                        <i className="glyphicon glyphicon-folder-open"></i> Categories
                                    </h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="btn-group actions" role="group" aria-label="...">
                                        <a href="#" type="button" className="btn btn-default ">
                                            <i className="glyphicon glyphicon-plus"></i> New
                                        </a>
                                        <a href="#" type="button" className="btn btn-default">
                                            <i className="glyphicon glyphicon-pencil"></i> Edit
                                        </a>
                                        <a href="#" type="button" className="btn btn-default">
                                            <i className="glyphicon glyphicon-remove"></i> Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <ol className="breadcrumb">
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li className="active">Categories</li>
                            </ol>

                            <table id="sort-table" className="table table-striped tablesorter">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>
                                            Category Title
                                            <i className="glyphicon glyphicon-chevron-down"></i>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><a href="/category">Sample Category One</a></td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><a href="/category">Sample Category Two</a></td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><a href="/category">Sample Category Three</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <nav aria-label="Book navigation">
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

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    )

}