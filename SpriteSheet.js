class SpriteSheet {
    constructor(image,tilesize=32){
        this.image = image;
        this.tilesize = tilesize;

        this.sprites = new Map();
    }

    define(name, srcX, srcY, srcW, srcH,w=this.tilesize,h=this.tilesize){
        const buff = document.createElement('canvas');
        buff.width = w;
        buff.height = h;
        
        buff.getContext('2d').drawImage(this.image,
            srcX, srcY, //src Starting pos 
            srcW, srcH, // src size
            0,0, //draw to buff starting pos
            w,h, //size
            )

        this.sprites.set(name, buff);

    }

    draw(name,context,x,y){
        const tileBuff = this.sprites.get(name);
        if (tileBuff){
            context.drawImage(tileBuff,x,y)
        }

    }

}