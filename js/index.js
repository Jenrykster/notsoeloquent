console.log("Hello World !");

console.log("The escape character for new-line is \"\\n\""); // The "\" can be used to display special characters like a tab (\t)

console.log(Infinity + " and " + -Infinity + " are actually number values"); 

console.log("I can also use scientific notation like: " + 2e-3 + " which is represented like \"2e-3\""); // This is the same as 0.002

console.log("I can use typeof to get the type of data, ex: " + typeof Infinity + " is the type of Infinity");

console.log(`Boolean operators are cool ! is 2 more than one ? ${2 > 1} it is !`); 

console.log("Ternary operators are cool too. " + (1 > 2? "1 is bigger" : "two is bigger")); //This is a conditional ternary operator


/*  
/
/   Chapter 2
/
*/

let aLocalVariable = "I'm a local variable"; // let is a [keyword] used for defining bindings/variables
console.log(aLocalVariable);

var anOldJSvar = "I'm a pre-2015 javascript variable"; const aConstant = "I'm a constant";  // We can also use [var] and [const] for binding values 
console.log(`${anOldJSvar} and \n${aConstant}`);

let favoriteGame = prompt("What is your favorite game ?"); //Functions use [()] and are a set of instructions wrapped in a value
    //^ We can also store the [returned] value for future uses


let userAge = Number(prompt("How old are yoy ?")); //We need to convert the returned value depending on our use
let date = new Date(); //Ignore this for now
let yearBorn = date.getFullYear() - userAge;
console.log(`You were born in ${yearBorn}`);

if (favoriteGame.toLowerCase() == "persona") {    //
    console.log("I love persona too !");          //
}                                                 // This is a conditional block, if the statement in [if()] is true
else {                                            // it runs the code between the brackets, if it's false it runs the 
    console.log(`I also like ${favoriteGame}`);   // the [else] block
}                                                 //

let counter = 0;
while (counter <= 10){                            // Same as [if] but it loops until the condition is false
    console.log(counter);                         // [while(true)] creates an infinite loop
    counter += 1;
}

do {                                              //[do] is the same as while but it always execute at least once
    console.log("I'm still gonna appear on your console");  
} while (false);

for(let forCounter = 0; forCounter <= 12; forCounter += 2){
    console.log(forCounter);                      //More comprehensible loop 
}

while(true){
    console.log("Drink ☕");
    break;        // Too much coffee is bad for your health, use break to stop a loop
}

switch("case two"){  
    case "case one":
        console.log("I'm not going to get printed : (");
        break;
    case "case two":
        console.log("Wow, switch are strange");
        break;
    default:
        console.log("What ????");
        break;
}

/*
/
/   Exercises 
/
*/
for(let tri = "#"; tri.length < 8; tri += "#" ){
    console.log(tri);
}

for(let number = 0; number <= 100; number++){
    if(number % 3 == 0){
        console.log(number + " is Fizz");
    }
    else if(number % 5 == 0 && number % 3 != 0){
        console.log(number + " is Buzz");
    }
    if (number % 3 == 0 && number % 5 == 0) {
        console.log(number + " is FizzBuzz")
    }
}

