import React from 'react'


function Navbar() {
  return (
    <div>
   <div>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" style={{fontFamily:"Aharoni Bold"}} href="/">Make Your <span style={{color:"red"}}>Image</span> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='colllapse navbar-collapse'></div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="/">Edit Image</a>
          </li>
         
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PDF Tools
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Compress Pdf</a></li>
              <li><a className="dropdown-item" href="#">JPG to Pdf</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Merge Pdf</a></li>
            </ul>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/">Compress Pdf</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">JPG to Pdf</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Merge Pdf</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact Us</a>
          </li>
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

    </div>

    
  )
}

export default Navbar