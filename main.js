

function main(){ //async?


    Promise.all([   
        setUpSound(),
        loadEntitiesSprites(url),
        loadImage("images/hammer and sickle.png")
    ])
    .then(([audioBoard,Sprites,hammer]) => {

        MYGRID = new Grid(plegma1);

        let level = new Level(TILESIZE,ROWS,COLS,MYGRID,Sprites,audioBoard);

        const train = new Train(0,0,level);
        const react = new Reactonary(level);
        updateGrid(train, MYGRID, plegma1);
        react.pickLocation(ROWS,COLS,MYGRID);

        let entityCollider = new EntityCollider([train,react])

        controllersSetUp(train,canvas,TILESIZE);

        level.entities.push(train);
        level.entities.push(react)


        let update = function update(){
            level.update()
            updateGrid(train, MYGRID, plegma1)
            entityCollider.check(train)
            /*if(train.eats(react,audioBoard)){
                react.pickLocation(ROWS,COLS,MYGRID)
            }*/
            drawBackground(ctx,COLS*TILESIZE,ROWS*TILESIZE,TILESIZE)
            level.draw(ctx)
            gameCtx.drawImage(canvas,0,50);
            drawScore(train.score,hammer,gameCtx)

            
        }

        const timer = new Timer(200);
        timer.update = update;
        timer.start()

    } )
}



function updateGrid(train, grid,originalPlegma){
    grid.plegma = grid.copy2dArray(originalPlegma)
    train.tail.forEach( part => {
        grid.set(part.x, part.y, 2)
    } );
}

function start(){
    main();
    window.removeEventListener('click', start)
}

window.addEventListener( 'click', start);



  


