//Q.1
//Find the sum of the digit in the given number 
function giveSumOfDigit(num){
    let sum = 0;
    let quotient = num;
    for(let i = num ; i > 10; i){
        quotient = Math.floor(i / 10);
        const remainder = i % 10;
        sum = sum + remainder;
        i  = quotient;
    }
    sum = sum + quotient;
    console.log(sum);
}

giveSumOfDigit(290);