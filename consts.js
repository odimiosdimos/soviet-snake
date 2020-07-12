const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const TILESIZE = 32;
const ROWS = 10;
const COLS = 10;

canvas.width = ROWS*TILESIZE;
canvas.height = COLS*TILESIZE;
canvas.style.backgroundColor = "rgb(207, 300, 166)";

ctx.font = "30px Arial";
ctx.fillText("CLICK TO PLAY", 10, 50);

var MYGRID;

// game canvas

const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext('2d');

gameCanvas.width = ROWS*TILESIZE;
gameCanvas.height = COLS*TILESIZE+50;

gameCtx.drawImage(canvas,0,50)