const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const tileSize = 32;
const rows = 10;
const cols = 10;

canvas.width = rows*tileSize+100;
canvas.height = cols*tileSize+200;
canvas.style.backgroundColor = "rgb(207, 300, 166)";

ctx.font = "30px Arial";
ctx.fillText("CLICK TO PLAY", 10, 50);

const url="images/entities_tiles.png";

const eatSoundUrl = '/audio/stallin.ogg';


class AudioBoard {

    constructor(context){
        this.context = context;

        this.buffers = new Map();

    }

    addAudio(name, buffer){
        this.buffers.set(name, buffer)
    }

    playAudio(name){
        const source = this.context.createBufferSource();
        source.connect(this.context.destination);
        source.buffer = this.buffers.get(name)
        source.start(0)
    }

}

function main(){ //async?

    const audioContext = new AudioContext()
    
    const audioBoard = new AudioBoard(audioContext);

    const loadAudio = createAudioLoader(audioContext);
    //maybe should load with a single promise with load sprites
    loadAudio(eatSoundUrl)
    .then(buffer => {
        /*console.log(buffer)
        const source = audioContext.createBufferSource();
        source.connect(audioContext.destination);
        source.buffer = buffer;
        source.start(0)*/
        audioBoard.addAudio('eat',buffer)
    })

    loadEntitiesSprites(url).then( Sprites => {

        const sprites = Sprites;

        const myGrid = new Grid(plegma1);
        const train = new Train(0,0,tileSize,sprites);
        const react = new Reactonary(tileSize,sprites);
        updateGrid(train, myGrid, plegma1);
        react.pickLocation(rows,cols,myGrid)
        controllersSetUp(train,canvas,tileSize);


        let update = function update(){
            train.update(rows,cols)
            react.update()
            updateGrid(train, myGrid, plegma1)
            if(train.eats(react,audioBoard)){
                react.pickLocation(rows,cols,myGrid)
            }
            drawBackground(ctx,cols*tileSize,rows*tileSize,tileSize)
            react.draw(ctx)
            train.draw(ctx)
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



  


