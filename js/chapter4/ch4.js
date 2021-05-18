let games = ["Disgaea", "Persona", "Metal Gear", "Final Fantasy"]; // This is a data structure called array, which is a list of items

let firstGame = games[0]; // This is the syntax to access a value inside the array. Array positions start at [0] so the last value position is always equal [array].length - 1
let lastPosition = games.length - 1; // Length is a property, it could be accessed with ["length"] too
let lastGame = games[lastPosition]; // So every member of an array is also a property

console.log(games);
console.log("The first and the last games are:", firstGame, "and", lastGame);

console.log(games[1].toUpperCase(), "!"); // Properties can also store function values, those are called methods 
                    // ^ This is a [String] method used to make (you guessed it) all characters UPPERCASE

games.push("Suikoden"); //This will add "Suikoden" to the list of games on the last position
games.push("Free Fire"); //Let's remove this from the list, as it isn't a game
console.log("Remove", games.pop(), "Oops this wasn't a game");

let Jenryk = {  // This is an object, the following syntax can be used to assign values to a more complex data structure 
    name: "Jenryk",
    favoriteGames: games,
    age: new Date().getFullYear() - 2003,
}

console.log(Jenryk);
console.log(`${Jenryk.name} likes ${Jenryk.favoriteGames[4]}`); // We can access Jenryk properties like this [object].[property]

console.log("Jenryk gf is", typeof Jenryk.gf); // Reading an non-existing value will return [undefined]

Jenryk.favoriteGame = "Free Fire"; // This is wrong, but we can fix that
delete Jenryk.favoriteGame; // Fixed
console.log(Jenryk.favoriteGame); // This will print [undefined] on the console

let obA = {v : 1};
let obB = {v : 1};

console.log(obA.v == obB.v); // This is true
console.log(obA == obB); // This is false