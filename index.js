function printNumbers(from,to){
    let current = from;

    let timerId = setInterval(function(){
        alert(current);
        if ( current==to){
            clearInterval(timerId);
        }
        current++;
    },1000);
}

printNumbers( 1,20);

function printNumbers(from,to){
    let current = from;

   setTimeout(function go() {
    alert(current);
    if ( current < to){
        setTimeout(go,100);
    }
    current++;
   }, 1000);
}

printNumbers( 1,20);
