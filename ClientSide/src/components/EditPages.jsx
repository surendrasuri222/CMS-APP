export default function EditPages() {
    return (
        <div className="border border dark rounded container-fluid w-50 shadow-lg p-3 mb-5 bg-white rounded">
            <form>
                <h2>Edit Pages</h2>
                <div className="form-group">
                    <label htmlFor="firstName" className="col-form-label">Page Title</label>
                    <input type="text" className="form-control" id="firstname" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="col-form-label">Category</label>
                    <input type="text" className="form-control" id="lastname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-form-label">Author</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="interests" className="col-form-label">Description</label>
                    <textarea className="form-control" id="interests" rows="5" placeholder="Enter your description"></textarea>
                </div>
                <div className="container-fluid">
                    <button className="btn btn-secondary me-2">Close</button><button className="btn btn-primary">Add Page</button>
                </div>
            </form>
        </div>
    )
}
