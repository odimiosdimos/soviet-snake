class Entity {
    constructor(){
        this.traits = []
    }

    update(level){
        this.traits.forEach(trait => {
            trait.update(this,level)
        })
    }

    draw(context){

    }

    addTrait(trait){
        this.traits.push(trait);
        this[trait.NAME] = trait;

    }

}