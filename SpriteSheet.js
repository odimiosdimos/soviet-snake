class SpriteSheet {
    constructor(image,tilesize=32){
        this.image = image;
        this.tilesize = tilesize;

        this.sprites = new Map();
    }

    define(name, srcX, srcY, srcW, srcH,
        mirrorX=false, mirrorY=false, rotation=0,w=this.tilesize,h=this.tilesize){
            
        const buff = document.createElement('canvas');
        buff.width = w;
        buff.height = h;

        const context = buff.getContext('2d')

        //to mirror it
        if(mirrorX){
            context.scale(-1,1);
            context.translate(-w,0)
        }

        
        if(mirrorY){
            context.scale(1,-1);
            context.translate(0,-h)
        }


        
        context.drawImage(this.image,
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