document.querySelector('#recognizeButton').addEventListener('click', recognize);

  async function recognize() {

  	const model = await tf.loadLayersModel('http://localhost:3000/js/model.json');
  	console.log(model);

	// var image = new Image();
	// image.src = context.canvas.toDataURL("image/png");
	// return image;
  }