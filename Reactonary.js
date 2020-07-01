class Reactonary {
    constructor(tileSize,sprites){
        this.pos = new Vec2(0,0); //index
        this.tileSize = tileSize

        this.sprites = sprites;

        this.frames = new Animation([CAPITALIST,CAPITALIST2],3);
        this.frameSteps=0; //never zero again
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

    update(){
        this.frameSteps++;
    }

    chooseFrame(steps){
        return this.frames.resolveFrame(steps);
    }

    draw(ctx){
        /*ctx.fillStyle = "blue"
        ctx.fillRect(this.pos.x*this.tileSize,this.pos.y*this.tileSize,
            this.tileSize,this.tileSize)*/
        this.sprites.draw( this.chooseFrame(this.frameSteps),
            ctx,
            this.pos.x*this.tileSize,this.pos.y*this.tileSize,
            this.tileSize,this.tileSize);
    }

}