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