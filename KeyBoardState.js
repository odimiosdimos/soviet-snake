const PRESSED=1;
const RELEASED=0;

class KeyBoardState {
    constructor(){
        //hold the states key, for example pressed
        this.keyStates = new Map();

        //holds the func that will be triggered when 
        //key pressed or released
        this.keyCallbackMap = new Map();
    }

    //adds a method that will be triggered with a a key 
    //press
    addKeyMaping(keyCode, callback){
         //callback functions should take the keystate as argument
        this.keyCallbackMap.set(keyCode, callback)
    }

    handleEvent(event){
        const keyCode = event.code;

        if (!this.keyCallbackMap.has( keyCode)){
            return ;
        }
        

        //prevent default action of the key
        event.preventDefault()

        const keyState = event.type === "keydown" ? PRESSED:RELEASED

        if(keyState!=this.keyStates.get(keyCode)){
            this.keyStates.set(keyCode,keyState)

            //callback functions should take the keystate as argument
            this.keyCallbackMap.get(keyCode)(keyState)
            //wich is the same with:
            //const calledback = this.keyCallbackMap.get(keyCode)
            //calledback(keyState)
        }

    }


    listenTo(surface){
        ['keydown','keyup'].forEach( eventType => {
            surface.addEventListener(eventType, event => {
                this.handleEvent(event)
            })
        })  
    }


}

/*
events.code :
'Spase', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'
'KeyA', 'KeyB' ... 'keyZ'
'Digit1', 'Digit2' .. 'Digit10'
'ShiftLeft', 'ShiftRight'
'controlLeft', 'ControlRight'
'Escape'
*/