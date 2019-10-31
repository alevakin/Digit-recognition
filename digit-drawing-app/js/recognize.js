import * as tf from '@tensorflow/tfjs';

document.querySelector('#recognizeButton').addEventListener('click', recognize);
 
  function recognize() {
	var image = new Image();
	image.src = context.canvas.toDataURL("image/png");
	return image;
  }