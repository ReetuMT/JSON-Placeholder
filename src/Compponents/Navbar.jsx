import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function Navbar() {
    const changeBackgroud = ()=>{
        <style>
            background:red
        </style>
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">JSON Place Holder</a>
                </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={changeBackgroud}></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/comments" onClick={changeBackgroud}>Comments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/photos" onClick={changeBackgroud}>Photos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/users" onClick={changeBackgroud}>Users</Link>
                            </li> 
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar
