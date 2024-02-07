import React from "react"
import { NavLink } from "react-router-dom";
const VerticalNav = ({ activeNavItem, onNavItemClick }) => {

    return (
        <>
            <div class="container">
                <div className="col-md-4">
                    <div className="list-group">

                        <NavLink to="/dashboard" className="list-group-item">
                            <i className="glyphicon glyphicon-dashboard"></i> Dashboard
                        </NavLink>
                        <NavLink to="/pages" className="list-group-item">
                            <i className="glyphicon glyphicon-file"></i> Books
                        </NavLink>
                        <NavLink to="/categories" className="list-group-item">
                            <i className="glyphicon glyphicon-folder-open"></i> Categories
                        </NavLink>
                        <NavLink to="/users" className="list-group-item">
                            <i className="glyphicon glyphicon-user"></i> User Accounts
                        </NavLink>
                    </div>

                </div>
            </div>

        </>
    )
}
export default VerticalNav;