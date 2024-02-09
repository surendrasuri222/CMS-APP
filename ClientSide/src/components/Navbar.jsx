import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav flex flex-row  d-flex justify-content-center">
                            <li><a class="navbar-brand" href="#">DCX CMS</a></li>

                            <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                            <li><NavLink to="/pages" exact activeClassName="active">Pages</NavLink></li>

                            <li><NavLink to="/categories" exact activeClassName="active">Categories</NavLink></li>
                            <li><NavLink to="/users" exact activeClassName="active">Users</NavLink></li>
                        </ul>
                        <form className="navbar-form navbar-left  d-flex justify-content-center" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right flex flex-row  d-flex justify-content-center">
                            <li><NavLink to="/userprofile" activeClassName="active">My Profile</NavLink></li>
                            <li><button className='btn btn-primary' onClick={handleLogOut}>Logout</button></li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )

}


export default Navbar;