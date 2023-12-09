// Task
// Given an array of integers, remove the n smallest. If there are multiple elements with the same value, remove the ones with a lower index first. If n is greater than the length of the array/list, return an empty list/array. If n is zero or less, return the original array/list.

// Don't change the order of the elements that are left.

// Examples
// *removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
// *removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
// *removeSmallest 2 [5,3,2,1,4] = [5,3,4]
// *removeSmallest 3 [5,3,2,1,4] = [5,4]
// *removeSmallest 3 [1,2,3,4,5] = [4,5]
// *removeSmallest 5 [1,2,3,4,5] = []
// *removeSmallest 9 [1,2,3,4,5] = []
// *removeSmallest 2 [1,2,1,2,1] = [2,2,1]



// SOLUTION:    
function removeSmallest(n, arr) {   
    let result = Array.from(arr);
    while(n > 0){
      let indexMin = result.indexOf(Math.min(...result));
      result.splice(indexMin, 1);
      n--;
    }
    return result; 
}

console.log("Solution-1:", removeSmallest((-10), [1,2,3,4,5]));
console.log("Solution-2:", removeSmallest(0,[1,2,3,4,5]));
console.log("Solution-3:", removeSmallest(2, [5,3,2,1,4]));
console.log("Solution-4:", removeSmallest(3, [5,3,2,1,4]));
console.log("Solution-5:", removeSmallest(3, [1,2,3,4,5]));
console.log("Solution-6:", removeSmallest(5, [1,2,3,4,5]));
console.log("Solution-7:", removeSmallest(9, [1,2,3,4,5]));
console.log("Solution-8:", removeSmallest(2, [1,2,1,2,1]));
