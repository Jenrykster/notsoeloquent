function deepComp(datA, datB){
    if(typeof datA == "object" && typeof datB == "object" && datA != null && datB != null){
        let keys = Object.keys(datA);
        let equal = true;
        for(let key of keys){
            deepComp(datA[key],datB[key]) ? equal = true: equal = false;
            if(!equal) return equal
        }
        return equal;
    }
    else{
        return datA === datB ? true : false;
    }
}

objA = {animal: "cat", nome: "Mel"};
objB = objA;
objC = {animal: "cat", nome: "Mel"};
objD = {animal: "dog", nome: "Mel"};

console.log(deepComp(objA, objB));
console.log(objA == objC);
console.log(deepComp(objA, objC));
console.log(deepComp(objA, objD));

console.log(deepComp(1, 1));