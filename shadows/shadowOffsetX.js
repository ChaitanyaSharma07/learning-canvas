var canvas = document.getElementById("Matrix");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.shadowBlur = 20;
ctx.shadowOffsetX = 20;
ctx.shadowColor = "blue";
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 100, 100)