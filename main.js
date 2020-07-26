const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 320 + 160
canvas.height = 320 + 160
document.body.appendChild(canvas);

const playCanvas = document.createElement('canvas');

const playCtx = playCanvas.getContext('2d');


playCanvas.width = 320
playCanvas.height = 320
playCanvas.style.backgroundColor = "lightblue";

document.getElementById("startButton").addEventListener('click',function ()
    {
     startGame(playCtx)
     //validation code to see State field is mandatory.  
    }  ); 



    function loadLevelShit(){
        return Promise.all([   
            setUpSound(),
            loadEntitiesSprites(url),
            loadImage("images/hammer and sickle.png")
        ])
    }
    
    function updateGrid(train, grid, originalPlegma){
        grid.plegma = grid.copy2dArray(originalPlegma)
        train.tail.forEach( part => {
            grid.set(part.x, part.y, 2)
        } );
    }
    
    
    function startGame(playCtx){
        canvas.style.position = "absolute"
        ctx.drawImage(playCanvas,80,140)
        drawBorder(ctx)

        loadLevelShit()
        .then(([audioBoard,Sprites,hammer]) => {
    
            MYGRID = new Grid(plegma1);
    
            let level = new Level(TILESIZE,ROWS,COLS,MYGRID,Sprites,audioBoard);
    
            const train = new Train(0,0,level);
            const react = new Reactonary(level);
            updateGrid(train, MYGRID, plegma1);
            react.pickLocation(ROWS,COLS,MYGRID);
    
            let entityCollider = new EntityCollider(level)
    
            controllersSetUp(train,playCanvas,TILESIZE);
    
            level.entities.push(train);
            level.entities.push(react)
    
    
            let update = function update(){
                level.update()
                updateGrid(train, MYGRID, plegma1)
                entityCollider.check(train)
                /*if(train.eats(react,audioBoard)){
                    react.pickLocation(ROWS,COLS,MYGRID)
                }*/
                drawBackground(playCtx,COLS*TILESIZE,ROWS*TILESIZE,TILESIZE)
                level.draw(playCtx)
                drawScore(train.score,hammer,ctx)

                ctx.drawImage(playCanvas,80,140)
    
                
            }
    
            const timer = new Timer(200);
            timer.update = update;
            timer.start()
    
        } )
    }