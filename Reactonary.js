class Reactonary {
    constructor(tileSize){
        this.pos = new Vec2(0,0); //index
        this.tileSize = tileSize
    }

    pickLocation(stageRows, stageCols,grid){
        //must not collide with train
        const table = [];

        grid.plegma.forEach( (row,y) => {
            row.forEach( (col,x) => {
                if (col === 0 ){
                    table.push(new Vec2(x,y))
                }
            } )
            
        });

        this.pos = table[Math.floor(Math.random()*table.length)];
    
    }

    draw(ctx){
        ctx.fillStyle = "blue"
        ctx.fillRect(this.pos.x*this.tileSize,this.pos.y*this.tileSize,
            this.tileSize,this.tileSize)
    }

}