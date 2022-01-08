const canvas = document.getElementById("Matrix");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
grd.addColorStop(0, "#36ec8b");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvas.width, canvas.height);