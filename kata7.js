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

console.log(binaryToString("0b10000110b11000010b1110100")); // 'Cat'
console.log(
  binaryToString(
    "0b10010000b11001010b11011000b11011000b11011110b1000000b10101110b11011110b11100100b11011000b11001000b100001",
  ),
); // 'Hello World'
