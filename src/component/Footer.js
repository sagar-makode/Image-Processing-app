import React from 'react'

function Footer() {
  return (
    <div className="container-xxl container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <a className="btn btn-link" href="/">About Us</a>
                        <a className="btn btn-link" href="/">Contact Us</a>
                        <a className="btn btn-link" href="/">Privacy Policy</a>
                        <a className="btn btn-link" href="/">Terms & Condition</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Tools<span></span></p>
                        <a className="btn btn-link" href="/">Edit Image</a>
                        <a className="btn btn-link" href="/">PDF Compressor</a>
                        <a className="btn btn-link" href="/">Image To PDF</a>
                        <a className="btn btn-link" href="/">Merge PDF</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Latest Form<span></span></p>
                        <a className="btn btn-link" href="/">Diploma Admission</a>
                        <a className="btn btn-link" href="/">12th Admission</a>
                        <a className="btn btn-link" href="/">ITI Admission</a>
                        <a className="btn btn-link" href="/">Medical Admission</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Contact<span></span></p>
                        {/* <p><i className="fa fa-map-marker-alt me-3"></i>Location, City, Country</p> */}
                        {/* <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p> */}
                        <p><i className="fa fa-envelope me-3"></i>makemyimage@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    
                    {/* <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-1.jpg" alt="Iage"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-2.jpg" alt="age"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-3.jpg" alt="age"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-4.jpg" alt="age"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-5.jpg" alt="age"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-6.jpg" alt="age"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{height: "48px"}}/>
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="/">MakemyImage</a>, All Right Reserved. 
							
							
							Designed By <a className="border-bottom" href="/">MakemyImage</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="/">Home</a>
                                <a href="/">Cookies</a>
                                <a href="/">Help</a>
                                <a href="/">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer