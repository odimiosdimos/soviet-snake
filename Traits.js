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
    }

    update(entity){
    }

    killed(){
        this.dead=true;
    }
}