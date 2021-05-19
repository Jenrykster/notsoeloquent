let listOfGames = ["Animal Crossing", "Dragon Quest", "Suikoden", "Pokemon", "Disgaea", "Persona", "Metal Gear", "Final Fantasy"].sort() 

function reverseArray( arrayToReverse){
    let reversedArray = [];
    for(element in arrayToReverse){
        reversedArray.unshift(arrayToReverse[element]);
    }
    return reversedArray;
}

function reverseArrayInPlace(arrayToReverse){
    let tempArray = reverseArray(arrayToReverse);
    for(let i = 0; i < arrayToReverse.length; i++){
        arrayToReverse[i] = tempArray[i];
    }
}

console.log(listOfGames); // Still the original 
console.log(reverseArray(listOfGames)); // Just a copy
reverseArrayInPlace(listOfGames);
console.log(listOfGames); // The original array is now reversed