// DESCRIPTION:
// Complete the solution so that it returns true 
// if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// SOLUTION:

function solution(str, ending){
    return str.endsWith(ending) ? true : false;
}

console.log("Solution-1: ", solution('abc', 'bc'))
console.log("Solution-2: ", solution('abc', 'd'))

