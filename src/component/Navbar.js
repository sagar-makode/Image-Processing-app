import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
<div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="m-0">Make My Image</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/editimage" className="nav-item nav-link">Edit Image</Link>
                        <div className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">PDF Tools</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/imagetopdf" className="dropdown-item">Image To PDF</Link>
                                <Link to="/pdftoimg" className="dropdown-item">PDF to Image</Link>
                                <Link to="/" className="dropdown-item">Resize Pdf</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Latest Form</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/" className="dropdown-item">Diploma Admission</Link>
                                <Link to="/" className="dropdown-item">ITI Admission</Link>
                                <Link to="/" className="dropdown-item">Medical Admission</Link>
                            </div>
                        </div>
                        <Link to="/" className="nav-item nav-link">Contact</Link>
                        <Link to="/" className="nav-item nav-link">About</Link>

                    </div>
                    <Link to="/" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Sign In</Link>
                </div>
            </nav>
            

            
        </div>

    </div>

    
  )
}

export default Navbar