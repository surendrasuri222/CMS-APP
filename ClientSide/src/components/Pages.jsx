import React, { useState } from 'react';
import VerticalNav from './VerticalNav';
import PageModal from './PageModal';
import { NavLink } from 'react-router-dom';


const Pages = () => {

    const [pages, setBooks] = useState([{
        BookTitle: "DomyData", Category: "Domp", Author: "Sorab"
    }, {
        BookTitle: "DomyData", Category: "Domp", Author: "Sorab"
    }])

    return (
        <>
            <section>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded p-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="page-header"><i className="glyphicon glyphicon-file"></i> Pages</h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="btn-group actions" role="group" aria-label="...">

                                        {/* New Modal For Creating Pages */}
                                        <PageModal />
                                    </div>
                                </div>
                            </div>

                            <ol className="breadcrumb">
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li className="active">Pages</li>
                            </ol>

                            <table id="sort-table" className="table table-striped tablesorter table-hover">
                                <thead>
                                    <tr>
                                        <th>Page Title <i className="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Category <i className="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Author <i className="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Action <i className="glyphicon glyphicon-chevron-down"></i></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        pages.map((page) => {
                                            return (
                                                <tr className='p-2'>
                                                    <td>{page.BookTitle}</td>
                                                    <td>{page.Category}</td>
                                                    <td>{page.Author}</td>
                                                    <td><NavLink to="/pages/edit"><button className="btn btn-default bi bi-pencil-square p-2 me-2" ></button></NavLink><button className='btn btn-default bi bi-trash3-fill p-2 '></button></td>
                                                </tr>)

                                        })
                                    }
                                </tbody>
                            </table>

                            <div className='d-flex justify-content-center h-2'>
                                <nav aria-label="Page navigation">
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
                </div>

            </section>
            <footer className="text-center">
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Pages
