import React, { useEffect } from 'react';
import $ from "jquery"
import "tablesorter";
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

export default function Categories() {

    useEffect(() => {
        $("#sort-table").tablesorter({
            sortList: [[0, 0], [1, 0]]
        });
    }, []);

    return (
        <>
            <section>
                <div className="container  shadow-lg p-3 mb-5 bg-white rounded p-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="book-header">
                                        <i className="glyphicon glyphicon-folder-open"></i> Categories
                                    </h1>
                                </div>

                            </div>

                            <ol className="breadcrumb">
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li className="active">Categories</li>
                            </ol>

                            <table id="sort-table" className="table table-striped tablesorter table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            Category Title
                                            <i className="glyphicon glyphicon-chevron-down"></i>
                                        </th>
                                        <th className='text-center'>
                                            Count
                                            <i className="glyphicon glyphicon-chevron-down"></i>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>

                                        <td><NavLink to="/Category">Sample Category Two</NavLink></td>
                                        <td className='text-center'>2</td>
                                    </tr>

                                    <tr>

                                        <td><NavLink to="/category">Sample Category One</NavLink></td>
                                        <td className='text-center'>4</td>
                                    </tr>

                                    <tr>

                                        <td><NavLink to="/category">Sample Category Three</NavLink></td>
                                        <td className='text-center'>3</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="d-flex justify-content-center h-2 ">
                                <nav className='mx-auto p-2' aria-label="Book navigation">
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
                </div>
            </section>

            <Footer/>
        </>
    )

}