
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getSortedPages } from '../apiService/pageApiService';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryCounts, setCategoryCounts] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {

    //     // Fetching the data using axios
    //     axios.get("http://localhost:4000/api/users/id")
    //         .then((users) => {
    //             setUsers(users.data)
    //             // console.log(users)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //     // console.log(users)

    // }, []);
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSortedPages();
                setPages(response);
            } catch (error) {
                console.error("Error fetching Pages:", error.message);
            }
        };
        fetchData([currentPage]);
    }, [currentPage]);

    useEffect(() => {
        // Fetching the data using axios
        axios.get("http://localhost:4000/api/categories/id")
            .then((categories) => {
                console.log(categories.data);
                // Filter out duplicate categories
                const uniqueCategories = Array.from(new Set(categories.data.map(category => category.category)));
                setCategories(uniqueCategories);
                // console.log("Categories" + categories.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    useEffect(() => {
        // Fetching the data using axios
        axios.get("http://localhost:4000/api/categories/count")
            .then((count) => {
                console.log(count.data);
                const countsMap = count.data.reduce((map, categoryCount) => {
                    map[categoryCount._id] = categoryCount.totalPages;
                    return map;
                }, {});

                // Update the category counts while preserving sorting order
                const updatedCounts = categories.map(category => ({ _id: category, totalPages: countsMap[category] || 0 }));

                setCategoryCounts(updatedCounts);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [categories]);



    // const itemsToShow = 5;
    // const totalItems = pages.length;
    // const totalPages = Math.ceil(totalItems / itemsToShow);
    // const startIndex = (currentPage - 1) * itemsToShow;
    // const endIndex = startIndex + itemsToShow;
    // const displayedPages = pages.slice(startIndex, endIndex);

    return (
        <>
            <section>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded p-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <h1 className="page-header">
                                    <i className="glyphicon glyphicon-dashboard"></i> Dashboard
                                </h1>

                                <div className="col-md-12">
                                    <h3>Latest Pages</h3>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Page Title</th>
                                                <th>Category</th>
                                                <th>Author</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <tr>
                                                <td><NavLink to="/pages/page">Sample Page One</NavLink></td>
                                                <td>Category One</td>
                                                <td>John Wick</td>
                                            </tr>
                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Page Three</NavLink></td>
                                                <td>Category One</td>
                                                <td>Jenni lora</td>
                                            </tr>
 
                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Page Four</NavLink></td>
                                                <td>Category Three</td>
                                                <td>Haley maya</td>
                                            </tr>
 
                                            <tr>
                                                <td><NavLink to="/pages/page">Sample Page Five</NavLink></td>
                                                <td>Category Two</td>
                                                <td>Austen Paige</td>
                                            </tr> */}
                                            {pages.map((item) => (
                                                <tr key={item._id}>
                                                    <td><NavLink to={`/page/${item._id}`}>{item.PageTitle}</NavLink></td>
                                                    <td>{item.category}</td>
                                                    <td>{item.director}</td>
                                                    {/* <td>
                                                        <button className="btn btn-default bi bi-pencil-square p-2 me-2" onClick={() => editHandler(item._id)}></button>
                                                        <button onClick={() => deleteHandler(item._id)} className='btn btn-default bi bi-trash3-fill p-2'></button>
                                                    </td> */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <NavLink className="btn btn-default" to="/pages">View All Pages</NavLink>
                                    <hr />







                                </div>

                                <div className="col-md-12">
                                    <h3>Latest Categories</h3>
                                    <table id="sort-table" className="table table-striped tablesorter table-hover">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Category Title
                                                    {/* <i className="glyphicon glyphicon-chevron-down"></i> */}
                                                </th>
                                                <th className='text-center'>
                                                    Total Pages
                                                    {/* <i className="glyphicon glyphicon-chevron-down"></i> */}
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

                                            {/* {
                                                users.map((user) => {
                                                    return (
                                                        <tr className='p-2'>
                                                            <td><NavLink to="/users/user">{user.email}</NavLink></td>
                                                            <td>{user.email}</td>
                                                            <td>{user.email}</td>
                                                            <td><button className='btn btn-default bi bi-trash3-fill p-2' onClick={() => deleteHandler(user._id)}></button></td>
                                                        </tr>
                                                    )
                                                })
                                            } */}

                                        </tbody>
                                    </table>
                                    <NavLink className="btn btn-default" to="/categories">View All Categories</NavLink>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </section >

            <Footer />
        </>
    );
};

export default Dashboard;
