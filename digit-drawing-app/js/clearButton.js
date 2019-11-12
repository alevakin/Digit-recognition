document.querySelector('#clearButton').addEventListener('click', clearCanvas);
 
  function clearCanvas() {
	context.fillStyle = "#ffffff"; //canvas color
    context.fillRect(0,0,280,280);
    resetRawData();
  }

  function resetRawData() {
  	for(var i=0; i<rawData.series[0].data.length; i++) {
  		rawData.series[0].data[i] = 0;
  	}
  	barChart.setData(rawData);
  }