function sumFibonacci(num){
    var previousN = 0;
    var currentN = 1;
    var result = 0;
    while(currentN <= num){
        if (num === 1) {
            result = 1;
        }
        else if (currentN % 2 !== 0) {
            result += currentN;
        }
        currentN += previousN;
        previousN = currentN - previousN;
    }
    return result;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;