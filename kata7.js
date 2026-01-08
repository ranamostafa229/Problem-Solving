/* (1) Solve String Scramble
Given a string and an array of indices, rearrange the characters of the string so that each 
character is placed at the position specified by the corresponding index in the array.

Example
input: "abcd", [0, 3, 1, 2]
output: "acdb"

Notes
The string and the array will be of equal length.

The string will contain valid characters (A-Z, a-z, or 0-9);
the array will contain valid indices.

*/

function scramble(str, arr) {
  // solution 1
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    output[index] = str[i];
  }
  return output.join("");
}
// console.log(scramble("abcd", [0, 3, 1, 2])); // "acdb"

/* (2) Remove B M W
It happened decades before Snapchat, years before Twitter and even before Facebook. 
Targeted advertising was a bit of a challenge back then. One day, the marketing professor at my university
told us a story that I am yet to confirm using reliable sources. 
Nevertheless, I retold the story to dozens of my students already, so, sorry BMW if it is all a big lie.

Allegedly, BMW, in an attempt to target the educated, produced billboard posters featuring the English 
alphabet with three letters missing: B, M and W. Needless to say, many were confused, 
some to the extent of road accidents.

Your task is to write a function that takes one parameter str that MUST be a string and removes all 
capital and small letters B, M and W.
If data of the wrong data type was sent as a parameter the function must throw an error with the following
specific message:

new Error("This program only works for text.");

*/
function removeBMW(str) {
  return typeof str !== "string"
    ? new Error("This program only works for text.")
    : str.replace(/[bmw]/gi, "");
}
console.log(removeBMW("bmwvolvoBMW")); // "volvo"
console.log(removeBMW(123)); // This program only works for text
