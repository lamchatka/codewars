// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// SOLUTION:
function getSum(a, b) {
    const min = a < b ? a : b;
    const max = a < b ? b : a;
    let sum = 0;
    for(let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
}

console.log("Solution-1: ", getSum(1, 0))
console.log("Solution-2: ", getSum(1, 2))
console.log("Solution-3: ", getSum(0, 1))
console.log("Solution-4: ", getSum(1, 1))
console.log("Solution-5: ", getSum(-1, 0))
console.log("Solution-6: ", getSum(-1, 2))
