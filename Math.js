class Vec2 {
    constructor(x, y) {
        this.set(x, y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(vec2){
        return (this.x == vec2.x && this.y == vec2.y)
    }

    copy(){
        return new Vec2(this.x,this.y)
    }

}

function copy(vec){
    return new Vec2(vec.x,vec.y)
}

function addVecs(vec1,vec2){
    return new Vec2( vec1.x + vec2.x , vec1.y + vec2.y )
}
