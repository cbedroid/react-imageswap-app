import React, { Component } from 'react';

class ButtonInput extends Component {
  render () {
    return (
      <div className="input-tray l-flex l-flex--inline sa">
        <button
          disabled={this.props.count === 0 ? true : false}
          onClick={this.props.onPreviousImage}
          className="btn btn-primary btn-md" >
          Back
        </button>
        <span>
          <input
            className="input-inline"
            type="number"
            min="0"
            max="1080"
            step="1"
            onChange={(event) => this.props.onUserInput(event.target.value)}
            id="image_no"
            placeholder="Enter a Number" />
        </span>
        <button
          onClick={this.props.onNextImage}
          className="btn btn-secondary btn-md" >
          Next
        </button>
      </div>
    );
  }

  getUserInput (value) {
    const image_number = parseInt(value);
    if (image_number >= 0)
    {
      this.props.setImageNumber(value);
    }
  }

}
export default ButtonInput;