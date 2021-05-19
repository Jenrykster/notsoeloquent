function range(startValue, endValue, step = 1){
    let numberArray = [];
    for(let i = startValue; i != endValue; i < endValue ? i += step : i -= step){
        numberArray.push(i);
    }
    numberArray.push(endValue);
    return numberArray;
}

function sum(numberArray){
    let total = 0;
    for (let i = 0; i <= numberArray.length - 1; i++ ){
        total += Number(numberArray[i]);
    }
    return total;
}

listOfNumbers = range(1, 10); 
console.log(listOfNumbers);

console.log(sum(listOfNumbers));