export default function EditUsers() {
    return (
        <div className="border border dark rounded container-fluid w-50 shadow-lg p-3 mb-5 bg-white rounded">
            <form>
                <h2>Edit Users</h2>
                <div className="form-group">
                    <label htmlFor="firstName" className="col-form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="col-form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="col-form-label">Age</label>
                    <input type="number" className="form-control" id="age" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className="col-form-label">Gender</label>
                    <select className="form-control" id="gender">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="interests" className="col-form-label">Interests</label>
                    <textarea className="form-control" id="interests" rows="5" placeholder="Enter your interests"></textarea>
                </div>
                <div className="container-fluid">
                    <button className="btn btn-secondary me-2">Close</button><button className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    )
}
