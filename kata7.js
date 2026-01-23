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
          `Take one down and pass it around, no more bottles of beer on the wall.`,
        )
      : i > 1
        ? lycrics.push(
            `${i} bottles of beer on the wall, ${i} bottles of beer.`,
            `Take one down and pass it around, ${i - 1} ${
              i - 1 > 1 ? "bottles" : "bottle"
            } of beer on the wall.`,
          )
        : lycrics.push(
            "No more bottles of beer on the wall, no more bottles of beer.",
            `Go to the store and buy some more, 99 bottles of beer on the wall.`,
          );
  }
  return lycrics;
};
// console.log(sing());

/* (7) Player Contact Manager
You are the Dungeon Master for a public DnD game at your local comic shop and recently 
you've had some trouble keeping your players' info neat and organized so you've decided
 to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number 
from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.

Examples
player_manager("John Doe, 8167238327, Jane Doe, 8163723827") 
returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
player_manager(nil) returns []
player_manager("") returns []
playerManager("John Doe, 8167238327, Jane Doe, 8163723827") 
returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
playerManager(null) returns []
playerManager("")   returns []

*/
function playerManager(players) {
  if (players === null || players.trim() === "") return [];
  return players
    .split(",")
    .reduce(
      (acc, cur, index, arr) =>
        index % 2 === 0
          ? [...acc, { player: cur.trim(), contact: +arr[index + 1].trim() }]
          : acc,
      [],
    );
}
// console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827")); // [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
// console.log(playerManager(null)); // []
// console.log(playerManager("")); // []

/* (8) ISS - Keep It Simple Stupid
KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

You are the boss of Joe.

Joe is submitting words to you to publish to a blog. He likes to complicate things.

Define a function that determines if Joe's work is simple or complex.

Input will be non emtpy strings with no punctuation.

It is simple if: the length of each word does not exceed the amount of words in the string
(See example test cases)

Otherwise it is complex.

If complex:

return "Keep It Simple Stupid"
or if it was kept simple:

return "Good work Joe!"
Note: Random test are random and nonsensical. Here is a silly example of a random test:

"jump always mostly is touchy dancing choice is pineapples mostly"

*/
function isKiss(words) {
  return words
    .split(" ")
    .every((word) => word.length <= words.split(" ").length)
    ? "Good work Joe!"
    : "Keep It Simple Stupid";
}

// console.log(isKiss("Joe had a bad day")); // "Good work Joe!"
// console.log(isKiss("Sometimes joe cries for hours")); // "Keep It Simple Stupid"

/* (9) Vowel Count
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  return str.match(/[aeiou]/g)?.length || 0;
}
// console.log(getCount("abracadabra")); // 5
// console.log(getCount("hello world")); // 3
// console.log(getCount("xyz")); // 0

/* (10) Character Counter
You are going to be given a word. Your job will be to make sure that each character in that word has 
the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. 
The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, 
 but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.

*/
function validateWord(s) {
  return (
    new Set(
      s
        .toLowerCase()
        .split("")
        .map((char) => s.toLowerCase().split(char).length - 1),
    ).size === 1
  );
}
// console.log(validateWord("abcabc")); // true
// console.log(validateWord("abcabcd")); // false
// console.log(validateWord("123abc!")); // true
// console.log(validateWord("abc:abc")); // false

/* (11) Band name generator
My friend wants a new band name for her band. She like bands that use the formula: 
"The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat 
the noun twice and connect them together with the first and last letter, 
combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written 
as a string.

*/
function bandNameGenerator(str) {
  return str[str.length - 1].toLowerCase() === str[0].toLowerCase()
    ? str[0].toUpperCase() + str.slice(1) + str.slice(1)
    : `The ${str[0].toUpperCase() + str.slice(1)}`;
}
// console.log(bandNameGenerator("knife")); // "The Knife"
// console.log(bandNameGenerator("tart")); // Tartart

/* (12) Odds-Index
You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. 
If so, return true, otherwise false.

*/
function oddBall(arr) {
  return arr.find((num) => num === arr.indexOf("odd")) ? true : false;
  // [OR]
  // return arr.includes(arr.indexOf("odd"));
  // [OR]
  // return arr.some((num) => arr[num] === "odd");
}
// console.log(
//   oddBall([
//     "even",
//     4,
//     "even",
//     7,
//     "even",
//     55,
//     "even",
//     6,
//     "even",
//     10,
//     "odd",
//     3,
//     "even",
//   ])
// ); // true
// console.log(
//   oddBall([
//     "even",
//     4,
//     "even",
//     7,
//     "even",
//     55,
//     "even",
//     6,
//     "even",
//     9,
//     "odd",
//     3,
//     "even",
//   ])
// ); // false
// console.log(oddBall(["even", 10, "odd", 2, "even"])); // true

/* (13) Is n divisible by (...)?

Create a function that checks if the first argument n is divisible by all other arguments
(return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
*/
function isDivisible(...arg) {
  return arg.slice(1).every((num) => arg[0] % num === 0);
}
// [OR]
// function isDivisible(firstNum, ...otherNums) {
//   return otherNums.every((num) => firstNum % num === 0);
// }
// console.log(isDivisible(3, 3, 4)); // false
// console.log(isDivisible(3, 4, 3)); // false
// console.log(isDivisible(12, 3, 4)); // true
// console.log(isDivisible(8)); // true

/* (14) Don't give me five!

In this kata you get the start number and the end number of a region and 
should return the count of all numbers except numbers with a 5 in it. 
The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. 
Maybe someone of you will find an easy pure mathematics solution.

*/
function dontGiveMeFive(start, end) {
  let output = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      output.push(i);
    }
  }
  return output.length;
}
// console.log(dontGiveMeFive(1, 9)); // 8
// console.log(dontGiveMeFive(4, 17)); // 12

/* (15) Quicksum
A checksum is an algorithm that scans a packet of data and returns a single number. 
The idea is that if the packet is changed, the checksum will also change, 
so checksums are often used for detecting transmission errors, validating document contents, a
nd in many other situations where it is necessary to detect undesirable changes in data.

For this problem, you will implement a checksum algorithm called Quicksum.
A Quicksum packet allows only uppercase letters and spaces. 
It always begins and ends with an uppercase letter.

Otherwise, spaces and uppercase letters can occur in any combination, including consecutive spaces.

A Quicksum is the sum of the products of each character’s position in the packet times (*)
the character’s value. A space has a value of zero, while letters have a value equal 
to their position in the alphabet.

So, A = 1, B = 2, etc., through Z = 26. Here are example Quicksum calculations for the packets "ACM" 
and "A C M":

ACM
1 × 1 + 2 × 3 + 3 × 13 = 46 

A C M
1 x 1 + 3 x 3 + 5 * 13 = 75
When the packet doesn't have only uppercase letters and spaces or just spaces the result
to quicksum have to be zero (0).

AbqTH #5 = 0
*/
function quicksum(packet) {
  return /^[A-Z\s]+$/g.test(packet)
    ? packet
        .split("")
        .reduce(
          (acc, cur, i) =>
            acc +
            (cur !== " " ? cur.charCodeAt(0) - "A".charCodeAt(0) + 1 : 0) *
              (i + 1),
          0,
        )
    : 0;
}
// console.log(quicksum("ACM")); // 46
// console.log(quicksum("A C M")); // 75
// console.log(quicksum("???")); // 0
// console.log(quicksum("axg ")); // 0

/* (16) Summing a number's digits
Write a function which takes a number as input and returns the sum of the absolute value 
of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

*/
function sumDigits(number) {
  return [...String(Math.abs(number))].reduce(
    (acc, cur) => acc + Number(cur),
    0,
  );
}
// console.log(sumDigits(10)); // 1
// console.log(sumDigits(99)); // 18
// console.log(sumDigits(-32)); // 5

/* (17) Change two-dimensional array
Function receive a two-dimensional square array of random integers. On the main diagonal, 
all the negative integers must be changed to 0, while the others must be changed to 1 
(Note: 0 is considered non-negative, here).

(You can mutate the input if you want, but it is a better practice to not mutate the input)

Example:

Input array

[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
Output array

[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]

*/
function matrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        array[i][j] = array[i][j] >= 0 ? 1 : 0;
      }
    }
  }
  return array;
  // [OR]
  // for (let i = 0; i < array.length; i++) {
  //   array[i][i] = array[i][i] >= 0 ? 1 : 0;
  // } // as we need the index where row index = column index
  // return array;
}
// console.log(
//   matrix([
//     [-1, 4, -5, -9, 3],
//     [6, -4, -7, 4, -5],
//     [3, 5, 4, -9, -1],
//     [1, 5, -7, -8, -9],
//     [-3, 2, 1, -5, 6],
//   ])
// );
// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]

/* (18) Bubblesort Once
Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore 
often taught in introductory computer science courses as an example how not to sort a list.
Nevertheless, it is correct in the sense that it eventually produces a sorted version of 
the original list when executed to completion.

At the heart of Bubblesort is what is known as a pass. Let's look at an example at how a pass works.

Consider the following list:

9, 7, 5, 3, 1, 2, 4, 6, 8
We initiate a pass by comparing the first two elements of the list.
 Is the first element greater than the second? If so, we swap the two elements. 
 Since 9 is greater than 7 in this case, we swap them to give 7, 9. The list then becomes:

7, 9, 5, 3, 1, 2, 4, 6, 8
We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to 
the last two elements. When the pass is complete, our list becomes:

7, 5, 3, 1, 2, 4, 6, 8, 9
Notice that the largest value 9 "bubbled up" to the end of the list. This is precisely 
how Bubblesort got its name.

Task
Given an array of integers, your function should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, 
i.e. it should not mutate the input array.

*/
function bubblesortOnce(a) {
  let arr = [...a]; // to avoid mutating the input array

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;

  // [OR]
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] > arr[i + 1]) {
  //     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  //   }
  // }
  // return arr;
}
// console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])); // [7, 5, 3, 1, 2, 4, 6, 8, 9]

/* (19) Most digits
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/
function findLongest(array) {
  return array.reduce((acc, cur) =>
    cur.toString().length > acc.toString().length ? cur : acc,
  );
}
// console.log(findLongest([1, 10, 100])); // 100
// console.log(findLongest([9000, 8, 800])); // 9000
// console.log(findLongest([8, 900, 500])); // 900

/* (20) Fruit string calculator
You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
*/
function calculate(string) {
  const [num1, operator, num2] = string
    .match(/(\d+)\s.*\s(gains|loses)\s(\d+)/)
    .slice(1);
  return operator === "gains"
    ? parseInt(num1) + parseInt(num2)
    : parseInt(num1) - parseInt(num2);
}
// console.log(calculate("Panda has 48 apples and loses 4")); // 44
// console.log(calculate("Jerry has 34 apples and gains 6")); // 40

/* (21) Only One 
Task: Write a function which returns True if ONLY ONE of the boolean flag is True, 
otherwise return False. If there are no boolean flag, return False

Input	Expected Output
[]	False
[True, False, False]	True
[True, False, False, True]	False
[False, False, False, False]	False

*/
function onlyOne(...flags) {
  return flags.filter((flag) => flag).length === 1;
  // [OR]
  // return flags.filter(Boolean).length === 1;
}
// console.log(onlyOne()); // False
// console.log(onlyOne(true, false, false)); // True
// console.log(onlyOne(true, false, false, true)); // False
// console.log(onlyOne(true, false)); //true

/* (22) Sum of array singles
In this Kata, you will be given an array of numbers in which two numbers occur once 
and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15. Every other number occurs twice.

More examples in the test cases.
*/
function repeats(arr) {
  return arr
    .filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((acc, cur) => acc + cur, 0);
}
// console.log(repeats([4, 5, 7, 5, 4, 8])); // 15
// console.log(repeats([9, 10, 19, 13, 19, 13])); // 19
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12

/* (23) All unique
Write a program to determine if a string contains only unique characters. 
Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, 
e.g. 'a' and 'A' are considered different characters.

*/
function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}
// console.log(hasUniqueChars("  nAa")); // false
// console.log(hasUniqueChars("abcdef")); // true
// console.log(hasUniqueChars("aA")); // true

/* (24) Capitals First
Create a function that takes an input String and returns a String, where all the uppercase words 
of the input String are in front and all the lowercase words at the end. 
The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

*/
function capitalsFirst(str) {
  const words = str.split(" ");
  const upper = words.filter((word) => /^[A-Z]/.test(word));
  const lower = words.filter((word) => /^[a-z]/.test(word));
  return [...upper, ...lower].join(" ");
  // [OR]
  // return str
  //   .split(" ")
  //   .sort((a, b) => {
  //     if (/^[A-Z]/.test(a) && /^[a-z]/.test(b)) {
  //       return -1;
  //     } else if (/^[a-z]/.test(a) && /^[A-Z]/.test(b)) {
  //       return 1;
  //     }
  //     return 0;
  //   })
  //   .join(" ");
}
// console.log(capitalsFirst("hey You, Sort me Already!")); // "You, Sort Already! hey me"

/* (25) String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends 
with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false

*/
function solution(str, ending) {
  return str.endsWith(ending);
}
// console.log(solution("abcde", "cde")); // true
// console.log(solution("empty ending", "")); // true
// console.log(solution("", "empty string")); // false

/* (26) Find an employees role in the company
You get a new job working for Eggman Movers. Your first task is to write a method that will 
allow the admin staff to enter a person’s name and return what that person's role is in the company.

You will be given an array of object literals holding the current employees of the company. 
You code must find the employee with the matching firstName and lastName and then return the role 
for that employee or if no employee is not found it should return "Does not work here!"

The array is preloaded and can be referenced using the variable employees ($employees in Ruby). 
It uses the following structure.

let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]
There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name
i.e. Jane Doe or just a name.

*/
function findEmployeesRole(name) {
  // employees array preloaded
  let employees = [
    { firstName: "Dipper", lastName: "Pines", role: "Boss" },
    { firstName: "Morty", lastName: "Smith", role: "Truck Driver" },
  ];
  return (
    employees.find(
      (employee) => `${employee.firstName} ${employee.lastName}` === name,
    )?.role || "Does not work here!"
  );
}
// console.log(findEmployeesRole("Dipper Pines")); // Does not work here!
// console.log(findEmployeesRole("Morty Smith")); // Truck Driver"

/* (27) Sort Numbers
Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/
function solution(nums) {
  return nums?.sort((a, b) => a - b) || [];
}
// console.log(solution([1, 2, 3, 10, 5])); // [1,2,3,5,10]
// console.log(solution(null)); // []
// console.log(solution([])); // []

/* (28) Sum Array with different bases
You get an array of different numbers to sum up. But there is one problem, those numbers all have 
different bases. For example:

You get an array of numbers with their base as an input:

[["101",16],["7640",8],["1",9]]
The output should be the sum as an integer value with a base of 10, so according to the example 
this would be:

4258

A few more examples:
[["101",2], ["10",8]] --> 13
[["ABC",16], ["11",2]] --> 2751
Bases can be between 2 and 36 (2<=base<=36)

*/
function sumItUp(numbersWithBases) {
  return numbersWithBases.reduce(
    (acc, cur) => acc + parseInt(cur[0], cur[1]),
    0,
  );
}
// console.log(
//   sumItUp([
//     ["101", 2],
//     ["10", 8],
//   ]),
// ); // 13
// console.log(
//   sumItUp([
//     ["ABC", 16],
//     ["11", 2],
//   ]),
// ); // 2751

/* (29) Binary to string
Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, 
and it has something important to tell you. Write a function which will receive a long string 
of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.

As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

Input may consist of upper and lower case letters and numbers, in binary form of course,
as well as special symbols. The input to your function will always be one string of binary.

*/
function binaryToString(binary) {
  return binary
    .split("0b")
    .slice(1) // skip the empty string from the start
    .map((i) => String.fromCharCode(parseInt(i, 2)))
    .join("");
  // parseInt in base 2 converts binary to decimal
  // String.fromCharCode converts decimal to character
}

// console.log(binaryToString("0b10000110b11000010b1110100")); // 'Cat'
// console.log(
//   binaryToString(
//     "0b10010000b11001010b11011000b11011000b11011110b1000000b10101110b11011110b11100100b11011000b11001000b100001",
//   ),
// ); // 'Hello World'

/* (30) How many consecutive numbers are needed?
Write a function that takes an array of unique integers and returns the minimum number 
of integers needed to make the values of the array consecutive from the lowest number to the highest number.

Example
[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0

*/
function consecutive(array) {
  return array.length > 1
    ? Math.max(...array) - Math.min(...array) + 1 - array.length
    : 0;
}
// console.log(consecutive([4, 8, 6])); // 2
// console.log(consecutive([-1, -5])); // 3
// console.log(consecutive([1])); // 0
// console.log(consecutive([])); // 0

/* (31) Anagram Detection
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; 
return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/
const isAnagram = function (test, original) {
  const testSorted = (str) => str.toLowerCase().split("").sort().join("");
  return testSorted(test) === testSorted(original);
};
// console.log(isAnagram("foefet", "toffee")); // true
// console.log(isAnagram("Buckethead", "DeathCubeK")); // true
// console.log(isAnagram("ound", "round")); // false
// console.log(isAnagram("dumble", "bumble")); // false

/* (32) Average Array
ASC Week 1 Challenge 5 (Medium #2)
Create a function that takes a 2D array as an input, and outputs another array that 
contains the average values for the numbers in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.

Examples
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]
And another one:

[ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  
 ==>  [22.5, 11, 38.75, 38.25, 19.5]

1st array: [  2,   3,    9,   10,    7]
2nd array: [ 12,   6,   89,   45,    3]
3rd array: [  9,  12,   56,   10,   34]
4th array: [ 67,  23,    1,   88,   34]
              |    |     |     |     |
              v    v     v     v     v
average:   [22.5, 11, 38.75, 38.25, 19.5]

*/
function avgArray(arr) {
  return Array.from(
    { length: arr[0].length },
    (_, i) => arr.reduce((sum, row) => sum + row[i], 0) / arr.length,
  );
  // [OR]
  // return arr[0].map(
  //   (_, i) => arr.reduce((sum, row) => sum + row[i], 0) / arr.length,
  // );
  // [OR]
  // let result = [];
  // for (let i = 0; i < arr[0].length; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < arr.length; j++) {
  //     sum += arr[j][i];
  //   }
  //   result.push(sum / arr.length);
  // }
  // return result;
}
// console.log(
//   avgArray([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//   ]),
// ); // [3, 4, 5, 6]
// console.log(
//   avgArray([
//     [2, 3, 9, 10, 7],
//     [12, 6, 89, 45, 3],
//     [9, 12, 56, 10, 34],
//     [67, 23, 1, 88, 34],
//   ]),
// ); //[22.5, 11, 38.75, 38.25, 19.5]

/* (33) Simple template
Implement function createTemplate which takes string with tags wrapped in {{brackets}} as input 
and returns closure, which can fill string with data (flat object, where keys are tag names).

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs
When key doesn't exist in the map, put there empty string.

*/
function createTemplate(template) {
  return function (data) {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || "");
  };
}

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
// console.log(personTmpl({ name: "John", animalType: "dogs" }));
// Output: John likes dogs

// console.log(personTmpl({ name: "Alice" }));
// Output: Alice likes

/* (34) Stanton measure
The Stanton measure of an array is defined as follows:
Let n be the number of times the value 1 appears in the array.
The Stanton measure is then the number of times n appears in the array.

Task
Write a function that takes an integer array and returns its Stanton measure.

Examples
For [1, 4, 3, 2, 1, 2, 3, 2]:
1 appears 2 times → 2 appears 3 times → Stanton measure = 3.

For [1, 4, 1, 2, 11, 2, 3, 1]:
1 appears 3 times → 3 appears 1 time → Stanton measure = 1.

*/
function stantonMeasure(a) {
  return a.filter((num) => num === a.filter((num) => num === 1).length).length;
  // [OR]
  // const count = (n) => a.filter((num) => num === n).length;
  // return count(count(1));
}
// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); //3

/* (35) Filter Coffee
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. 
The prices in this string are to be sorted in ascending order.

*/
function search(budget, prices) {
  return prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .toString();
}
// console.log(search(3, [6, 1, 2, 9, 2])); // "1, 2, 2"
// console.log(search(14, [7, 3, 23, 9, 14, 20, 7])); // "3,7,7, 9, 14"
// console.log(search(0, [6, 1, 2, 9, 2])); // ""

/* (36) Alphabetically ordered
Your task is very simple. Just write a function that takes an input string of lowercase letters
and returns true/false depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)

*/
function alphabetic(s) {
  return [...s].sort((a, b) => a.localeCompare(b)).join("") === s;
}
// console.log(alphabetic("asd")); //false
// console.log(alphabetic("door")); //true

/* (37) We Have Liftoff
You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly 
for the person reading the countdown of a spaceship launch.

Unfortunately, the person reading the countdown only knows how to read strings. 
After the array is sorted correctly make sure it's in a format he can understand.

Between each number should be a space and after the final number (n) should be the word 'liftoff!'

Example:

// Given
instructions = [8,1,10,2,7,9,6,3,4,5]
// Should return
"10 9 8 7 6 5 4 3 2 1 liftoff!"
// Given
instructions = [1,2,4,3,5]
// Should return
"5 4 3 2 1 liftoff!"

*/
function liftoff(instructions) {
  return instructions.sort((a, b) => b - a).join(" ") + " liftoff!";
}
// console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5])); // "10 9 8 7 6 5 4 3 2 1 liftoff!"

/* (38) Name Array Capping
Create a function that accepts an array of names, and returns an array of each name with
its first letter capitalized and the remainder in lowercase.

Examples
["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
*/
function capMe(names) {
  return names.map(
    (name) => name[0].toUpperCase() + name.toLowerCase().slice(1),
  );
}
// console.log(capMe(["RALPH", "GEORGIA", "CHRISTINA"])); // ["Ralph", "Georgia", "Christina"]

/* (39) Initialize my name
Some people just have a first name; some people have first and last names and some people have first, 
middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/
function initializeNames(name) {
  return name
    .split(" ")
    .map((match, index, arr) =>
      index === 0 || index === arr.length - 1 ? match : `${match[0]}.`,
    )
    .join(" ");
}
// console.log(initializeNames("Alice Betty Catherine Davis")); // "Alice B. C. Davis"
// console.log(initializeNames("Dimitri")); // "Dimitri"
// console.log(initializeNames("Lois Mary Lane")); // "Lois M. Lane"
// console.log(initializeNames("Jack Ryan")); // "Jack Ryan"

/* (40) Argue the toss
Your task is to write a function that doesn't have a fixed number of parameters. 
The function should count the arguments passed to it and return a string that specifies 
how many arguments were passed in, and states what they were.

If the function call is

anArgument("pigs", "giraffes", "unicorns");
The returned string should say

'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".'
If there is only one argument passed in, the string should say

'You gave me 1 argument and it is "pigs".'
If there are two arguments, the string should say

'You gave me 2 arguments and they are "pigs" and "giraffes".'
If there are no arguments, the string should say

'You didn't give me any arguments.'
Punctuation and grammar notes
There are commas after each argument except the last and second-last, which are separated with 'and'
Arguments are presented in quotation marks
The singular: '1 argument' as opposed to multiples: '3 arguments'
Verb agreement: 'and it is' as opposed to 'and they are'

*/
function anArgument(...arg) {
  if (arg.length === 0) return "You didn't give me any arguments.";
  return arg.length >= 2
    ? `You gave me ${arg.length} arguments and they are ${
        arg.length > 2
          ? arg
              .slice(0, -1)
              .map((a) => `"${a}"`)
              .join(", ") +
            " and " +
            `"${arg[arg.length - 1]}"`
          : `"${arg[0]}" and "${arg[1]}"`
      }.`
    : `You gave me 1 argument and it is "${arg[0]}".`;
}
// console.log(anArgument("chairs", "table", "lamp", "sideboard")); // "You gave me 4 arguments and they are "chairs", "table", "lamp" and "sideboard"."
// console.log(anArgument("pigs", "giraffes", "unicorns")); // "You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns"."
// console.log(anArgument("pigs", "giraffes")); // "You gave me 2 arguments and they are "pigs" and "giraffes"."
// console.log(anArgument("pigs")); // "You gave me 1 argument and it is "pigs"."
// console.log(anArgument()); // "You didn't give me any arguments."

/* (41) Is valid identifier?
Given a string, determine if it's a valid identifier.

Here is the syntax for valid identifiers:
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character
cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, 
or dollar sign. In other words, it can be any valid identifier character.

Examples of valid identifiers:
i
wo_rd
b2h
Examples of invalid identifiers:
1i
wo rd
!b2h

*/
function isValid(idn) {
  return /^[A-Za-z_$][A-Za-z0_9_$]*$/.test(idn);
  // [OR]
  // return /^[A-Za-z_$][\w$]*$/.test(idn); // \w = [A-Za-z0-9_]
}
// console.log(isValid("$dollar$igns")); // true
// console.log(isValid("kebab-case")); // false
// console.log(isValid("snake_case")); // true
// console.log(isValid("!Ok")); // false
// console.log(isValid("")); //false
// console.log(isValid("no no")); //false

/* (42) max diff - easy

You must implement a function that returns the difference between the largest and
the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

*/
function maxDiff(list) {
  return list.length >= 1 ? Math.max(...list) - Math.min(...list) : 0;
}
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
// console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); //11
// console.log(maxDiff([16])); // 0

/* (43) Hit Count
You are the developer working on a website which features a large counter on its homepage, 
proudly displaying the number of happy customers who have downloaded your company's software.

You have been tasked with adding an effect to this counter to make it more interesting.

Instead of just displaying the count value immediately when the page loads, 
we want to create the effect of each digit cycling through its preceding numbers
before stopping on the actual value.


Task
As a step towards achieving this; you have decided to create a function that will produce 
a multi-dimensional array out of the hit count value. 
Each inner dimension of the array represents an individual digit in the hit count, 
and will include all numbers that come before it, going back to 0.

Rules
The function will take one argument which will be a four-character string representing hit count
The function must return a multi-dimensional array containing four inner arrays of integers
The final value in each inner array must be the actual value to be displayed
Examples
"1250" --> [ [0,1], [0,1,2], [0,1,2,3,4,5], [0] ]
"0050" --> [ [0], [0], [0,1,2,3,4,5], [0] ]
"0000" --> [ [0], [0], [0], [0] ]


*/
function counterEffect(hitCount) {
  return [...hitCount].map((num) =>
    Array.from({ length: +num + 1 }, (_, i) => i),
  );
}
// console.log(counterEffect("1250")); // [ [0,1], [0,1,2], [0,1,2,3,4,5], [0] ]
// console.log(counterEffect("0050")); // [ [0], [0], [0,1,2,3,4,5], [0] ]
// console.log(counterEffect("0000")); // [ [0], [0], [0], [0] ]

/* (44) Sorted? yes? no? how?
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
The order does not have to be strict: a sorted array can contain consecutive duplicates, 
e.g. [1, 1, 2, 3] is sorted in ascending order.

It is guaranteed that there will always be a unique valid answer. More precisely:

there will be no arrays with less than 2 elements
there will be no arrays where all elements are equal

*/
function isSortedAndHow(array) {
  const accending = [...array].sort((a, b) => a - b);
  const descending = [...array].sort((a, b) => b - a);
  // [..array] => to make a copy so don't change the original
  return array.every((e, i) => e === accending[i])
    ? "yes, ascending"
    : array.every((e, i) => e === descending[i])
      ? "yes, descending"
      : "no";
}
// console.log(isSortedAndHow([1, 3, 9, 4])); // no
// console.log(isSortedAndHow([1, 2, 3, 4, 5])); // yes, ascending
// console.log(isSortedAndHow([4, 3, 2, 1])); // yes, descending
// console.log(isSortedAndHow([1, 1, 2, 3])); // yes, ascending

/* (45) shorter concat [reverse longer]
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. 
Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

*/
function shorterReverseLonger(a, b) {
  return Math.max(a.length, b.length) === a.length
    ? b + [...a].reverse().join("") + b
    : a + [...b].reverse().join("") + a;
  // [OR]
  // return a.length >= b.length
  //   ? b + [...a].reverse().join("") + b
  //   : a + [...b].reverse().join("") + a;
}
console.log(shorterReverseLonger("first", "abcde")); // "abcdetsrifabcde"
console.log(shorterReverseLonger("fghi", "abcde")); // "fghiedcbafghi"
