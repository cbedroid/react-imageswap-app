import React, { Component } from 'react';

class StoredImage extends Component {
  state = {  }
  render() { 
    return (
       <li onClick={()=> this.captureStoredImage(this.props.img.id)}
        className={`list-item thumb-tray ${this.props.img.class}`}>
        {this.props.img.value}
      </li>
      );
  }
  
captureStoredImage = stored_image_id => {
    // Capture current imageWidget picture 
    // Save the image into the current clicked StoredImage's li. 
    const storedImages = this.props.state.storedImages.map(si => {
      if (si.id === stored_image_id){
        si.value = this.props.imgTag(50,50);
        // set the li class name
        si.class = 'has-image';
      }
      return si 
    })
    this.props.updateStoredImageState({storedImages});
    console.log('Images ReStored',storedImages);
  }
}
 
export default StoredImage;

  