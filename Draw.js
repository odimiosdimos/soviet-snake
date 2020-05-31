function drawBackground(ctx,w,h,tileSize){
    ctx.fillStyle = "rgb(147, 245, 66)";
    ctx.fillRect(0,0,w,h)
    for (let indexY=0;indexY<rows;indexY++){
        for (let indexX=0;indexX<cols;indexX++){
            if ( (indexX+indexY)%2 != 0){
                ctx.fillStyle = "rgb(89, 179, 0)"
                ctx.fillRect(indexX*tileSize,indexY*tileSize,tileSize,tileSize)
            }
        } 
    }
}