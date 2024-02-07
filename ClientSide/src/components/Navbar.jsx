import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
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
                        <ul class="nav navbar-nav navbar-right flex flex-row  d-flex justify-content-center">
                            <li class="dropdown">
                                <a
                                    href="#"
                                    // class="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-expanded="false"
                                >My Account <span class="caret"></span
                                ></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Profile</a></li>
                                    <li><NavLink to="/logout">Logout</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/">Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )

}


export default Navbar;