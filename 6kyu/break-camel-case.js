// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// SOLUTION:
// complete the function
function solution(string) {
    const lowerCaseStringArr = string.toLowerCase().split("");
    const stringArr = string.split("");
    let indexArr = [];
    let resStr = "";
    for(let i = 0; i < stringArr.length; i++){
      if(stringArr[i] !== lowerCaseStringArr[i]){
        indexArr.push(i);
      }
    }
    // 0 - 5, 5 - 11, 11 - len
    // 0 - 11 11 - len
    let startIndex = 0;
    let endIndex = 0;
    for (let i = 0; i <= indexArr.length; i++){
        if (i === indexArr.length) {
            resStr += string.slice(indexArr[i - 1]);
        }else {
            endIndex = indexArr[i]; //  5 // 11
            resStr+= string.slice(startIndex, endIndex) + " "; // 0, 5; 5, 11;
            startIndex = indexArr[i]; // 5 // 11
        }
       
    }
    return resStr;
}

console.log("Solution-1: ", solution('camelCasing'));
console.log("Solution-2: ", solution('camelCasingTest'));