

import jsPDF from 'jspdf';
import { React, useState } from 'react';

const ImagetoPdf = () => {
  const [photos, setPhotos] = useState([]);


  const onChangephoto = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };




  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (error) => reject(error);
    });
  };

  const pdfGenerate = async () => {
    if (photos.length === 0) {
      return; // No images selected, exit the function
    }

    const doc = new jsPDF('p', 'pt', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginFromTop = 50; // Adjust the margin as needed

    for (let i = 0; i < photos.length; i++) {
      try {
        const img = await loadImage(URL.createObjectURL(photos[i]));

        let canvasWidth = img.width;
        let canvasHeight = img.height;

        const maxWidth = pageWidth - 20; // Adjust the width as needed
        const maxHeight = pageHeight - marginFromTop - 20; // Adjust the height as needed

        if (canvasWidth > maxWidth || canvasHeight > maxHeight) {
          const widthRatio = maxWidth / canvasWidth;
          const heightRatio = maxHeight / canvasHeight;
          const resizeRatio = Math.min(widthRatio, heightRatio);

          canvasWidth *= resizeRatio;
          canvasHeight *= resizeRatio;
        }

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        if (i > 0) {
          doc.addPage();
        }

        const posX = (pageWidth - canvas.width) / 2; // Horizontal center alignment
        const posY = marginFromTop + 10; // Add a fixed margin from the top

        doc.addImage(
          canvas.toDataURL('image/jpeg'),
          'JPEG',
          posX,
          posY,
          canvas.width,
          canvas.height
        );

        if (i === photos.length - 1) {
          doc.save('images.pdf');
        }
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }
  };


  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-primary hero-header">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated slideInDown">Edit Your PDF Here</h1>
                <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4  col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div>
            <h2 className="text-center">
              Image to Pdf
            </h2>
          </div>
          <h4>Upload File</h4>
          <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-6 ">
            <label htmlFor="photo" className="form-label">Photo</label>
            <input
              type="file"
              name="photo"
              className="form-control"
              onChange={onChangephoto}
              accept="image/png, image/png, image/jpeg, image/jpg"
              multiple
            />
          </div>
          <div className="col-lg">
            {' '}
            <button
              className="btn btn-outline-primary mt-5"
              onClick={pdfGenerate}
              disabled={!photos}
            >
              Download pdf
            </button>
          </div>
          <div className="row mt-5">
            {photos.map((photo, index) => (
              <div key={index} className="col-lg-4 col-md-3 col-sm-3">
                <div className="card mb-4" style={{ height: '200px', }}>
                  <img
                    alt="not found"
                    className="card-img-top"
                    src={URL.createObjectURL(photo)}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />

                </div>
              </div>
            ))}
          </div>





        </div>
      </div>





    </>

  );
};

export default ImagetoPdf;







