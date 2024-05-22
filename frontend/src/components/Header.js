import React from "react";
import { Link } from "react-router-dom";

function Header(){
    
    
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
                <li className="nav-item">
                
                <Link to="/" className="nav-link">Students</Link>

                </li>

                <li className="nav-item">
                
                <Link to="/I" className="nav-link">Items</Link>

                </li>

                <li className="nav-item">

                <Link to="/add" className="nav-link">Create Student</Link>
                
                </li>

                <li className="nav-item">

                <Link to="/Iadd" className="nav-link">Create item</Link>
                
                </li>
                
            </ul>
            </div>
        </div>
        </nav>

    )

}

export default Header;