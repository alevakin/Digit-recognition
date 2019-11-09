var context;

if(window.addEventListener) { 
 window.addEventListener('load', function () {
 	var canvas, canvaso, contexto; 
 
   var tool; 
   var tool_default = 'chalk'; 
  
   function init () {
      canvaso = document.getElementById('drawingCanvas'); 

      // Create 2d canvas. 
      contexto = canvaso.getContext('2d');  

      // Build the temporary canvas. 
      var container = canvaso.parentNode; 
      canvas = document.createElement('canvas'); 

      canvas.id     = 'tempCanvas'; 
      canvas.width  = canvaso.width; 
      canvas.height = canvaso.height;
      container.appendChild(canvas); 
      context = canvas.getContext('2d'); 
      context.strokeStyle = "#4ecaf4";//painting color 
      context.lineWidth = 15.0; 
  
      context.fillStyle = "#ffffff"; //canvas color
      context.fillRect(0,0,280,280);

      tool = new tools[tool_default](); 

      canvas.addEventListener('mousedown', ev_canvas, false); 
      canvas.addEventListener('mousemove', ev_canvas, false); 
      canvas.addEventListener('mouseup',   ev_canvas, false); 
   }

   // Get the mouse position. 
   function ev_canvas (ev) { 
      if (ev.layerX || ev.layerX == 0) {
         ev._x = ev.layerX; 
         ev._y = ev.layerY; 
      }

      var func = tool[ev.type]; 
      if (func) { 
         func(ev); 
      } 
   }

   function img_update () { 
      contexto.drawImage(canvas, 0, 0); 
   } 

   var tools = {}; 
   tools.chalk = function () { 
      var tool = this; 
      this.started = false; 
      
      this.mousedown = function (ev) { 
         context.beginPath(); 
         context.moveTo(ev._x, ev._y); 
         tool.started = true; 
      };

      this.mousemove = function (ev) { 
         if (tool.started) { 
            context.lineTo(ev._x, ev._y); 
            context.stroke(); 
         } 
      };

      this.mouseup = function (ev) { 
         if (tool.started) { 
            tool.mousemove(ev); 
            tool.started = false; 
            img_update(); 
         } 
      }; 
   };

 init();

 }, false); 
}