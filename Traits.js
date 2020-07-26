class Trait {

    constructor(name){
        this.NAME = name;
    }

    update(entity){

    }

}

class Killable extends Trait {
    constructor(){
        super('killable')
        this.dead = false;
        this.deadTime = 3;
    }

    update(entity, level){
        if(this.dead){
            this.deadTime -= 1;
            if (this.deadTime <= 0){
                level.entities = level.entities.filter(e => e !== entity);
                //or as in reactonary
            }
        }
    }

    killed(){
        this.dead=true;
    }
}