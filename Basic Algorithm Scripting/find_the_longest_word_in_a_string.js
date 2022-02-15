// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let strArr = str.split(' ');
  let maxString = 0;
  for(let i = 0;i < strArr.length;i++) {
    if(strArr[i].length > maxString) {
      maxString = strArr[i].length;
    }
  }
  return maxString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



// function findLongestWord(str) {
//   var longestWord = str.split(' ').reduce(function(maxString, currentWord) {
//     return currentWord.length > maxString.length ? currentWord : maxString;
//   }, "");
//   return longestWord.length;
// }

// function findLongestWordLength(str) {
//   return Math.max(...str.split(" ").map(word => word.length));
// }