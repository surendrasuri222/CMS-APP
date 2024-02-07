import React, { useState } from 'react';
import VerticalNav from './VerticalNav';


const Pages = () => {

    const [pages, setPages] = useState([{
        BookTitle: "DomyData", Category: "Domp", Author: "Sorab"
    }, {
        BookTitle: "DomyData", Category: "Domp", Author: "Sorab"
    }])

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
                                    <h1 className="page-header"><i className="glyphicon glyphicon-file"></i> Pages</h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="btn-group actions" role="group" aria-label="...">
                                        <a href="#" type="button" className="btn btn-default"><i className="glyphicon glyphicon-plus"></i> New</a>
                                    </div>
                                </div>
                            </div>

                            <ol className="breadcrumb">
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li className="active">Pages</li>
                            </ol>

                            <table id="sort-table" className="table table-striped tablesorter">
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
                                                    <td><button className="btn btn-default glyphicon glyphicon-pencil p-2 me-2" >Edit</button><button className='btn btn-default glyphicon glyphicon-remove p-2 '>Delete</button></td>
                                                </tr>)

                                        })
                                    }
                                </tbody>
                            </table>

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

            </section>
        </>
    )
}

export default Pages
