'use strict'

//getPrimes functions array of prime values for n range numbers

 const getPrimes = function(num) {
let result = [2, 3];
//first classs function used to evaluate if a number is a prime number
const evaluatePrime = function(value) {
    let isPrime = false;
    for(let i = 2 ; i < value ; i += 1){
        if(value % i === 0 ){
            isPrime = false;
            break;
        }else{
            isPrime = true;
        }
        return isPrime;
    }
}
//Testing for zero or negative values
if(num < 0 || num === 0){
    return 'Negative number or zero not accepted';
    //Testing for non Interger
    }else if(typeof num !== 'number'){
         return 'Wrong input';
         }else if(num === 1){
             return '1 not prime';
         }else if(num === 2){
            return [2];
        }else if(num === 3){
            return result;
        }else{
            //Looping through the input value to obtain all prime numbers in the range of number
        for(let i = 4; i <= num ; i += 1){
            if(evaluatePrime(i) === true){
                    result.push(i);
            } 
        }
    return result;
}};

module.exports = getPrimes;
