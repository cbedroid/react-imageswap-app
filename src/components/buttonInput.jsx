import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ButtonInput = () => {
  const { updateImage } = useContext(GlobalContext);
  const  imageID  = useContext(GlobalContext).image.id;

  return (
    <div className="input-tray l-flex l-flex--inline sa">
      <button
        disabled={imageID === 1 ? true : false}
        onClick={()=> {updateImage(imageID > 1 ? imageID - 1 : 1)}  }
        className="btn btn-primary btn-md"
      >
        Back
      </button>
      <span>
        <input
          className="input-inline"
          type="number"
          min="1"
          max="1080"
          step="1"
          onChange={(event) => {updateImage(event.target.value)} }
          id="image_no"
          placeholder="Enter a Number"
        />
      </span>
      <button
        onClick={ () => {updateImage(imageID + 1)} }
        className="btn btn-secondary btn-md"
      >
        Next
      </button>
    </div>
  );
};
export default ButtonInput;
