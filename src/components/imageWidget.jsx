import React, { Component } from 'react';
import ButtonInput from "./buttonInput";
import StoredImage from "./storedImage";
import "./css/app.css";

class ImageWidget extends Component {

  state = {
    imageNumber: 0,
    image: () => this.imageUrl(),
    storedImages: [
      { key: 1, id: 1, value: null, class:"no-image" },
      { key: 2, id: 2, value: null, class:"no-image" },
      { key: 3, id: 3, value: null, class:"no-image" },
    ]
  };


  componentDidMount () {
    // set the inital value of 'storedImages' to an font Awesome icon
    const initial_images = this.state.storedImages;
    const storedImages = initial_images.map(image => {
      // set value of image if value is null
      if (image.value === null)
      {
        image.value = <i className="fa fa-image"></i>;
      }
      return image;
    });
    this.setState({ storedImages })
  }

  render () {
    let { imageNumber } = this.state;
    return (
      <center>
        <React.Fragment>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-9 col-lg-9">
                <div className="l-widget">
                  {this.state.image("https://www.picsum.photos/400/200/")}
                  <div className="l-widget notes light">
                    <p className="text-muted m-subtitle text-center" >
                      Save your awesome images here !
                    </p>
                    <h4 style={{
                      marginTop: 20,
                      background: "whitesmoke",
                      fontWeight: 600,
                    }} >
                      Image #{imageNumber}
                    </h4>
                    {this.renderstoredImagesUL()}
                  </div>
                  <ButtonInput
                    onPreviousImage={this.previousImage}
                    onNextImage={this.nextImage}
                    onUserInput={value => this.getUserInput(value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </center>
    );
  }


  getUserInput (imageNumber) {
    const image_number = parseInt(imageNumber);

    if (image_number >= 0)
    {
      this.setState({ imageNumber: image_number });
    }

  }

  imageUrl = (w=400,h=200) => {
    const img_number = this.state.imageNumber;
    const alt = img_number + " Image";
    return <img className="bdr-dark-3" src={`https://www.picsum.photos/id/${img_number}/${w}/${h}`} alt={alt} />;
  }

  captureStoredImage = stored_image_id => {
    // Capture current imageWidget picture 
    // Save the image into the current clicked StoredImage's li. 
    const storedImages = this.state.storedImages.map(si => {
      if (si.id === stored_image_id){
        si.value = this.imageUrl(50,50);
        // set the li class name
        si.class = 'has-image';
      }
      return si 
    })
    this.setState({storedImages});
    console.log('Images ReStored',storedImages);
  }
    renderstoredImagesUL = () => {
      if (this.state.storedImages.length === 0)
      {
        return <h2 className="text-muted bg-warning">Sorry, There are no images saved! :-(</h2>
      } else
      {
        return (
          <ul className="list light l-flex l-flex--inline sa " style={{ width: 400, background: 'whitesmoke' }}>
            {this.state.storedImages.map(img => (
            <StoredImage key={img.key} img={img} 
             onImageCapture = { stored_image_id => this.captureStoredImage(stored_image_id)}
            />
            )
                        )}
          </ul>
        )
      }
    }

  formatCount () {
    const { imageNumber } = this.state;
    return imageNumber === 0 ? "Zero" : imageNumber;
  }

  previousImage = () => this.setState({ imageNumber: this.state.imageNumber - 1 });

  nextImage = () => this.setState({ imageNumber: this.state.imageNumber + 1 });

}
export default ImageWidget;