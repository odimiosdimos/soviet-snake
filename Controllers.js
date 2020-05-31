function controllersSetUp(entity,canvas,tileSize){

    keyboarstate = new KeyBoardState()
    keyboarstate.listenTo(window)

    keyboarstate.addKeyMaping( 'ArrowRight', (keyState) => {
        if (keyState) entity.setDir(new Vec2(1,0));
    } )

    keyboarstate.addKeyMaping( 'ArrowLeft', (keyState) => {
        if (keyState) entity.setDir(new Vec2(-1,0));
    } )

    keyboarstate.addKeyMaping( 'ArrowDown', (keyState) => {
        if (keyState) entity.setDir(new Vec2(0,1));
    } )

    keyboarstate.addKeyMaping( 'ArrowUp', (keyState) => {
        if (keyState) entity.setDir(new Vec2(0,-1))
    } )


    canvas.addEventListener('mousedown' , (event) => {
        entity.pos.set(
            parseInt(event.offsetX/tileSize),
            parseInt(event.offsetY/tileSize))
        entity.dir = new Vec2(0,0)
    })

    canvas.addEventListener('mousemove' , (event) => {
        if (event.buttons === 1){
            entity.pos.set(
                parseInt(event.offsetX/tileSize), 
                parseInt(event.offsetY/tileSize))
           entity.dir = new Vec2(0,0)
        }
    })

    


    

}