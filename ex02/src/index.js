function myCounter(n) {
    if (n>=1) {
        const countArray = myCounter(n-1);
        countArray.unshift(n);
        return countArray;
    } else {
        return [];
    }
}

console.log(myCounter(-1));
console.log(myCounter(10, 9, 8, 7, 6, 5, 4, 3, 2, 1));
console.log(myCounter(5, 4, 3, 2, 1));
module.exports = myCounter;