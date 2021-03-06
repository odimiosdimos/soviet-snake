//The actual 

class Timer{
    constructor(deltaTime){
        this.stop = false;
        let dt = 0;
        let lastTime = 0;

        this.updateProxy = (time) => {

            //if (accumulatedTime > 10*deltaTime){ accumulatedTime = 10*deltaTime}
            dt = time - lastTime;
            if (dt>deltaTime){
                this.update()
                lastTime=time;
            }
            if (!this.stop){
                requestAnimationFrame(this.updateProxy)
            }
        
        }

    }

    enqueue(){
        requestAnimationFrame(this.updateProxy)
    }

    start(){
        requestAnimationFrame(this.updateProxy)
    }


}