const square = function(x) { //We can bind functions to extend the language capabilities 
    return x * x; //Then we can return a value after the instructions are executed
}

console.log(square(3));

let globalValue = "I'm a global variable";

if(true){
    let localValue = "I'm a local variable"; // variables declared with [let] are only visible to their current scope [{everything here}]
    var oldJsVar = "I'm a variable declared using [var]"; // [var] declares global variables (visible in the entire program)
    console.log(globalValue);
    console.log(localValue);
}

console.log("The next value is gonna trow an [undefined] error");
try {
    console.log(localValue); // UNDEFINED
} catch (error) {
    console.error(error);
}

console.log("Heh");
console.log(oldJsVar);
console.log(globalValue);

console.log(declaredFunction()); //Functions declared using that syntaxe are pushed to the top of the code when it's executed, so you can call it in any part of the code

function declaredFunction(){
    return "I'm gonna travel back to the past !";
}

const arrowFunction = () => {return "Arrow functions are neat"} // Another way of binding functions
console.log(arrowFunction());

function optArg(x, y=2){ //By using an equal sign we can create optional arguments 
    console.log(x, " ", y)
}

optArg(1,5);