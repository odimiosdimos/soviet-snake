class Grid {
    constructor(plegma){
        this.plegma = this.copy2dArray(plegma);
    }

    copy2dArray(plegma){
        const newPlegma= []
        plegma.forEach( (row,y) => {
            newPlegma.push([])
            row.forEach( (col,x) => {
                newPlegma[y].push(plegma[y][x]);
            })
            
        });
        return newPlegma;
    }

    get(indexX, indexY){

        if (this.plegma[indexY]==undefined){
            return undefined
        }
        return this.plegma[indexY][indexX];
    }

    getWidth(){
        return this.plegma.length
    }

    getHeight(){
        return this.plegma[0].length
    }

    set(indexX, indexY, value){
        if (this.plegma[indexY]==undefined 
            || this.plegma[indexY][indexX]==undefined ){
            return undefined
        }

        this.plegma[indexY][indexX] = value;

    }


}