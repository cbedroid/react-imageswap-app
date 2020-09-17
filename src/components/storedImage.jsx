import React, { useState,useContext } from "react";
import { stringFormat } from "../helpers.js";
import DownloadButton  from "./downloadButton";
import { GlobalContext } from "../context/GlobalState";

const StoredImage = ({ storedimage }) => {
  const [captured, setCaptured] = useState(<i className="fa fa-image"></i>);
  const [className, setClassName] = useState('no-image');
  const [imageRef, setImageRef] = useState(null);
  const  { image }  = useContext(GlobalContext);
  const  { updateStoredImage }  = useContext(GlobalContext);

  const captureImage = () => { 
    // Capture current imageWidget picture 
    const image_src = stringFormat(image.smallTemplate,image.id)

    // set the state of the stored captured image 
    setCaptured(<img className="captured-image" src={image_src} alt={`SavedImage ${image.id}`} />)
    setClassName('has-image');
    setImageRef(image.id);

    // Update the local storedImage dynamically 
    console.log({className});
    console.log({imageRef});
    console.log({captured});
    storedimage = {...storedimage, ...{className:className,imageRef:imageRef,value: captured }};
    console.log('local Storedimage',storedimage);
    updateStoredImage(storedimage);
  }

  return (
      <li className="list-item captured-" onClick={()=> captureImage()}>
        <div className={`list-item thumb-tray ${className}`}>
          {captured}
        </div>
        <div className="download-tray">
          <DownloadButton storedImageUri={stringFormat(image.largeTemplate,imageRef)} path={`ImageSwap-${imageRef}.png`}/>
        </div>
    </li>
    
    );
  
}
export default StoredImage;

  