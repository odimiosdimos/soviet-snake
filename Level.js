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

    addEntity(entity){
        this.entities.push(entity)
    }

    update(){
        this.updateEntities(this)
    }

    draw(context){
        this.drawEntities(context)
    }

    updateEntities(level){
        this.entities.forEach(entity => {
            entity.update(level)
        })

    }

    drawEntities(context){
        this.entities.forEach(entity => {
            entity.draw(context)
        })
    }

    

}