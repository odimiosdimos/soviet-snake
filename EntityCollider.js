class EntityCollider {

    constructor(entities){
        this.entities = entities;

    }

    check(subject){
        this.entities.forEach( entity => {
            

            if (subject.pos.equals(entity.pos)){
                if (subject === entity ) {
                    return ;
                }
                subject.collides(entity)
                entity.collides(subject)
            }

            
        });

    }


}