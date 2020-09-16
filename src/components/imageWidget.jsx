import React, { useContext } from 'react';
import { stringFormat } from "../helpers.js";
import { GlobalContext } from "../context/GlobalState";

const ImageWidget = (props) => {
  const { image } = useContext(GlobalContext);
  const imageID  = useContext(GlobalContext).image.id;
  
  return (
    <div className="l-widget center">
        <img className="bdr-dark-3" src={stringFormat(image.largeTemplate,imageID)} alt={`Img ${imageID}`} />
      <div className="l-widget notes light">
        <p className="text-muted m-subtitle text-center" >
          Save your awesome images here!
        </p>
        <h4 className="light mt-20 mb-20 font-weight-bold" >
          Image #{imageID}
        </h4>
      </div>
    </div>
    );

}
export default ImageWidget;