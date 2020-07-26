const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const TILESIZE = 32;
const ROWS = 10;
const COLS = 10;

var MYGRID;

// game canvas

const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext('2d');

gameCanvas.width = ROWS*TILESIZE;
gameCanvas.height = COLS*TILESIZE+50;
