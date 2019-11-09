document.querySelector('#recognizeButton').addEventListener('click', recognize);

  async function recognize() {

  	const model = await tf.loadLayersModel('http://localhost:3000/js/model.json');

	var imageData = context.getImageData(0,0,280,280);
	var newCanvas = document.createElement('canvas');
	newCanvas.width = imageData.width;
	newCanvas.height = imageData.height;

	newCanvas.getContext("2d").putImageData(imageData, 0, 0);

	context.scale(0.1, 0.1);
	context.drawImage(newCanvas, 0, 0);
	context.scale(10, 10);

	var newImageData = context.getImageData(0,0,28,28);
	context.fillRect(0,0,28,28);

	var preparedData = prepareForPrediction(newImageData);

	doPrediction(model, preparedData);

  }

  function prepareForPrediction(imageData) {
  	grayscale(imageData);
  	var selectedPixels = deleteUnusedValues(imageData);
  	var normalizedData = normalize(selectedPixels);
  	var preparedData = invertColors(normalizedData);
  	return preparedData;
  }

  function grayscale(imageData) {
  	var arrayLength = imageData.width * imageData.height * 4;

  	for(var i = arrayLength-1; i > 0; i-=4) {
  		var gray = 0.3 * imageData.data[i-3] + 0.59 * imageData.data[i-2] + 0.11 * imageData.data[i-1];
  		imageData.data[i-3] = gray;
  		imageData.data[i-2] = gray;
  		imageData.data[i-1] = gray;
  	}
  }

  function deleteUnusedValues(imageData) {
  	var result = [];

  	for(var i=0; i<imageData.data.length; i+=4) {
  		result.push(imageData.data[i]);
  	}

  	return result;

  }

 function normalize(array) {
 	var normalizedValues = [];

 	for(var i=0; i<array.length; i++) {
 		normalizedValues.push(array[i]/255);
 	}
 	return normalizedValues;
 }

 function invertColors(array) {
 	var invertedColors = [];

 	for(var i=0; i<array.length; i++) {
 		invertedColors.push(1 - array[i]);
 	}
 	return invertedColors;
 }

 function doPrediction(model, preparedData) {
 	const x = tf.tensor1d(preparedData);
 	const data = x.reshape([1, 28, 28, 1]);
 	const prediction = model.predict(data);
 	prediction.print();

 }