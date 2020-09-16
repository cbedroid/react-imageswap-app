import React, { Component } from "react";
import TitleBanner from "./titleBanner.jsx";
import ImageWidget from "./imageWidget.jsx";
import ButtonInput from "./buttonInput";
import StoredImage from "./storedImage";


class App extends Component {

  state = {
      imageNumber: 0,
      image: () => this.imgTag(),
      storedImages: [
        { key: 1, id: 1, value: null, class:"no-image" },
        { key: 2, id: 2, value: null, class:"no-image" },
        { key: 3, id: 3, value: null, class:"no-image" },
      ]
    };

  setImageNumber = (number) => this.setState({imageNumber: number});
  previousImage = () => this.setState({ imageNumber: this.state.imageNumber - 1 });
  nextImage = () => this.setState({ imageNumber: this.state.imageNumber + 1 });
  updateStoredImage =(storedImages)=> this.setState({storedImages});
  imgTag = (w=400,h=200) => {
      const img_number = this.state.imageNumber;
      const alt = img_number + " Image";
      return <img className="bdr-dark-3" src={`https://www.picsum.photos/id/${img_number}/${w}/${h}`} alt={alt} />
    };

  
  render() { 
    return (
    <div className="counter-widget" style={{ padding: "20px 75px" }}>
      <TitleBanner />
      <ImageWidget state={this.state} onUpdateStoredImage={storedImages=> this.updateStoredImage(storedImages)} />
        <ul className="list light l-flex l-flex--inline sa " 
          style={{ width: 400, background: 'whitesmoke' }}>
            {this.renderStoredImages()}
        </ul>

      <ButtonInput
        onPreviousImage={this.previousImage}
        onNextImage={this.nextImage}
        onUserInput={value => this.getUserInput(value)}
      />
    </div>
    );
  };


  renderStoredImages =()=>{
    const images = this.state.storedImages;
    if (images){
      console.log('FOUND STORED IMAGES')
     return Object.keys(this.state.storedImages).map(img => (
      <StoredImage key={img.key} img={img} />
     ))
    }else{
    return <h2>"Sorry, There are no image )-:"</h2>;
    }
  }

}

export default App;
