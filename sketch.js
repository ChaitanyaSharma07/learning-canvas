var canvas = document.getElementById("Matrix");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);
/* to fill the screen with red color: 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
*/

/* code to draw a line: 

ctx.moveTo(0, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();
*/


/* code to draw circle in the centre of the screen using arc method()
arc(x, y, radius, start_angle, end_angle, clockwise(optional))

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 100, 0, 2 * Math.PI);
ctx.stroke();
*/

/* for linear gradient
createLinearGradient(x0, y0, x1, y1);
addColorStop(par1, par2: color)
par1: a value between 0 and 1 specify where the end of one color and the beginning of the other should take place

var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
grd.addColorStop(0, "#36ec8b");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvas.width, canvas.height);
*/

/*for circular gradient
createRadialGradient(x0, y0, r0, x1, y1, r1);

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "#36ec8b");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 100);

*/

/* to draw filled text
strokeText():- just gives outline to text

ctx.font = "60px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("BIG GAMING GAMERS!", canvas.width/2, canvas.height/2);
*/

/* put image on screen

window.onload = function() {
    var canvas = document.getElementById("Matrix");
    var ctx = canvas.getContext("2d");  
    var img = document.getElementById("biggie");
    ctx.drawImage(img, canvas.width/2, canvas.height/2);
}
*/

//    <img id="biggie" width="247" height="329" src="biggie.png" alt="biggie"> put code in body to show image