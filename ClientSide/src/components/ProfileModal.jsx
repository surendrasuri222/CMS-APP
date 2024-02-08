

import React, { useState } from 'react';
import Select from 'react-select';

export default function UserModal() {
    const [interests, setInterests] = useState([]);

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

    return (
        <>
            <button type="button" className="btn btn-primary shadow-lg" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i className="bi bi-pencil-square"></i> Edit </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title d-flex mx-auto" id="exampleModalLabel">Edit Profile</h3>

                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="fullName" className="col-form-label">Full Name:</label>
                                    <input type="text" className="form-control" id="fullName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age" className="col-form-label">Age:</label>
                                    <input type="number" className="form-control" id="age" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender" className="col-form-label">Gender:</label>
                                    <select className="form-control" id="gender">
                                        <option>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="interests" className="col-form-label">Interests:</label>
                                    <Select
                                        id="interests"
                                        isMulti
                                        options={interestOptions}
                                        onChange={handleInterestChange}
                                        closeMenuOnSelect={false}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
