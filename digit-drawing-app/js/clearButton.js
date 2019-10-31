document.querySelector('#clearButton').addEventListener('click', clearCanvas);
 
  function clearCanvas() {
	context.fillStyle = "#ffffff"; //canvas color
    context.fillRect(0,0,280,280);
  }