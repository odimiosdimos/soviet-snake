function loadImage(url){
    return new Promise( resolve => {
        const image = new Image();
        image.addEventListener( 'load', () => {
            resolve(image)
        })
        image.src =  url;
    })
}

function giveValue(){
    let counter=-1;

    return function values(){
        counter++;
        return counter;
    }

}

const url="images/entities_tiles.png";

const eatSoundUrl = '/audio/stallin.ogg';

const turnSoundUrl = '/audio/vroum.ogg';

const value = giveValue();

//maybe give values with a function with a counter for easier.
const LEFT= value() ;
const LEFT2= value() ;
const RIGHT= value();
const RIGHT2= value();
const UP= value();
const UP2= value();
const DOWN= value();
const DOWN2= value();

const CAPITALIST = value();
const CAPITALIST2 = value();

const DEAD_CAPITALIST = value()

console.log("C" + CAPITALIST2);
console.log("C" + CAPITALIST);



function setUpEntitiesSprites(image){
    const entitiesSprites = new SpriteSheet(image,TILESIZE);
    entitiesSprites.define(LEFT,0,0,TILESIZE,TILESIZE);
    entitiesSprites.define(LEFT2,TILESIZE,0,TILESIZE,TILESIZE);

    entitiesSprites.define(RIGHT,0,0,TILESIZE,TILESIZE,true);
    entitiesSprites.define(RIGHT2,TILESIZE,0,TILESIZE,TILESIZE,true);

    entitiesSprites.define(UP,2*TILESIZE,0,TILESIZE,TILESIZE);
    entitiesSprites.define(UP2,3*TILESIZE,0,TILESIZE,TILESIZE);

    entitiesSprites.define(DOWN,2*TILESIZE,0,TILESIZE,TILESIZE,false,true);
    entitiesSprites.define(DOWN2,3*TILESIZE,0,TILESIZE,TILESIZE,false,true);

    entitiesSprites.define(CAPITALIST,0,TILESIZE,TILESIZE,TILESIZE);
    entitiesSprites.define(CAPITALIST2,TILESIZE,TILESIZE,TILESIZE,TILESIZE);

    entitiesSprites.define(DEAD_CAPITALIST,0,2*TILESIZE,TILESIZE+2,TILESIZE+2);

    return entitiesSprites;
}

function loadEntitiesSprites(url){
    return loadImage(url).then ( image => {
        return setUpEntitiesSprites(image)
    })
}

function setUpSound(){
    const audioContext = new AudioContext()

    const audioBoard = new AudioBoard(audioContext);

    const loadAudio = createAudioLoader(audioContext);

    return Promise.all([
        loadAudio(eatSoundUrl), 
        loadAudio(turnSoundUrl),
        loadAudio('/audio/train_boom.mp3'),
        ])
    .then(([eat,turn,eat_]) => {
        audioBoard.addAudio('eat',eat)
        audioBoard.addAudio('turn',turn)
        audioBoard.addAudio('eat_',eat_)

        return audioBoard;
    })
}