import React, { useEffect, useState } from 'react';
// import Select from 'react-select';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import $ from "jquery";

export default function UserModal() {


    // const [showModal, setShowModal] = useState(false);

    // const handleCloseModal = () => {
    //     setShowModal(false);
    // };

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
        // group: ""
    })
    // useEffect(() => {
    //     fetchUsers();
    // })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        console.log(event.target.value);
    }
    // const fetchUsers = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:4000/api/users");
    //         setUser(response.data); // Update user list state
    //     } catch (error) {
    //         console.error("Error fetching users:", error);
    //     }
    // };

    // const [refresh, setRefresh] = useState(false);

    const addUser = () => {

        axios.post("http://localhost:4000/api/users/add", user)
            .then((users) => {
                console.log(users)
                alert(`User created successfully`)
            })
            .catch((err) => {
                if (err.response && err.response.status === 400 && err.response.data === `User already exists`) {
                    alert(`User already exists`);
                }
                else {
                    console.log(`User cannot be added: ${err}`)
                }

            })
        setUser({
            name: "",
            email: "",
            password: ""
        })
    }
    const [interests, setInterests] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const handleInterestChange = (selectedOptions) => {
        console.log(selectedOptions);
        setInterests(selectedOptions.map(option => option.value));
    };

    const interestOptions = [
        { value: 'Sports', label: 'Sports' },
        { value: 'Music', label: 'Music' },
        { value: 'Art', label: 'Art' },
        { value: 'Reading', label: 'Reading' },
        { value: 'Cooking', label: 'Cooking' }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        if (form.checkValidity()) {
            // All required fields are filled, proceed with form submission
            console.log('Form submitted:', formData);
        } else {
            // Some required fields are not filled, show pop-up message
            setShowPopup(true);
        }
    };

    return (
        <>
            <button type="button" className="btn btn-primary shadow-lg" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i className="glyphicon glyphicon-plus"></i> New</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title d-flex mx-auto" id="exampleModalLabel">Add New User</h3>

                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fullName" className="col-form-label">*Full Name:</label>
                                    <input type="text" className="form-control" id="fullName" name="name" value={user.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">*Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-form-label">*Password:</label>
                                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleChange} required />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="group" className="col-form-label">*Group:</label>
                                    <input type="text" className="form-control" id="group" name="group" value={user.group} onChange={handleChange} />
                                </div> */}



                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary" onClick={addUser}>Add User</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Please fill in all required fields.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}
