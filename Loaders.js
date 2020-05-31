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

const LEFT=1;
const RIGHT=2;
const UP=3;
const DOWN=4;

function setUpEntitiesSprites(image){
    const entitiesSprites = new SpriteSheet(image,tilesize);
    entitiesSprites.define(LEFT,0,0,tilesize,tilesize);
    entitiesSprites.define(RIGHT,2*tilesize,0,tilesize,tilesize);
    entitiesSprites.define(UP,0,tileSize,tilesize,tilesize);
    entitiesSprites.define(DOWN,tileSize,tileSize,tilesize,tilesize);

    return entitiesSprites;
}

function loadEntitiesSprites(url){
    return loadImage(url).then ( image => {
        return setUpEntitiesSprites(image)
    })
}