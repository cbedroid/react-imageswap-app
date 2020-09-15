import React, { Component } from 'react';

class StoredImage extends Component {

  render () {
    return (
      <li key={this.props.img.key} onClick={()=>{
       this.props.onImageCapture(this.props.img.id)}} className={`list-item thumb-tray ${this.props.img.class}`}>
        {this.props.img.value}
      </li>);
  }
}

export default StoredImage;