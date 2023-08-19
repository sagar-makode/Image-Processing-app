
import React, { useEffect, useState } from "react";

const FileInput = ({onFileChange}) => {
  const [file, setFile] = useState(null);
 

  useEffect(() => {
    onFileChange(file);
  }, [file, onFileChange]); 
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile && newFile.type === "application/pdf") {
      setFile(newFile);
    }
  };

  return (
    <>
       
       {/* <img src={uploadImg} alt="" /> */}

       
     <input type="file" accept=".pdf" onChange={onFileDrop} />  
    
    </>
  );
};

export default FileInput;
