import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import $ from "jquery"
import "tablesorter";


const Category = () => {
    useEffect(() => {
        $("#sort-table").tablesorter({
            sortList: [[0, 0], [1, 0]]
        });
    }, []);

    return (
        <>
            <section>
                <div className="container w-100" >
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-6 w-100">
                                    <h1 className="page-header"><i className="glyphicon glyphicon-file"></i> Category</h1>
                                </div>
                            </div>

                            <ol className="breadcrumb">
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li className="active">Category</li>
                            </ol>

                            <table id="sort-table" className="table table-striped tablesorter table-hover">
                                <thead>
                                    <tr>

                                        <th>Title  <i className="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Category <i className="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Author <i className="glyphicon glyphicon-chevron-down"></i></th>
                                    </tr>
                                </thead>

                                <tbody>
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
                                        <td>Jenni Lora</td>
                                    </tr>
                                    <tr>

                                        <td><a href="page.html">Sample Page Four</a></td>
                                        <td>Category Three</td>
                                        <td>Haley Maya</td>
                                    </tr>
                                    <tr>

                                        <td><a href="page.html">Sample Page Five</a></td>
                                        <td>Category Two</td>
                                        <td>Austen Paige</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="d-flex justify-content-center">
                                <nav aria-label="Page navigation" className=''>

                                    <ul className="pagination">
                                        <li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                                    </ul>
                                </nav>
                            </div>


                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Category