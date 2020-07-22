class Level {

    constructor(tileSize,rows,cols,grid,sprites,audioBoard){
        this.entities = [];
        this.tileSize = tileSize;
        this.rows = rows;
        this.cols = cols;
        this.grid = grid;
        this.sprites = sprites;
        this.audioBoard = audioBoard;

    }

    update(){
        this.updateEntities()
    }

    draw(context){
        this.drawEntities(context)
    }

    updateEntities(){
        this.entities.forEach(entity => {
            entity.update()
        })

    }

    drawEntities(context){
        this.entities.forEach(entity => {
            entity.draw(context)
        })
    }

    

}