class Train extends Entity {

    constructor(x,y,level){
        super()
        this.audioBoard = level.audioBoard;
        this.sprites = level.sprites;
        this.pos = new Vec2(x,y); //index
        this.speed = new Vec2(1,0)
        this.tileSize= level.tileSize

        this.speedToBeAssignted=[]; //stores moves already assignt

        this.tail = [];
        this.tail[0] = {
            x: this.pos.x , y: this.pos.y
        };

        this.framesRight = new Animation([RIGHT,RIGHT2],3);
        this.framesLeft = new Animation([LEFT, LEFT2],3);
        this.framesUp = new Animation([UP, UP2],3);
        this.framesDown = new Animation([DOWN, DOWN2],3);
        this.frameSteps=0; //never zero again

        this.score = 0;
        
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
        super.update()
        if (this.speedToBeAssignted.length>0){
            let dir  = this.speedToBeAssignted.pop()

            if (dir.x != this.speed.x || dir.y != this.speed.y){
                this.audioBoard.playAudio('turn')  
            }

            this.speed.x = dir.x;
            this.speed.y = dir.y;
                  
        }

        // [front(0),1,2,3,4..]
        this.pos.x+=this.speed.x;
        this.pos.y+=this.speed.y;
        collidesWithEdges(this,ROWS,COLS)
    
        for (let i=this.tail.length-1;i>0;i--){
            this.tail[i]=this.tail[i-1];
        }
        
        this.tail[0] = {
            x: this.pos.x , y: this.pos.y
        };

        this.selfCollision() 

        if (this.speed.x === 0 && this.speed.y === 0){
            this.frameSteps=0;
        } else {
            this.frameSteps++;
        }
    }


    chooseFrame(steps){
        //also could be map instead of ifs, for ectra speed
        if (this.speed.x==1){
            return this.framesRight.resolveFrame(steps)
        } else if (this.speed.x==-1){
            return this.framesLeft.resolveFrame(steps);
        } else if(this.speed.y==-1){
            return this.framesUp.resolveFrame(steps);
        } else if(this.speed.y==1){
            return this.framesDown.resolveFrame(steps);
        }

        
        return this.framesRight.resolveFrame(steps);
    }

    draw(ctx){
        this.sprites.draw(this.chooseFrame(this.frameSteps),ctx,
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
        this.tail.push({
            x: this.pos.x - this.speed.x , y: this.pos.y - this.speed.y
        })
        this.audioBoard.playAudio('eat')
        this.audioBoard.playAudio('eat_')
    }


    collides(entity){
        console.log(" Train collided with "+ entity.constructor.name)
        if ( entity instanceof Reactonary && !entity.killable.dead ) {
            this.eats(entity);
            this.score += 100;
        }
    }

    selfCollision(){
        for (let i = 3;i<this.tail.length;i++){
            if (this.pos.x === this.tail[i].x && this.pos.y === this.tail[i].y ){
                this.tail.length=1;
                this.score=0;
                
            }
        }
    }

}