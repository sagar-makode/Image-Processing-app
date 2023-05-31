import React from 'react'
import imagecomp from  "../asset/imagecomp.png"
import pdfcomp from  "../asset/pdfcomp.png"
import homeImg from  "../asset/newhome.jpg"


import './Home.css'


import { useNavigate } from "react-router-dom"

// const imageurl = "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"





function Home() {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate('/editimage')
  }

  return (
    <>

      <div style={{ position: "relative" , textAlign:"center"}}>
        <img className='photo' src={homeImg} alt='homeImg' />

        {/* <h1>Make Your document Here</h1> */}

      </div>

      <div className="container1 container my-3 ">

        <div className="row">

          <div className='col-md-4 col-sm-6 col-lg-3'>

            <div className="card m-3 p-3 card1" onClick={handelClick}>

              <img src={imagecomp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Compress Image</h5>

                <p className="card-text">Change Your Image Size With High Quality</p>



              </div>
            </div>
            </div>
            <div className='col-md-4 col-sm-6 col-lg-3'>

              <div className="card m-3 p-3 ">

                <img src={pdfcomp} className="card-ing-top" alt="..." />

                <div className="card-body">

                  <h5 className="card-title">PDF Compressor</h5>

                  <p className="card-text">Change Your PDF Size With High Quality</p>


                </div>

              </div>

            </div>

            <div className='col-md-4 col-sm-6 col-lg-3'> <div className="card m-3 p-3">

              <img src={imagecomp} className="card-img-top" alt="..." />
              <div className="card-body">

                <h5 className="card-title">JPG To PDF</h5>

                <p className="card-text">Convert Your Image To PDF</p> {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}

              </div> </div>

            </div>
            

            <div className='col-md-4 col-sm-6 col-lg-3' >

              <div className="card m-3 p-3 col"> <img src={pdfcomp} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">Merge PDF</h5>

                  <p className="card-text">Add Your 2-3 Pdf In 1 Pdf</p>
                  {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}

                </div>
              </div>
            </div>
          </div >
        </div >
        


      </>


      )
}

      export default Home