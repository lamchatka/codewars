// DESCRIPTION:
// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1



// SOLUTIONS: 
function solution1(fullText, searchText) {
    let count = 0;
    let pos = fullText.indexOf(searchText);
    while (pos !== -1) {
        count++;
        pos = fullText.indexOf(searchText, pos + 1);
    }
    return count;

}

function solution2(fullText, searchText) {
    let arr = fullText.split(searchText).join('');
    let count = fullText.length - arr.length;
    count = count / searchText.length;
    return count;
}

// Solution1
console.log("Solution-1: ", solution1('abcdeb', 'b'), 2);
console.log("Solution-2: ", solution1('abc', 'b'), 1);
console.log("Solution-3: ", solution1('abbc', 'bb'), 1);

// Solution2

console.log("Solution-1: ", solution2('abcdeb', 'b'), 2);
console.log("Solution-2: ", solution2('abc', 'b'), 1);
console.log("Solution-3: ", solution2('abbc', 'bb'), 1);