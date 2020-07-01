class Animation{
    constructor(frames, framesDuration){
        this.frames = frames;
        this.framesDuration = framesDuration;
    }

    resolveFrame(step){
        const frameIndex = Math.floor( 
            (step / this.framesDuration) % this.frames.length );
        return this.frames[frameIndex];
    }

}