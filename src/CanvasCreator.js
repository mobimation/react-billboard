import React, { Component, PropTypes } from 'react';

import char from './char.js';


export default class CanvasCreator extends Component {

  constructor(props) {
        super(props);
  }

  componentDidMount() {
      this.updateCanvas();
  }

  /** Draw the empty matrix - same as erasing all text. */
  drawMatrix = (pixel) => {
    var ctx = this.refs.canvas.getContext('2d'); // The canvas we are drawing to
    // TODO: Come to grips with offset issue
    const x_offs=-70;
    const y_offs=-30;
    // Array 48x28. For each pixel row, paint unlit pixels
    // Canvas starts at x=765,y=224.
    const x=765+x_offs; // Top left x start of pixel array on backdrop
    const y=224+y_offs; // Top left y start of pixel array on backdrop
    const pixelHeight=27; // Height of a display pixel
    const pixelWidth=23;  // Width of a display pixel
    // Draw the unlit pixel array
    for (var row=0; row<28; row++) { // For each billboard pixel array row
      for (var col=0; col<48; col++) {  // For each billboard pixel array column
        ctx.drawImage(pixel,x+(col*pixelWidth),y+(row*pixelHeight),pixelWidth,pixelHeight); // Draw unlit pixel
      }
    }
  }

  /** Display a text message on the billboard */
  message = (text) => {

  }

  updateCanvas = () => {
    var ctx = this.refs.canvas.getContext('2d'); // The canvas we are drawing to
    var backdrop = new Image(); // The billboard photo backdrop
    var unlit = new Image();    // An unlit pixel
    var lit = new Image();      // A lit pixel

    // Urls to graphic files on a remote server
    // These are fetched from a remote source for now since it is the only
    // solution I figured out to work without issues so far...
    backdrop.src = 'http://lilldata.se/react/billboard-no-pixels.png';
       unlit.src = 'http://lilldata.se/react/unlit.png';
         lit.src = 'http://lilldata.se/react/lit.png';

    // When backdrop photo loaded (2400x1596), paint it on canvas.
    backdrop.onload = () => ctx.drawImage(backdrop,0,0,2400,1596);
    // When unlit pixel loaded, paint the pixel array of a billbard with no displayed characters
    unlit.onload = () => this.drawMatrix(unlit);
  }

  render() {
    return (
        <canvas ref="canvas" style={{ margin:-20, padding:-20, border:-20, minHeight: '100vh', minWidth: '100vh'}} width={2400} height={1596}> </canvas>
    )
  }
}
