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
// console.log(shorterReverseLonger("first", "abcde")); // "abcdetsrifabcde"
// console.log(shorterReverseLonger("fghi", "abcde")); // "fghiedcbafghi"

/* (46) Reverse words
Complete the function that accepts a string parameter, 
and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/
function reverseWords(str) {
  return str
    .split(" ")
    .map((w) => [...w].reverse().join(""))
    .join(" ");
  // [OR]
  // return str.replace(/\S+/g, (w) => [...w].reverse().join(""));
}
// console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // "ehT kciuq nworb xof spmuj revo eht yzal .god"

/* (47) Jenny the youngest detective
Jenny is 9 years old. She is the youngest detective in North America. 
Jenny is a 3rd grader student, so when a new mission comes up, 
she gets a code to decipher in a form of a sticker (with numbers) in her math notebook 
and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, 
from there she already knows what to do. And here comes your role 
- you can help Jenny find out what the word is!

In order to find out what the word is, you should use the sticker (array of 3 numbers)
to retrive 3 letters from the comment (string) that create the word.

Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
Spaces are not places, you need the actual letters. No spaces.
The returned word should be all lowercase letters.
if you can't find one of the letters using the index numbers, return "No mission today".
Jenny would be very sad, but that's life... :(
Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

*/
function missingWord(nums, str) {
  const letters = str.replace(/\s+/g, "").toLowerCase();
  const word = nums.sort((a, b) => a - b).map((num) => letters[num]);

  return word.includes(undefined) ? "No mission today" : word.join("");
}
// console.log(missingWord([0, 3, 5], "I love you")); // "ivy"
// console.log(missingWord([7, 10, 1], "see you later")); // 'ear'
// console.log(missingWord([50, 4, 6], "Hi everybody")); // No mission today
// console.log(missingWord([2, 2, 2], "  aRB")); // "bbb"

/* (48) Flatten
Write a function that flattens an Array of Array objects into a flat Array. 
Your function must only do one level of flattening.

flatten([1,2,3])  ==> [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]])  ==> [[1,2,3]]

*/
function flatten(array) {
  return array.flat();
}
// console.log(flatten([1, 2, 3])); // [1,2,3]
// console.log(
//   flatten([
//     [1, 2, 3],
//     ["a", "b", "c"],
//     [1, 2, 3],
//   ]),
// ); // [1,2,3,"a","b","c",1,2,3]
// console.log(flatten([[[1, 2, 3]]])); // [[1,2,3]]

/* (49) Swap two elements
Return an array that contains exactly the same elements as the input array, 
but with elements a and b swapped.

If the array has multiple copies of a, swap only the first one that appears in the array.
If the array has multiple copies of b, swap only the last one that appears in the array.
For example:

([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]

*/
function swapTwo(array, a, b) {
  const firstIndex = array.indexOf(a);
  const lastIndex = array.lastIndexOf(b);
  array[firstIndex] = b;
  array[lastIndex] = a;
  return array;
  // [OR]
  // return array.map((e, i) =>
  //   array.indexOf(a) === i ? b : array.lastIndexOf(b) === i ? a : e,
  // );
}
// console.log(swapTwo([1, 2, 3, 4], 2, 4)); // [1, 4, 3, 2]
// console.log(swapTwo([1, 2, 3, 4, 1, 2, 3, 4], 2, 4)); // [1, 4, 3, 4, 1, 2, 3, 2]

/* (50) Recycle
You are having a BBQ, and after the BBQ you are left with some rubbish to recycle.

There are 3 recycling boxes: Red: Plastic, Green: Glass, Blue: Card.

You want to sort the rubbish according to the material and return the number of items 
in each box as an array (or a tuple in Python):

[plastic, glass, card]
The material type can be determined based on the sign of the item's value:

Plastic: value > 0
Glass: value < 0
Card: value = 0
Example
rubbish = [5, -9, 0, 6, -84, -95, 15]
// Plastic = 3, Glass = 3, Card = 1
// Output: [3, 3, 1]

*/
function recycleMe(recycle) {
  return recycle.reduce(
    (acc, cur) => {
      cur > 0 ? ++acc[0] : cur < 0 ? ++acc[1] : ++acc[2];
      return acc;
    },
    [0, 0, 0],
  );
}
// console.log(recycleMe([5, -9, 0, 6, -84, -95, 15])); // [3, 3, 1]
// console.log(recycleMe([45, -26, -4, -66, -84, -38, 14])); // [2, 5, 0]

/* (51) String matchup
Given two arrays of strings, return the number of times each string of the second array appears
in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]

*/
function solve(a, b) {
  return b.map((e) => a.filter((f) => f === e).length);
}
// console.log(solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"])); // [2, 1, 0]
// console.log(solve(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"])); // [2, 1, 2]

/* (52) Simple string reversal II
In this Kata, you will be given a string and two indexes (a and b). 
Your task is to reverse the portion of that string between those two indices inclusive.

str = "codewars", a = 1, b = 5 --> "cawedors"
str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"
Input will be lowercase and uppercase letters only.

The first index a will always be smaller than the string length; 
the second index b can be greater than the string length. More examples in the test cases. Good luck!

*/
function solve(st, a, b) {
  return (
    st.slice(0, a) +
    [...st.slice(a, b + 1)].reverse().join("") +
    st.slice(b + 1)
  );
}
// console.log(solve("codewars", 1, 5)); // "cawedors"
// console.log(solve("cODEWArs", 1, 5)); // "cAWEDOrs"
// console.log(solve("FunctionalProgramming", 2, 15)); // "FuargorPlanoitcnmming"
// console.log(solve("codingIsFun", 2, 100)); // "conuFsIgnid"

/* (53) Alphabet war
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters
 was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight.
When the left side wins return Left side wins!, when the right side wins return Right side wins!, 
in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims. Sum up each side's letters' power values 
to determine which side wins.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/
function alphabetWar(fight) {
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  const score = [...fight].reduce(
    (acc, cur) => acc + (left[cur] || 0) - (right[cur] || 0),
    0,
  );
  return score > 0
    ? "Left side wins!"
    : score < 0
      ? "Right side wins!"
      : "Let's fight again!";
}
// console.log(alphabetWar("z")); // => Right side wins!
// console.log(alphabetWar("zdqmwpbs")); // => Let's fight again!
// console.log(alphabetWar("zzzzs")); // => Right side wins!
// console.log(alphabetWar("wwwwwwz")); // => Left side wins!

/* (54) The reject() function
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

*/
function reject(array, predicate) {
  return array.filter((x) => !predicate(x));
}
// console.log(reject(["a", "b", 3, "d"], (x) => typeof x === "string")); // [3]
// console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)); // [1, 3, 5]
// console.log(reject(["a", "b", 3, "d"], (x) => typeof x === "number")); // ['a', 'b', 'd']

/* (55) String doubles
In this Kata, you will write a function doubles that will remove double string characters 
that are adjacent to each other.

For example:

doubles('abbcccdddda') = 'aca', because, from left to right:

a) There is only one 'a' on the left hand side, so it stays.
b) The 2 b's disappear because we are removing double characters that are adjacent. 
c) Of the 3 c's, we remove two. We are only removing doubles. 
d) The 4 d's all disappear, because we first remove the first double, and again we remove the second double.
e) There is only one 'a' at the end, so it stays.
Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". In the second example,
when we remove the b's in 'abba', the double a that results is then removed.

The strings will contain lowercase letters only. More examples in the test cases.

*/
function doubles(s) {
  const stack = [];
  for (const char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}
// console.log(doubles("abbbzz")); // 'ab'
// console.log(doubles("zzzzykkkd")); // 'ykd'
// console.log(doubles("xxbnnnnnyaaaaam")); // 'bnyam'
// console.log(doubles("rrrmooomqqqqj")); // 'rmomj

/* (56) Help the Fruit Guy
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten.
He wants to replace all the rotten pieces of fruit with fresh ones. 
For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"].
Your task is to implement a method that accepts an array of strings containing fruits should returns an array
of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.

*/
function removeRotten(bagOfFruits) {
  return (
    bagOfFruits?.map((fruit) => fruit.replace("rotten", "").toLowerCase()) || []
  );
}
// console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"])); // ["apple","banana","kiwi","melon","orange"]
// console.log(removeRotten(["apple", "rottenBanana", "apple"])); // ["apple","banana","apple"]
// console.log(removeRotten([])); // []
// console.log(removeRotten(null)); // []

/* (57) Airport itinerary

Travel itinerary
When you travel around the world you pass though different airports.

TRN -> FCO -> JFK
And then return back to home

JFK - TRN
In order to propose the unique list of airports that your trip uses we have to create an itinerary
feature that can compress the list of airports including only the list of unique in/out combination.

For example, a trip with:

[TRN-FCO] [FCO-JFK] [JFK-TRN]
Should be represented as:

TRN-FCO-JFK-TRN
That is the unique list of airport steps.

Now in our database we save the travel as a list of objects with in/out properties and you will
receive that list always sorted in the right way.

[
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]
Now we have to create a helper function itinerary for JS that extract the unique airport list:

travel = itinerary([
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]); // TRN-FCO-JFK-FCO
*/
function itinerary(travel) {
  return travel
    .map((v) => [v.in, v.out])
    .flat()
    .filter((v, i, a) => v !== a[i - 1])
    .join("-");
}

// console.log(
//   itinerary([
//     { in: "TRN", out: "FCO" },
//     { in: "CIA", out: "JFK" },
//   ]),
// ); //"TRN-FCO-CIA-JFK"
// console.log(
//   itinerary([
//     { in: "TRN", out: "FCO" },
//     { in: "FCO", out: "JFK" },
//   ]),
// ); // "TRN-FCO-JFK"
// console.log(
//   itinerary([
//     { in: "TRN", out: "FCO" },
//     { in: "CIA", out: "TRN" },
//   ]),
// ); // "TRN-FCO-CIA-TRN"

/* (58) Likes Vs Dislikes
Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content.
It was set up in such a way that you cannot like and dislike a video at the same time.
There are two other interesting rules to be noted about the interface: Pressing a button,
which is already active, will undo your press. If you press the like button after pressing the dislike button,
the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.

*/
function likeOrDislike(buttons) {
  return buttons.reduce(
    (acc, cur) => (cur === acc ? "Nothing" : cur),
    "Nothing",
  );
}
// console.log(likeOrDislike(["Dislike"])); // Dislike
// console.log(likeOrDislike(["Like", "Like"])); // Nothing
// console.log(likeOrDislike(["Dislike", "Like"])); // Like
// console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // Nothing

/* (59) Last
Find the last element of the given argument(s). If a single argument is passed and is a list/array 
or a string, return its last element. It is guaranteed that there will be at least one argument 
and that single-argument arrays/lists/strings will not be empty.

Examples
last(5)               ==> 5
last([1, 2, 3, 4])    ==>  4
last("xyz")           ==> "z"
last(1, 2, 3, 4)      ==>  4
last([1, 2], [3, 4])  ==>  [3, 4]
last([[1, 2], [3, 4]])  ==>  [3, 4]

*/
function last(...args) {
  if (args.length === 1) {
    const x = args[0];
    return typeof x === "string"
      ? x.slice(-1)
      : Array.isArray(x)
        ? x[x.length - 1]
        : x;
  }
  return args[args.length - 1];
}
// console.log(last(5)); // 5
// console.log(last("123")); // "3"
// console.log(last([1, 2, 3])); // 3
// console.log(last([1, 2, 3, [4, 5]])); // [4, 5]

// console.log(last(1, 2, 3, 4)); // 4
// console.log(last("a", "b", "c")); // "c"
// console.log(last([1], [2], [3])); // [3]

/* (60) Odd or Even?
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/
function oddOrEven(array) {
  return array.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd";
}
// console.log(oddOrEven([0])); // "even"
// console.log(oddOrEven([0, 1, 4])); // "odd"
// console.log(oddOrEven([0, -1, -5])); // "even"
// console.log(oddOrEven([])); // "even"

/* (61) Pull your words together, man!
Description:
Your friend Robbie has successfully created an AI that is capable of communicating in English!

Robbie's almost done with the project, however the machine's output isn't working as expected.
Here's a sample of a sentence that it outputs:

["this","is","a","sentence"]
Every time that it tries to say a sentence, instead of formatting it in normal English orthography,
it just outputs a list of words.

Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep.
So, he wants you to write the last part of his code, a sentencify function, 
which takes the output that the machine gives, and formats it into proper English orthography.

Your function should:

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.
Here are a few examples of what your function should do:

Input	Output
["i", "am", "an", "AI"]	"I am an AI."
["FIELDS","of","CORN","are","to","be","sown"]	"FIELDS of CORN are to be sown."
["i'm","afraid","I","can't","let","you","do","that"]	"I'm afraid I can't let you do that."

*/
function sentencify(words) {
  return (
    words
      .map((w, i) => (i === 0 ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ") + "."
  );
  // [OR]
  // return words.join(" ").replace(/^[a-z]/, (w) => w.toUpperCase()) + ".";
}
// console.log(sentencify(["i", "am", "an", "AI"])); // "I am an AI."
// console.log(sentencify(["yes"])); // "Yes."
// console.log(
//   sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]),
// ); // "I'm afraid I can't let you do that."

/* (62) Is it a vowel on this position?
Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument).
Don't forget about uppercase.

A few cases:
{
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
}
P.S. If n < 0, return false

*/
function checkVowel(string, position) {
  return string.charAt(position).match(/[aeiou]/gi) ? true : false;
  // [OR]
  // return /[aeiou]/i.test(string[position] || "");
}
// console.log(checkVowel("cat", 1)); // true
// console.log(checkVowel("cat", 0)); // false
// console.log(checkVowel("Amanda", -2)); // false

/* (63) Multiply Word in String
You are to write a function that takes a string as its first parameter.
This string will be a string of words.

You are expected to then use the second parameter, which will be an integer,
to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, 
which will also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string", 3, 5) 

*/
function modifyMultiply(str, loc, num) {
  return str.split(" ")[loc].concat("-").repeat(num).slice(0, -1);
  // [OR]
  // return Array(num).fill(str.split(" ")[loc]).join("-");
}
// console.log(modifyMultiply("This is a string", 3, 5)); // "string-string-string-string-string"

/* (64) Ones and Zeros
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

*/
const binaryArrayToNumber = (arr) => {
  return parseInt(+arr.join(""), 2);
};
// console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
// console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
// console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15

/* (65) Greet Me
Write a method that takes one argument as name and then greets that name, 
capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/
const greet = function (name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};
// console.log(greet("riley")); // "Hello Riley!"
// console.log(greet("JACK")); // "Hello Jack!"

/* (66) Odder Than the Rest
Create a method that takes an array/list as an input, and outputs the index at which the sole 
odd number is located.

This method should work with arrays with negative numbers. If there are no odd numbers in the array,
then the method should output -1.

Examples:

oddOne([2,4,6,7,10]) // => 3
oddOne([2,16,98,10,13,78]) // => 4
oddOne([4,-8,98,-12,-7,90,100]) // => 4
oddOne([2,4,6,8]) // => -1

*/
function oddOne(arr) {
  return arr.findIndex((num) => num % 2 !== 0);
}
// console.log(oddOne([2, 4, 6, 7, 10])); //3
// console.log(oddOne([2, 16, 98, 10, 13, 78])); //4
// console.log(oddOne([2, 4, 6, 8])); //-1

/* (67) Previous multiple of three
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number
that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null,
a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9

*/
const prevMultOfThree = (n) => {
  return (
    (n % 3 === 0 ? n : prevMultOfThree(Number(n.toString().slice(0, -1)))) ||
    null
  );
};
// console.log(prevMultOfThree(1244)); // 12
// console.log(prevMultOfThree(952406)); //9
// console.log(prevMultOfThree(1)); //null

/* (68) Fix string case
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters
and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

*/
function solve(s) {
  return [...s].filter((c) => c.toUpperCase() === c).length > s.length / 2
    ? s.toUpperCase()
    : s.toLowerCase();
}
// console.log(solve("CODe")); // "CODE"
// console.log(solve("COde")); // "code"
// console.log(solve("Code")); // "code"

/* (69) Find the vowels
We want to know the index of the vowels in a given word, for example, there are two vowels 
in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/
function vowelIndices(word) {
  return Array(word.length)
    .fill(0)
    .map((_, i) => ("aeiouy".includes(word[i].toLowerCase()) ? i + 1 : 0))
    .filter((i) => i !== 0);
  // [OR]
  // let result = [];
  // for (let i = 0; i < word.length; i++) {
  //   if ("aeiouy".includes(word[i].toLowerCase())) {
  //     result.push(i + 1);
  //   }
  // }
  // return result;
}
// console.log(vowelIndices("apple")); // [1, 5]
// console.log(vowelIndices("Super")); // [2, 4]
// console.log(vowelIndices("Mmmm")); // []
// console.log(vowelIndices("YoMama")); // [1, 2, 4, 6]
// console.log(vowelIndices("supercalifragilisticexpialidocious")); //  [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]

/* (70) Identify Case
We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case
to snake-case, or from camel-case to kebab-case — the possibilities are endless.

But if we don’t know the case our inputs are in, these are not very helpful.

Task:
So the task here is to implement a function that takes a string and returns a string with
 the case the input is in. The possible case types are "kebab", "camel", and "snake". If none of the cases match with the input, or if there are no separators / case changes in the input, return "none". Inputs will only have letters (no numbers or special characters).

Some definitions
Kebab case: lowercase-words-separated-by-hyphens

Camel case: lowercaseFirstWordFollowedByCapitalizedWords

Snake case: lowercase_words_separated_by_underscores

Examples:
"hello-world" => "kebab"
"hello-to-the-world" => "kebab"
"helloWorld" => "camel"
"helloToTheWorld" => "camel"
"hello_world" => "snake"
"hello_to_the_world" => "snake"
"hello__world" => "none"
"hello_World" => "none"
"helloworld" => "none"
"hello-World" => "none"

*/
function id(c_str) {
  return /^[a-z]+(-[a-z]+)*$/.test(c_str)
    ? "kebab"
    : /^[a-z]+(_[a-z]+)*$/.test(c_str)
      ? "snake"
      : /^[a-z]+([A-Z][a-z]*)*$/.test(c_str)
        ? "camel"
        : "none";
}
// console.log(id("hello-world")); // "kebab"
// console.log(id("hello_to_the_world")); // "snake"
// console.log(id("helloToTheWorld")); // "camel"
// console.log(id("hello-World")); //none
// console.log(id("hello-to-the-world")); //kebab

/* (71) Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given an array
of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/
function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, cur) => acc + cur, 0);
  // [OR]
  // const [a, b] = numbers.sort((a, b) => a - b);
  // return a + b;
}
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455

/* (72) Array Array Array
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number,
the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x)
and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3]  you should return [['a', 3], ['a', 3], ['a', 3]].


*/
function explode(x) {
  const newArr = (s) => new Array(s).fill(x);
  const type = (e) => typeof e === "number";

  return type(x[0]) && type(x[1])
    ? newArr(x[0] + x[1])
    : type(x[0])
      ? newArr(x[0])
      : type(x[1])
        ? newArr(x[1])
        : "Void!";
}
// console.log(explode([9, 3])); // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
// console.log(explode(["a", 3])); // [['a', 3], ['a', 3] ['a', 3]]
// console.log(explode([6, "c"])); // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
// console.log(explode(["a", "b"])); // 'Void!'
// console.log(explode(["a", 0])); // []

/* (73) Find the capitals
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters
(word) as its argument, and returns an ordered list containing the indices of all capital (uppercase)
letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
var capitals = function (word) {
  return [...word]
    .map((c, i) => (c === c.toUpperCase() ? i : -1))
    .filter((i) => i !== -1);
};

// console.log(capitals("CodEWaRs")); // [0,3,4,6]
// console.log(capitals("aAbB")); // [1,3]
// console.log(capitals("AAA")); // [0,1,2]
// console.log(capitals("")); // []

/* (74) Friday the 13th Part 1
It's Friday the 13th, and Jason is ready for his first killing spree!

Create a function, killcount, that accepts two arguments: an array of array pairs
(the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

Ruby, Python, Crystal:

counselors = [["Chad", 2], ["Tommy", 9]]
jason = 7
JavaScript:

let counselors = [["Chad", 2], ["Tommy", 9]];
let jason = 7;
PHP:

$counselors = [["Chad", 2], ["Tommy", 9]];
$jason = 7;
Your function must return an array of the names of all the counselors who can be outsmarted
and killed by Jason.

Happy Friday the 13th!

*/
function killcount(counselors, jason) {
  // return [counselors.find((counselor, i) => jason > counselor[i])[0]] || [];
  return counselors
    .filter((counselor) => jason > counselor[1])
    .map((counselor) => counselor[0]);
}
let counselors = [
  ["Mike", 7],
  ["Alysa", 3],
];
// console.log(killcount(counselors, 7)); // ['Alysa']

/* (75) Keypad horror
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to
a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only

*/
function computerToPhone(numbers) {
  const nums = {
    7: "1",
    8: "2",
    9: "3",
    4: "4",
    5: "5",
    6: "6",
    1: "7",
    2: "8",
    3: "9",
    0: "0",
  };
  return [...numbers].map((digit) => nums[digit]).join("");
}
// console.log(computerToPhone("789")); // "123"
// console.log(computerToPhone("0789456123")); // "0123456789"

/* (76) Product of Largest Pair
Rick wants a faster way to get the product of the largest pair in an array. 
Your task is to create a performant solution to find the product of the largest two integers 
in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

*/
function maxProduct(a) {
  const max = Math.max(...a);
  const maxIndex = a.indexOf(max);
  a.splice(maxIndex, 1); // delete max from array
  return max * Math.max(...a);
}
// console.log(maxProduct([56, 335, 195, 443, 6, 494, 252])); // 218842
// console.log(maxProduct([2, 1, 5, 0, 4, 3])); // 20

/* (77) Filter unused digits
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.

*/
function unusedDigits(...digits) {
  return "0123456789"
    .split("")
    .filter((digit) => !digits.join("").includes(digit))
    .join("");
}
// console.log(unusedDigits(12, 34, 56, 78)); // "09"
// console.log(unusedDigits(2015, 8, 26)); // "3479"

/* (78) SillyCASE
Create a function that takes a string and returns that string with the first half lowercased
and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)  

*/
function sillycase(silly) {
  const length = Math.ceil(silly.length / 2);
  return (
    silly.slice(0, length).toLowerCase() + silly.slice(length).toUpperCase()
  );
  // [OR]
  // const length = silly.length;
  // return length % 2 === 0
  //   ? silly.slice(0, length / 2).toLowerCase() +
  //       silly.slice(length / 2).toUpperCase()
  //   : silly.slice(0, length / 2 + 1).toLowerCase() +
  //       silly.slice(length / 2 + 1).toUpperCase();
}
// console.log(sillycase("foobar")); // "fooBAR"
// console.log(sillycase("brian")); // "briAN"

/* (79) Remove consecutive duplicate words
Your task is to remove all consecutive duplicate words from a string, 
leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading 
or trailing spaces in the string. An empty string (0 words) is a valid input.

*/
function removeConsecutiveDuplicates(string) {
  return string
    .split(" ")
    .filter((word, index, arr) => word !== arr[index - 1])
    .join(" ");
}

// console.log(removeConsecutiveDuplicates("alpha alphaalpha alphaalphaalpha")); // "alpha alphaalpha alphaalphaalpha"
// console.log(
//   removeConsecutiveDuplicates(
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
//   ),
// ); // "alpha beta gamma delta alpha beta gamma delta"
// console.log(removeConsecutiveDuplicates(""));
// ("");
// console.log(removeConsecutiveDuplicates("alpha")); // "alpha"

/* (80) Unique Sum
Given a list of integers values, your job is to return the sum of the values; however, 
if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null

*/
function uniqueSum(lst) {
  let sum = 0;
  new Set(lst).forEach((value) => (sum += value));
  return lst.length === 0 ? null : sum;
  // [OR]
  // return [...new Set(lst)].reduce((acc, curr) => acc + curr, null);
}
// console.log(uniqueSum([1, 2, 3])); //6
// console.log(uniqueSum([1, 3, 8, 1, 8])); //12
// console.log(uniqueSum([])); // null
// console.log(uniqueSum([-1, -1, 5, 2, -7])); //-1

/* (81) List Filtering
In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/
function filter_list(l) {
  return l.filter((e) => typeof e === "number");
}
// console.log(filter_list([1, 2, "a", "b"])); // [1,2]
// console.log(filter_list([1, "a", "b", 0, 15])); // [1,0,15]
// console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // [1,2,123]

/* (82) Sum even numbers
Complete the function that takes a sequence of numbers as single parameter.
Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0

*/
function sumEvenNumbers(input) {
  return input.filter((n) => n % 2 === 0).reduce((acc, cur) => acc + cur, 0);
}
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //30

/* (83) Sum of odd numbers
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


*/
function rowSumOddNumbers(n) {
  return n ** 3;
  // [OR]
  // return Math.pow(n, 3);
}
// console.log(rowSumOddNumbers(42)); // 74088
// console.log(rowSumOddNumbers(1)); // 1

/* (84) Sort by Last Char
Given a string of words (x), you need to return an array of the words,
sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them 
in the order they appeared in the given string.

All inputs will be valid.

*/
function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  // return x.split(" ").sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}

// console.log(last("man i need a taxi up to ubud")); // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

/* (85) Return the first M multiples of N
Implement a function that takes two numbers m and n and returns an array of the first m multiples
of the real number n. Assume that m is a positive integer.

Ex.

(3, 5.0) --> [5.0, 10.0, 15.0]

*/
function multiples(m, n) {
  return Array(m)
    .fill(0)
    .map((_, i) => (i + 1) * n);
  // [OR]
  // let result = [];
  // for (let i = 1; i <= m; i++) {
  //   result.push(i * n);
  // }
  // return result;
}
// console.log(multiples(3, 5)); // [5, 10, 15]

/* (86) Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/
function disemvowel(str) {
  return str.replace(/[aieou]/gi, "");
}
// console.log(disemvowel("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!"

/* (87) Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits
or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
// console.log(validatePIN("1234")); // true
// console.log(validatePIN("12345")); // false
// console.log(validatePIN("1234567")); // false
// console.log(validatePIN("a234")); // false

/* (88) Playing with Sets : Union
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear,
.has . . . BUT some "Set operations" are missing, like . . .

Union

Two sets can be "added" together. The union of A and B, denoted by A ∪ B, is the set of all things
that are members of either A or B.

Examples:
  {1, 2} ∪ {1, 2} = {1, 2}.
  {1, 2} ∪ {2, 3} = {1, 2, 3}.
  {1, 2, 3} ∪ {3, 4, 5} = {1, 2, 3, 4, 5}
Task
Create function union getting 2 sets as arguments and returning a new Set as result of union
of these 2 sets.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

C = union(A,B) // -> {1,2,3}

*/
function union(s1, s2) {
  return new Set([...s1, ...s2]);
}
// const A = new Set([1, 2]),
// B = new Set([2, 3]),
// C = new Set([1, 2, 3]);
// const EMPTY = new Set();

// console.log(union(A, B)); // C = {1, 2, 3}
// console.log(union(A, EMPTY)); // A = {1, 2}
// console.log(union(EMPTY, EMPTY)); // EMPTY = {}

/* (89) Playing with Sets : Equal or Not ?
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like
.add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Equality

Two sets ( A, B ) are considered "equal" if all elements of A are elements of B and all elements
of B are elements of A no matter "order" of elements.

Examples:
  {1, 2} == {2, 1}
  {1, 2} != {1, 2, 3}
Task
Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false
depending if these 2 sets are "equal" (respectively not equal) ie : 
if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.

Examples:
A  = new Set([1,2]);
A2 = new Set([2,1]);
B  = new Set([2,3]);

areEqual(A,B)  // -> false
areEqual(A,A2) // -> true
notEqual(A,B)  // -> true


*/

function areEqual(s1, s2) {
  return (
    [...s1].every((e) => [...s2].includes(e)) &&
    [...s2].every((e) => [...s1].includes(e))
  );
  // [OR]
  // if (s1.size !== s2.size) return false;
  // for (let e of s1) {
  //   if (!s2.has(e)) return false;
  // }
  // return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}
// const A = new Set([1, 2]);
// A2 = new Set([2, 1]);
// B = new Set([2, 3]);

// console.log(areEqual(A, B)); // false
// console.log(areEqual(A, A2)); // true
// console.log(notEqual(A, B)); // true
// console.log(
//   notEqual(
//     new Set([1, 2, 3, 4, 5]),
//     new Set([1, 2, 3, 4, 5, 6, "z", "x", 111]),
//   ),
// ); // false

/* (90) Playing with Sets : Intersection
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods
like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Intersection

A new set can be constructed by determining which members two sets have "in common". 
The intersection of A and B, denoted by A ∩ B, is the set of all things that are members
of both A and B. If A ∩ B = ∅, then A and B are said to be disjoint.

Examples:
  {1, 2} ∩ {1, 2} = {1, 2}.
  {1, 2} ∩ {2, 3} = {2}.
Task
Create function inter getting 2 sets as arguments and returning a new Set as result
of intersection of these 2 sets.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

C = inter(A,B) // -> {2}


*/
function inter(s1, s2) {
  return new Set([...s1].filter((e) => s2.has(e)));
}
// console.log(inter(new Set([1, 2]), new Set([1, 2]))); // {1, 2}
// console.log(inter(new Set([1, 2]), new Set([2, 3]))); // {2}

/* (91) Playing with Sets : Complement
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like
.add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Complement

Two sets can be "subtracted". The relative complement of B in A, denoted by A \ B (or A − B),
is the set of all elements that are members of A but not members of B. Note that it is valid
to "subtract" members of a set that are not in the set, such as removing the element green
from the set {1, 2, 3}; doing so has no effect.

Examples:
  {1, 2} \ {1, 2} = ∅.
  {1, 2, 3, 4} \ {1, 3} = {2, 4}.
Task
Create function diff getting 2 sets as arguments and returning a new Set as result
of relative complement of second set in first.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

diff(A,B) // -> {1}
diff(B,A) // -> {3}
 

*/
function diff(s1, s2) {
  // ...
  return new Set([...s1].filter((e) => !s2.has(e)));
}
// console.log(diff(new Set([1, 2]), new Set([2, 3]))); // {1}
// console.log(diff(new Set([2, 3]), new Set([1, 2]))); // {3}

/* (92) Playing with Sets : Sup/Sub
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods
like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Subset and Superset

If every member of set A is also a member of set B, then A is said to be a subset of B,
written A ⊆ B (also pronounced "A is contained in B"). Equivalently, we can write B ⊇ A,
read as "B is a superset of A", "B includes A", or "B contains A".

Example:
  {1, 3} ⊆ {1, 2, 3, 4}.
  {1, 2, 3, 4} ⊆ {1, 2, 3, 4}.
  
  {1, 2, 3, 4} ⊇ {1, 3}.
  {1, 2, 3, 4} ⊇ {1, 2, 3, 4}.
Task
Create 2 functions:

isSubsetOf getting 2 sets as arguments and returning true if 2d set contains all elements of 1st one.

isSupersetOf getting 2 sets as arguments and returning true if 1st set contains all elements of 2d one.

Examples:
A = new Set([1,2]);
B = new Set([1,2,3]);

isSubsetOf(A,B) // -> true
isSubsetOf(B,A) // -> false

isSupersetOf(A,B) // -> false
isSupersetOf(B,A) // -> true
 

*/
function isSubsetOf(s1, s2) {
  return [...s1].every((e) => s2.has(e));
}

function isSupersetOf(s1, s2) {
  return [...s2].every((e) => s1.has(e));
  // [OR]
  // return isSubsetOf(s2, s1);
}
// console.log(isSubsetOf(new Set([1, 2]), new Set([1, 2, 3]))); // true
// console.log(isSubsetOf(new Set([1, 2, 3]), new Set([1, 2]))); // false
// console.log(isSupersetOf(new Set([1, 2]), new Set([1, 2, 3]))); // false
// console.log(isSupersetOf(new Set([1, 2, 3]), new Set([1, 2]))); // true

/* (93) Playing with Sets : Symmetric difference
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like
.add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Symmetric difference

The symmetric difference is an extension of the complement. Denoted A Δ B, it's the set
of all element of A which are not element of B and all element of B which are not element of A.

Example:
{7,8,9,10} Δ {9,10,11,12} = {7,8,11,12}.
Task
Create function symDiff getting 2 sets as arguments and returning a new Set as result of symmetric
difference of these sets.

Examples:
A = new Set([1,2,3]);
B = new Set([2,3,4]);

symDiff(A,B) // -> {1,4}
Note: as I've got some problem outputting "Δ" in tests, I will use "^" instead of it.

" May the Code be with you ! "

*/
function symDiff(s1, s2) {
  return new Set(
    [...s1].filter((e) => !s2.has(e)).concat([...s2].filter((e) => !s1.has(e))),
  );
  // [OR]
  // return new Set([...s1, ...s2].filter((e) => s1.has(e) !== s2.has(e)));
  // [OR]
  // return new Set([...s1, ...s2].filter((e) => !s1.has(e) || !s2.has(e)));
}
// console.log(symDiff(new Set([1, 2, 3]), new Set([2, 3, 4]))); // {1, 4}

/* (94) Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses
is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

*/
function validParentheses(parenStr) {
  return (
    [...parenStr].reduce((acc, cur) => {
      if (acc < 0) return acc; // if at any point we have more closing parentheses than opening ones, it's invalid
      return cur === "(" ? acc + 1 : acc - 1; // increment for opening, decrement for closing
    }, 0) === 0
  ); // at the end, we should have an equal number of opening and closing parentheses
}
// console.log(validParentheses("()")); // true
// console.log(validParentheses(")(()))")); // false
// console.log(validParentheses("(")); // false
// console.log(validParentheses("(())((()())())")); // true

/* (95) How much coffee do you need?
Everybody know that you passed to much time awake during night time...

Your task here is to define how much coffee you need to stay awake after your night.
You will have to complete a function that take an array of events in arguments, according
to this list you will return the number of coffee you need to stay awake during day time.
Note: If the count exceed 3 please return 'You need extra sleep'.

The list of events can contain the following:

You come here, to solve some kata ('cw').
You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').
You just watch a movie ('movie').
Other events can be present and it will be represent by arbitrary string, just ignore this one.
Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee
by events and if it is uppercase you need 2 coffees.

*/
function howMuchCoffee(events) {
  const event = ["cw", "dog", "cat", "movie"];

  count = events.reduce(
    (acc, cur) =>
      event.includes(cur.toLowerCase())
        ? acc + (cur === cur.toLowerCase() ? 1 : 2)
        : acc,
    0,
  );
  return count > 3 ? "You need extra sleep" : count;
}
// console.log(howMuchCoffee([])); // 0
// console.log(howMuchCoffee(["cw"])); // 1
// console.log(howMuchCoffee(["CW"])); // 2
// console.log(howMuchCoffee(["cw", "CAT"])); // 3
// console.log(howMuchCoffee(["cw", "CAT", "DOG"])); // 'You need extra sleep')
// console.log(howMuchCoffee(["cw", "CAT", "cw=others"])); // 3

/* (96) Remove All The Marked Elements of a List
Define a method/function that removes from a given array of integers all the values contained
in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

*/

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((num) => !values_list.includes(num));
};
// console.log(
//   [].remove_([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2]),
// ); // [5, 6, 7, 8]

/* (97) Alternate Square Sum
Complete the function that takes an array of integers as input and finds the sum of squares 
of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements
at odd position.

For empty arrays, result should be zero (except for Haskell).

Note
The values at even positions need to be squared. For a language with zero-based indices,
this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.

Example
[11, 12, 13, 14, 15]  -->  379
# 1.  2.  3.  4.  5.  position

11 + 12^2 + 13 + 14^2 + 15 = 379
Explanation:

Elements at indices 0, 2, 4 are 11, 13, 15 and they are at odd positions as 11 is at position #1,
13 is at position #3 and 15 at #5.

Elements at indices 1, 3 are 12 and 14 and they are at even position.
So we need to add 11, 13, 15 as they are and square of 12 and 14

*/
function alternateSqSum(arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += i % 2 !== 0 ? arr[i] ** 2 : arr[i];
  // }
  // return sum;
  // [or]
  return arr.reduce((acc, cur, i) => acc + (i % 2 !== 0 ? cur ** 2 : cur), 0);
}
console.log(alternateSqSum([])); // 0
console.log(alternateSqSum([1, 2, 3, 4, 5])); // 29
console.log(alternateSqSum([-1, 0, -3, 0, -5, 3])); // 0
