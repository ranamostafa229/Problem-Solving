/* (1) The 'if' function

Create a function that takes three arguments:

a value to be evaluated for truthiness.
a function to execute if the first argument is truthy.
a function to execute if the first argument is falsy.
If the first argument evaluates to truthy, call the second argument (a function). 
If it evaluates to falsy, call the third argument instead (also a function).

In statically-typed languages, the first argument will be a boolean. 
In dynamically-typed languages that attribute a truth value to all expressions, it may be of any type.

*/
function _if(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}

/* (2) Remove First and Last Character

Task
Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

Examples
'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'
Requirements
The input string will always have at least 2 characters
For strings with exactly 2 characters, return an empty string
For strings with 3 or more characters, remove the first and last character
The function should handle strings containing letters, numbers, and special characters
*/

function removeChar(str) {
  if (str.length >= 2) {
    return str.slice(1, str.length - 1);
  }
  // or str.slice(1,-1)
}

// console.log(removeChar("country"));

/* (3) Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that 
reads the same backwards as forwards, such as madam or racecar.
*/
function isPalindrome(x) {
  const lowerCasedStr = x.toLowerCase();
  const reservedStr = lowerCasedStr.split("").reverse();
  return lowerCasedStr
    .split("")
    .every((char, index) => char === reservedStr[index]);
}
// console.log(isPalindrome("Madam"));

/* (4) Plural
We need a simple function that determines if a plural is needed or not.
It should take a number, and return true if a plural should be used with that number 
or false if not. This would be useful when printing out a string
such as 5 minutes, 14 apples, or 1 sun.
You only need to worry about english grammar rules for this kata, 
where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/
function plural(n) {
  return n !== 1;
}
// console.log(plural(Infinity)); // true

/* (5) Who ate the cookie?
For this problem you must create a program that says who ate the last cookie. 
If the input is a string then "Zach" ate the cookie. 
If the input is a float or an int then "Monica" ate the cookie. 
If the input is anything else "the dog" ate the cookie. 
The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
*/

function cookie(x) {
  return (
    `Who ate the last cookie? It was ` +
    (typeof x === "string"
      ? "Zach!"
      : typeof x === "number"
      ? "Monica!"
      : "the dog!")
  );
}
// console.log(cookie(2.3));

/* (6) Filter out the geese
Write a function that takes a list of strings as an argument and returns a filtered list 
containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed 
to your function, albeit with the 'geese' removed. 

*/

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  return birds.filter((bird) => !geese.includes(bird));
}
// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

/* (7) Build a square
I will give you an integer. Give me back a shape that is as long and wide as the integer. 
The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:
+++
+++
+++

*/
function generateShape(integer) {
  let output = [];
  for (let r = 0; r <= integer - 1; r++) {
    for (let c = 0; c <= integer - 1; c++) {
      c === integer - 1 && c !== r ? output.push("+" + "\n") : output.push("+");
    }
  }
  return output.join("");
}
console.log(generateShape(8));
