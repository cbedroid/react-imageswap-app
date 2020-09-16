import React, { useContext } from "react";
import { stringFormat } from "../helpers.js";
import { GlobalContext } from "../context/GlobalState";

const StoredImage = ({ storedimage }) => {
  const  { image }  = useContext(GlobalContext);
  const  { updateStoredImage }  = useContext(GlobalContext);


  const captureImage = () => { 
    // Capture current imageWidget picture 
    console.log('captured image ',storedimage)
    const image_src = stringFormat(image.smallTemplate,image.id)
    const img_template = `<img className="bdr-dark-3" src=${image_src} alt="SavedImage ${image.id}" />`

    // Update the local storedimage's  data
    storedimage = {...storedimage, ...{className:"has-image",value:img_template }}

    // Update the local storedImage dynamically 
    updateStoredImage(storedimage);
  }

  return (
      <li onClick={()=> captureImage()}
      className={`list-item thumb-tray ${storedimage.className}`}>
      {storedimage.value || <i className="fa fa-image"></i>}
    </li>
    );
  
}
export default StoredImage;

  