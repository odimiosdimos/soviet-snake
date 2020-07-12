class Entity {
    constructor(){
        this.traits = []
    }

    update(){
        this.traits.forEach(trait => {
            trait.update(this)
        })
    }

    draw(context){

    }

    addTrait(trait){
        this.traits.push(trait);
        this[trait.NAME] = trait;

    }

}