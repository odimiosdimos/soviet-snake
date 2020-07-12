function collidesWithEdges(entity,rows,cols){

    if (entity.pos.x<0){
        entity.pos.x = cols-1;
    }

    if (entity.pos.x>rows-1){
        entity.pos.x = 0;
    }

    if (entity.pos.y<0){
        entity.pos.y = rows-1;
    }

    if (entity.pos.y>cols-1){
        entity.pos.y = 0;
    }

}

//collides with obstacles of Map

