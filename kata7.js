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
// console.log(removeBMW("bmwvolvoBMW")); // "volvo"
// console.log(removeBMW(123)); // This program only works for text

/* (3) Incrementer
Given an input of an array of digits, return the array with each digit incremented by its position 
in the array: the first digit will be incremented by 1, the second digit by 2, etc.
 Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you
a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]  #  9+3 = 12  -->  2
*/
function incrementer(nums) {
  return nums.map((num, index) => (num + index + 1) % 10);
  // % 10 to get last digit when number is of base 10
  // [OR]
  // return nums
  //   .map((num, index) => (num + index + 1).toString().slice(-1))
  //   .map(Number);
}
// console.log(incrementer([4, 6, 9, 1, 3])); // [5, 8, 2, 5, 8]
// console.log(incrementer([])); // []

/* (4) Number of Decimal Digits
Determine the total number of digits in the integer (n>=0) given as input to the function.
For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.
Be careful to avoid overflows/underflows.

All inputs will be valid.
*/
function digits(n) {
  return n.toString().length;
}
// console.log(digits(128685)); // 6
// console.log(digits(0)); // 1

/* (5) Double Trouble
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers
 in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
[1, 3, 4, 5]

Work through the array from left to right.
Return the resulting array.

*/
function trouble(x, t) {
  let output = [];
  for (let i = 0; i < x.length; i++) {
    // If the last number in output + current number = t
    if (x[i] + output[output.length - 1] === t) {
      // Skip adding the current element (remove it)
      continue;
    }
    output.push(x[i]);
  }
  return output;
  // [OR]
  // return x.reduce(
  //   (acc, cur) => (cur + acc[acc.length - 1] !== t ? [...acc, cur] : acc),
  //   []
  // );
}
// console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7)); // [1, 3,5, 6, 7, 4]
// console.log(trouble([4, 1, 1, 1, 4], 2)); //  [4, 1, 4]
// console.log(trouble([2, 6, 2], 8)); // [2, 2]

/* (6) 99 Bottles of Beer
Instructions
Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings:
each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

Example
[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ]
*/
var sing = function () {
  let lycrics = [];
  for (let i = 99; i >= 0; i--) {
    i === 1
      ? lycrics.push(
          `${i} bottle of beer on the wall, ${i} bottle of beer.`,
          `Take one down and pass it around, no more bottles of beer on the wall.`
        )
      : i > 1
      ? lycrics.push(
          `${i} bottles of beer on the wall, ${i} bottles of beer.`,
          `Take one down and pass it around, ${i - 1} ${
            i - 1 > 1 ? "bottles" : "bottle"
          } of beer on the wall.`
        )
      : lycrics.push(
          "No more bottles of beer on the wall, no more bottles of beer.",
          `Go to the store and buy some more, 99 bottles of beer on the wall.`
        );
  }
  return lycrics;
};
console.log(sing());
