

import React, { useState } from 'react';
import Select from 'react-select';

export default function UserModal() {
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
                            <h3 className="modal-title d-flex justify-content-center" id="exampleModalLabel">Add New User</h3>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fullName" className="col-form-label">*Full Name:</label>
                                    <input type="text" className="form-control" id="fullName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">*Email:</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-form-label">*Password:</label>
                                    <input type="password" className="form-control" id="password" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="group" className="col-form-label">*Group:</label>
                                    <input type="text" className="form-control" id="group" required />
                                </div>
                                
                                

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Add User</button>
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
