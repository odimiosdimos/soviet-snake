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

const value = giveValue();

const tilesize=32;

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

console.log("C" + CAPITALIST2);
console.log("C" + CAPITALIST);

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

    entitiesSprites.define(CAPITALIST,0,tilesize,tilesize,tilesize);
    entitiesSprites.define(CAPITALIST2,tilesize,tilesize,tilesize,tilesize);

    return entitiesSprites;
}

function loadEntitiesSprites(url){
    return loadImage(url).then ( image => {
        return setUpEntitiesSprites(image)
    })
}