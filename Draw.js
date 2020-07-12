function drawBackground(ctx,w,h,tileSize){
    ctx.fillStyle = "rgb(147, 245, 66)";
    ctx.fillRect(0,0,w,h)
    for (let indexY=0;indexY<ROWS;indexY++){
        for (let indexX=0;indexX<COLS;indexX++){
            if ( (indexX+indexY)%2 != 0){
                ctx.fillStyle = "rgb(89, 179, 0)"
                ctx.fillRect(indexX*tileSize,indexY*tileSize,tileSize,tileSize)
            }
        } 
    }
}

const scoreBuffer = document.createElement('canvas');
const scoreBufferCtx = scoreBuffer.getContext('2d');

scoreBuffer.width = ROWS*TILESIZE;
scoreBuffer.height = 50;

function drawScore(score,img, context){
    //it couls redraw only when changing
    scoreBufferCtx.fillStyle = "red"
    scoreBufferCtx.fillRect(0,0,scoreBuffer.width,50)

    scoreBufferCtx.fillStyle = "black"
    scoreBufferCtx.font = "30px Arial black";
    let text = "points: "+score;
    scoreBufferCtx.fillText(text, 10, 30);
    scoreBufferCtx.drawImage(img,scoreBuffer.width-20-32,5,32,32)

    context.drawImage(scoreBuffer,0,0)
}