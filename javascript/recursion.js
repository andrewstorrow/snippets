// return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter
function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
    } else if (startNum < endNum) {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    } else if (startNum > endNum) {
        const arr = rangeOfNumbers(startNum - 1, endNum);
        arr.unshift(startNum);
        return arr;
    }
};

console.log("rangeOfNumbers(1, 5) = " + rangeOfNumbers(1, 5));
console.log("rangeOfNumbers(6, 9) = " + rangeOfNumbers(6, 9));
console.log("rangeOfNumbers(4, 4) = " + rangeOfNumbers(4, 4));
console.log("rangeOfNumbers(9, 4) = " + rangeOfNumbers(9, 4));

//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

//Write a recursive function, multiply(arr, n), that returns the product of the first n elements of an array arr.
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
// console.log("Counting Down " + countdown(5));

function countdown2(n) {
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}
// console.log("Counting Down2 " + countdown2(5));

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
// console.log("Counting Up " + countup(5));