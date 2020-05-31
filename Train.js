class Train {

    constructor(x,y,tileSize,sprites){
        this.sprites = sprites;
        this.pos = new Vec2(x,y); //index
        this.speed = 100;
        this.speed = new Vec2(0,0)
        this.tileSize=tileSize

        this.speedToBeAssignted=[]; //stores moves already assignt

        this.tail = [];
        this.tail[0] = {
            x: this.pos.x , y: this.pos.y
        };
    }

    setDir(dir){
        let res;
        if (this.speedToBeAssignted.length==0){
            res = addVecs(this.speed,dir);
        } else {
            res = addVecs(
                this.speedToBeAssignted[this.speedToBeAssignted.length-1],dir);
        }


        if (!res.equals(new Vec2(0,0))){
            if(this.speedToBeAssignted.length < 3){
                this.speedToBeAssignted.unshift(dir)
            }
        }

    }


    update(){

        if (this.speedToBeAssignted.length>0){
            let dir  = this.speedToBeAssignted.pop()
            this.speed.x = dir.x;
            this.speed.y = dir.y;
        }

        // [front(0),1,2,3,4..]
        this.pos.x+=this.speed.x;
        this.pos.y+=this.speed.y;
        collidesWithEdges(this,rows,cols)
    
        for (let i=this.tail.length-1;i>0;i--){
            this.tail[i]=this.tail[i-1];
        }
        
        this.tail[0] = {
            x: this.pos.x , y: this.pos.y
        };

        this.selfCollision() 
    }

    draw(ctx){
        /*ctx.fillStyle = "red"
        ctx.fillRect(
            this.tail[0].x*this.tileSize,
            this.tail[0].y*this.tileSize,
            this.tileSize,this.tileSize)*/
        this.sprites.draw(RIGHT,ctx,
            this.tail[0].x*this.tileSize,this.tail[0].y*this.tileSize,
            this.tileSize,this.tileSize);

        ctx.fillStyle = "black"
        for (let i = 1;i<this.tail.length;i++){
            ctx.fillRect(
                this.tail[i].x*this.tileSize,
                this.tail[i].y*this.tileSize,
                this.tileSize,this.tileSize)
                ctx.strokeStyle="red"
                ctx.beginPath();
                ctx.rect(this.tail[i].x*this.tileSize,
                    this.tail[i].y*this.tileSize,
                    this.tileSize,this.tileSize);
                ctx.stroke();
        }

        
    
    }

    eats(entity){
        if (this.pos.equals(entity.pos)){
            this.tail.push({
                x: this.pos.x - this.speed.x , y: this.pos.y - this.speed.y
            })
            return true;
        }
    }

    selfCollision(){
        for (let i = 3;i<this.tail.length;i++){
            if (this.pos.x === this.tail[i].x && this.pos.y === this.tail[i].y ){
                this.tail.length=1;
            }
        }
    }

}