

import React, { Component } from 'react';



class uploaddata extends Component {
    render() {
        return (
            <>
            <div  > 
            
                    <div className="container mt-4" style={{width:"500px"}}>
                        <div >
                            <h2>Upload File</h2>
                            <div className="mb-12  ">
                                <label for="formFile" className="form-label">Photo</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Signature</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Pdf</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>

                    
                    </div>
                </div>
                </div>

            </>
        );
    }
}

export default uploaddata;








// div className="card m-3 p-1" style={{width: "30rem" }}>
//                 <div className="mb-3">
//                     <label for="formFile" className="form-label">Default file input example</label>
//                     <input className="form-control" type="file" id="formFile"/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="formFileMultiple" className="form-label">Multiple files input example</label>
//                     <input className="form-control" type="file" id="formFileMultiple" multiple/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="formFileDisabled" className="form-label">Disabled file input example</label>
//                     <input className="form-control" type="file" id="formFileDisabled" disabled/>
//                 </div>
//                 <div className="mb-3">
//                     <label for="formFileSm" className="form-label">Small file input example</label>
//                     <input className="form-control form-control-sm" id="formFileSm" type="file"/>
//                 </div>
//                 <div>
//                     <label for="formFileLg" className="form-label">Large file input example</label>
//                     <input className="form-control form-control-lg" id="formFileLg" type="file"/>
//                 </div>
//                 <label className="form-label" for="customFile">Default file input example</label>
//                 <input type="file" className="form-control" id="customFile" />
//             </div>
