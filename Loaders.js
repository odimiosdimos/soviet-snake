function loadImage(url){
    return new Promise( resolve => {
        const image = new Image();
        image.addEventListener( 'load', () => {
            resolve(image)
        })
        image.src =  url;
    })
}

const tilesize=32;

//maybe give values with a function with a counter for easier.
const LEFT=1;
const LEFT2=2;
const RIGHT=3;
const RIGHT2=4;
const UP=5;
const UP2=6;
const DOWN=7;
const DOWN2=8;

function setUpEntitiesSprites(image){
    const entitiesSprites = new SpriteSheet(image,tilesize);
    entitiesSprites.define(LEFT,0,0,tilesize,tilesize);
    entitiesSprites.define(LEFT2,tilesize,0,tilesize,tilesize);

    entitiesSprites.define(RIGHT,0,0,tilesize,tilesize,true);
    entitiesSprites.define(RIGHT2,tilesize,0,tilesize,tilesize,true);

    entitiesSprites.define(UP,2*tileSize,0,tilesize,tilesize);
    entitiesSprites.define(UP2,3*tileSize,0,tilesize,tilesize);

    entitiesSprites.define(DOWN,2*tileSize,0,tilesize,tilesize,false,true);
    entitiesSprites.define(DOWN2,3*tileSize,0,tilesize,tilesize,false,true);

    return entitiesSprites;
}

function loadEntitiesSprites(url){
    return loadImage(url).then ( image => {
        return setUpEntitiesSprites(image)
    })
}