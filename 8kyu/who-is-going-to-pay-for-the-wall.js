// DESCRIPTION:
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"


// SOLUTION:
function whoIsPaying(name){
    return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}
console.log("Solution-1: ", whoIsPaying("Mexico"));
console.log("Solution-2: ", whoIsPaying("Me"));