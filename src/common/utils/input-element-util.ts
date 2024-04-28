export class InputElementUtility {
    
   
    static maxLengthCheck(event: any) {
        if (event.target.value.length > event.target.max.length) {
            event.target.value = event.target.value.slice(0, event.target.max.length);
            return false;
        }
        return true;
    }

    static isNumeric(evt: any) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        var strkey = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(strkey) && key !=37 && key !=38 && key !=39 && key!=40 && key!=8 && key!=46) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) 
                theEvent.preventDefault();

            return false;
        }
        else{
            return true;
        }
    }
}