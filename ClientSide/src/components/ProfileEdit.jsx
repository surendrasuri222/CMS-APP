import React, { useState } from 'react';
import Select from 'react-select';

export default function ProfileEdit() {
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
        <div className='border border dark rounded container-fluid w-50 shadow-lg p-3 mb-5 bg-white rounded'>
            <h3 className="text-center mb-4">Edit Profile</h3>
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
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
}
