class EntityCollider {

    constructor(level){
        this.level = level;

    }

    check(subject){
        this.level.entities.forEach( entity => {
            

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