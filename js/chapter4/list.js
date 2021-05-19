// DO NOT try to read this, it'll probably give you a stroke

let listOfGames = ["Animal Crossing", "Dragon Quest", "Suikoden", "Pokemon", "Disgaea", "Persona", "Metal Gear", "Final Fantasy"].sort();

function arrayToList(array){
    let result = {};
    let currEntry = result;
    for(element of array){
        let newEntry = {game: element, rest: null};
        if(currEntry.rest != null){
            currEntry = newEntry;
        }
        else{
            currEntry.rest = newEntry;
            currEntry = newEntry;
        }
    }
    return result;
}

function listToArray(list){
    let result = [];
    let currItem = list;
    while(currItem.rest != null){
        result.push(currItem.game);
        currItem = currItem.rest;
    }
    result.push(currItem.game);
    return result;
}

function prepend(element, list){
    let newList = {};
    Object.assign(newList, list);
    newList.game = element;
    return newList;
}

function nth(list, pos){
    let index = 0;
    if(index != pos){
        let list = list.rest;
        nth(list, pos);
    }
    else{
        if(list.game === undefined && list.rest.game != undefined){
            return list.rest.game;
        }
        else{
            return list.game;
        }
    }
}

let gamesList = arrayToList(listOfGames);
let anotherGameArray = listToArray(gamesList);
let updatedGameList = prepend("Dragon Age", gamesList);
let updatedGameArray = listToArray(updatedGameList);

console.log(updatedGameList);
console.log(gamesList)
console.log(updatedGameArray);
console.log(nth(gamesList,0));
console.log(nth(updatedGameList,0));