import React, { Component } from 'react';
class ImageWidget extends Component {
  
  componentDidMount () {
    // set the inital value of 'storedImages' to an font Awesome icon
    const initial_images = this.props.state.storedImages;
    const storedImages = initial_images.map(image => {
      // set value of image if value is null
      if (this.props.state.image.value === null)
      {
        image.value = <i className="fa fa-image"></i>;
      }
      return image;
    });
    this.props.onUpdateStoredImage({ storedImages })
  }

  render () {
    return (
      <div className="l-widget center">
        {this.props.state.image("https://www.picsum.photos/400/200/")}
        <div className="l-widget notes light">
          <p className="text-muted m-subtitle text-center" >
            Save your awesome images here!
          </p>
          <h4 className="light mt-20 mb-20 font-weight-bold" >
            Image #{this.props.state.imageNumber}
          </h4>
        </div>
      </div>
    );
  }

  // formatCount () {
  //   const { imageNumber } = this.state;
  //   return imageNumber === 0 ? "Zero" : imageNumber;
  // }
}
export default ImageWidget;