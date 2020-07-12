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
        console.log('is '+entity.constructor.name + " dead? "+this.dead)
    }

    killed(){
        this.dead=true;
    }
}