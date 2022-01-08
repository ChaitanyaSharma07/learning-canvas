const canvas = document.getElementById("Matrix");
var ctx = canvas.getContext("2d");
const image = document.getElementById("biggie");
const pattern = ctx.createPattern(image, "repeat");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = pattern;
ctx.fill();
