import React from 'react'


function Navbar() {
  return (
    <div>
<div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0">Make My Image</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/editimage" className="nav-item nav-link">Edit Image</a>
                        <div className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">PDF Tools</a>
                            <div className="dropdown-menu m-0">
                                <a href="/imagetopdf" className="dropdown-item">Image To Pdf</a>
                                <a href="/" className="dropdown-item">Merge Pdf</a>
                                <a href="/" className="dropdown-item">Resize Pdf</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Latest Form</a>
                            <div className="dropdown-menu m-0">
                                <a href="/" className="dropdown-item">Diploma Admission</a>
                                <a href="/" className="dropdown-item">ITI Admission</a>
                                <a href="/" className="dropdown-item">Medical Admission</a>
                            </div>
                        </div>
                        <a href="/" className="nav-item nav-link">Contact</a>
                        <a href="/" className="nav-item nav-link">About</a>

                    </div>
                    <a href="/" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Sign In</a>
                </div>
            </nav>
            

            
        </div>

    </div>

    
  )
}

export default Navbar