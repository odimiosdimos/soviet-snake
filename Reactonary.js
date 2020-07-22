class Reactonary extends Entity {
    constructor(level){
        super()
        this.level = level
        this.pos = new Vec2(0,0); //index
        this.tileSize = level.tileSize

        this.sprites = level.sprites;

        this.frames = new Animation([CAPITALIST,CAPITALIST2],3);
        this.frameSteps=0; //never zero again

        this.addTrait(new Killable())

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
        super.update()
        this.frameSteps++;
    }

    chooseFrame(steps){
    if (this.killable.dead){
        console.log("dead")
        return DEAD_CAPITALIST;
    }

        return this.frames.resolveFrame(steps);
    }

    draw(ctx){
        //u should take care ig not existing (win )
        this.sprites.draw( this.chooseFrame(this.frameSteps),
            ctx,
            this.pos.x*this.tileSize,this.pos.y*this.tileSize,
            this.tileSize,this.tileSize);
    }

    collides(entity){
        //console.log(" Reactonarie collided with "+entity.constructor.name)
        console.log(" Train collided with "+ entity.constructor.name)
        if ( entity instanceof Train ) {
            //got eated
            this['killable'].killed();
            console.log(this.level.entities)
            this.pickLocation(ROWS,COLS,MYGRID)
            this['killable'].dead = false;
        }
        
    }

}