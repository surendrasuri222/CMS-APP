import React, { useEffect, useState } from 'react';
import $ from "jquery";
import "tablesorter";
import Footer from './Footer';
import axios from 'axios';

export default function Categories() {

    useEffect(() => {
        $("#sort-table").tablesorter({
            sortList: [[0, 0], [1, 0]]
        });
    }, []);

    const [categoryCounts, setCategoryCounts] = useState([]);

    useEffect(() => {
        // Fetching the data using axios
        axios.get("http://localhost:4000/api/categories/count")
            .then((count) => {
                console.log(count.data);
                setCategoryCounts(count.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetching the data using axios
        axios.get("http://localhost:4000/api/categories")
            .then((categories) => {
                console.log(categories.data);
                // Filter out duplicate categories
                const uniqueCategories = Array.from(new Set(categories.data.map(category => category.category)));
                setCategories(uniqueCategories);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <section>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded p-5">
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
                                    {
                                        categories.map((category, index) => (
                                            <tr key={index} className='p-2'>
                                                <td>{category}</td>
                                                <td className='text-center'>{categoryCounts[index] ? categoryCounts[index].totalPages : 0}</td>
                                            </tr>
                                        ))
                                    }
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
            <Footer />
        </>
    );
}