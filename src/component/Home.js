import React from 'react'
import img from "./img/hero.png"
import { Link,useNavigate } from 'react-router-dom'




function Home() {
  const navigate = useNavigate();






  return (
    <>

      <div className="container-xxl bg-white p-0">
        
       
        <div className="container-xxl bg-primary hero-header">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">Make Your Image / PDF Without Losing Quality</h1>
                            <p className="text-white pb-3 animated slideInDown">In this service that helps you improve your images and PDF documents without reducing their visual appeal. It allows you to make changes like reducing file size, resizing images, converting formats, and compressing PDFs while ensuring the content looks great.</p>
                            <Link to="/" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</Link>
                            <Link to="/" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid animated zoomIn" src= {img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s"  onClick={() => navigate('/editimage')}>
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-solid fa-image fa-flip text-primary mb-4"></i>
                  <h5 className="mb-3">Compress Image</h5>
                  <p className="m-0">Reduce Your Image Size Using This Tool</p>
                </div>
              </div>
              
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-solid fa-file-pdf text-primary mb-4"></i>
                  <h5 className="mb-3">PDF Compressor</h5>
                  <p className="m-0">Reduce Your PDF Size Using This Tool</p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s"onClick={() => navigate('/imagetopdf')}>
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-regular fa-object-group text-primary mb-4"></i>
                  <h5 className="mb-3">Image To PDF</h5>
                  <p className="m-0">Convert one or More Image in PDF </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Years Experience</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Team Members</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Satisfied Clients</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Compleate Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Forms<span></span></p>
                    <h1 className="text-center mb-5">Make your image As Per Required from</h1>
                    <h4 className="text-center mb-5">Just Upload Your Image or Pdf and Download</h4>

                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-duotone fa-id-card fa-2x"></i>
                            </div>
                            <h5 className="mb-3">NSDL PAN CARD</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-regular fa-id-card fa-2x"></i>
                            </div>
                            <h5 className="mb-3">UTI PAN CARD</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-facebook-f fa-2x"></i>
                            </div>
                            <h5 className="mb-3">VOTER ID CARD</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="/imagetopdf"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mail-bulk fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Email Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-thumbs-up fa-2x"></i>
                            </div>
                            <h5 className="mb-3">PPC Advertising</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fab fa-android fa-2x"></i>
                            </div>
                            <h5 className="mb-3">App Development</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <Link className="btn btn-square" to="/"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

       
        <Link to="/" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
   

      </div>


    </>


  )
}

export default Home