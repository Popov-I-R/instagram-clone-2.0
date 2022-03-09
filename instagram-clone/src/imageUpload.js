import { Button } from "@mui/material";
import React, { useState } from "react";


function Imageupload() {
  const [image, setImage] = useState(null);
//   const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => { // function for the upload (get the file you selected and set you image and state to that)
      if (e.target.files[0]) {
          setImage(e.target.files[0]);
      }
  }

  const handleUpload = () => {
      
  }

  return (
    <div>
      <input type="text" placeholder="Enter a caption.." onChange={(event) => setCaption(event.target.value)} value={caption}/>
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default Imageupload;
