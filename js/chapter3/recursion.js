function isEven(number){
    number = Math.abs(number);
    return number >=2 ? isEven(number - 2) : number == 0 ? true : false;
}

console.log(isEven(-2));