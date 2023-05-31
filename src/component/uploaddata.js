

import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';




class Uploaddata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: "",
      setImage: "",
      selectFile: "",
      crop: {
        aspect: 1 / 1, // Set crop aspect ratio to 1:1
        unit: "px", // Crop dimensions will be in pixels,
        width: 0, // set the initial width of the crop
        height: 0, // set the initial height of the crop
      },
    };
  }


  // handelSelect = (file)=>{
  //   this.setState({selectFile: URL.createObjectURL(file.target.files[0])})


  // }

  handleImageUpload = (event) => {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ imageData: reader.result });
    };
    console.log("Image Uplaoded");
  };
  onCropChange = (crop) => {
    this.setState({ crop: crop });
    console.log(this.state.imageData);
    
  }

  handleImageCrop = (crop) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const image = new Image();
    const { x, y, width, height } = crop;
  image.src = this.state.imageData; // Use imageData instead of selectFile

   
  image.onload = () =>{
    const scalex = image.naturalWidth / image.width;
    const scaley = image.naturalHeight / image.height;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(
      image,
      x * scalex,
      y * scaley,
      width *scalex,
      height * scaley,
      0,
      0,
      width,
      height,
      
    );
  
    const Data = canvas.toDataURL('image/jpeg');
    this.setState({ imageData:Data });
    

  }
   
  };
  



  modifyImage = async (imageData) => {

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const image = new Image();
    const newWidth = 500;
    const newHeight = 300;
    image.src = imageData;
    canvas.width = newWidth;
    canvas.height = newHeight;
    await new Promise((resolve) => { // wait htmlFor image to load before drawing to canvas
      image.onload = () => resolve();
    });

    context.drawImage(image, 0, 0, newWidth, newHeight);

    const modifiedImageData = canvas.toDataURL('image/jpeg');
    return modifiedImageData;



  };

  handleDownload = async () => {
    
    const modifiedImageData = await this.modifyImage(this.state.imageData);
    const link = document.createElement("a");
    link.download = "modified-image.jpg";
    link.href = modifiedImageData;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.location.reload();
  };


  render() {

    return (
      <>
        <div  >

          <div className="container mt-4" style={{ width: "500px" }}>
            <div >
              <h2>Upload File</h2>
              <div className="mb-12  ">
                <label htmlFor="formFile" className="form-label">Photo</label>
                <input className="form-control" type="file" id="formFile"  onChange={this.handleImageUpload} />
                <div>
                  {this.state.imageData && (
                    // <img src={this.state.imageData} className="img-fluid" alt="Uploaded img" />
                    <ReactCrop crop={this.state.crop} onChange={this.onCropChange} >
                      <img src={this.state.imageData} className="img-fluid" alt="Uploaded img" />

                    </ReactCrop>

                  )}
                </div>
                {this.state.imageData && (
                  <button className='btn btn-danger' onClick={() => {
                    this.handleImageCrop(this.state.crop);
                  }} >Upload Image</button>
                )}
                
              </div>
              <div className="mb-3">
                <button className="container mt-4" onClick={this.handleDownload}>Download</button>

              </div>
 

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Signature</label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Pdf</label>
                <input className="form-control" type="file" id="formFile" />
              </div>


            </div>
          </div>
        </div>

      </>
    );
  }
}




export default Uploaddata;















