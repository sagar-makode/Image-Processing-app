
import { React, useState } from 'react';
import FileInput from "./pdftools/file-input";
import FileConverter from "./pdftools/file-converter";


const PdftoImg = () => {
    const [pdfFile, setPdfFile] = useState(null);


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
                            PDF To Image
                        </h2>
                    </div>
                    <h4>Upload File</h4>

                    <div className="col-lg">
                        {' '}

                    </div>
                    <div item="true"className="box">
                        <FileInput onFileChange={(file) => setPdfFile(file)} />
                    </div>






                </div>
                <div container="true" sx={{ py: 16, px: 2 }}>

                    {pdfFile && (
                        <div item="true" sx={{ width: "100%" }}>
                            <FileConverter
                                pdfUrl={URL.createObjectURL(pdfFile)}
                                fileName={pdfFile.name}
                            />
                        </div>
                    )}
                </div>
            </div>






        </>

    );
};

export default PdftoImg;







