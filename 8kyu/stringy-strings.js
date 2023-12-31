// DESCRIPTION:
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// SOLUTION:
function stringy(size) {
    return size % 2 === 0 ? "10".repeat(size / 2) :"10".repeat(size / 2) + "1";
}

console.log("Solution-1: ", stringy(6));
console.log("Solution-2: ", stringy(4));
console.log("Solution-3: ", stringy(12));
console.log("Solution-4: ", stringy(7));