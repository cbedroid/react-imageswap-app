/*  Similiar to Redux's reducer
    Similiar to python API call where you specify an endpoint and key 
    to get access to certain part of the program 
    visit for help: https://www.youtube.com/watch?v=XuFDcZABiDQ
*/
/*  Purpose: This AppReducer main functionality is making chances to the "state" of an object.
    Since our components will have only read access to these objects, we need to make 
    changes dynamically here to update the object's  data. Once the object is updated, we will
    send the object back to all components. 
*/
export default (state, action) => {
  switch (action.type) {
    case "UPDATE_IMAGE_NUMBER":
      return {
        ...state,
        image: { ...state.image, ...{ id: +action.payload || 0 } },
      };
    case "UPDATE_STOREDIMAGE":
      console.log("Before Stored Image", state.storedImages);
      const updated_images = { ...state.storedImages, ...action.payload };
      console.log("Update Stored Image", updated_images);
      return {
        ...state,
        storedImages: updated_images,
      };
    default:
      return state;
  }
};
