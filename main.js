const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const tileSize = 32;
const rows = 10;
const cols = 10;

canvas.width = rows*tileSize+100;
canvas.height = cols*tileSize+200;
canvas.style.backgroundColor = "rgb(207, 300, 166)";

const url="images/entities_tiles.png";

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
        if(train.eats(react)){
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



function updateGrid(train, grid,originalPlegma){
    grid.plegma = grid.copy2dArray(originalPlegma)
    train.tail.forEach( part => {
        grid.set(part.x, part.y, 2)
    } );
}

window.addEventListener( 'click', () => 
 {
    const audioContext = new AudioContext();
    const loadAudio = createAudioLoader(audioContext);
    loadAudio('/audio/sound2.mp3')
    .then(buffer => {
        console.log(buffer)
        const source = audioContext.createBufferSource();
        source.connect(audioContext.destination);
        source.buffer = buffer;
        source.start(0)
    })
 }) ;

