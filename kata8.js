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
// console.log(generateShape(8));

/* (8) The falling speed of petals
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. 
The petals start to fall in late April.
Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), 
and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, 
and returns the time it takes for that petal to reach the ground from the same branch.

Notes:

The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0

*/

// v= distance / time 5= d/80 => d=400cm

function sakuraFall(v) {
  return v <= 0 ? 0 : 400 / v;
}
// console.log(sakuraFall(200));

/* (9) Multiplication table for number
Your goal is to return multiplication table for number that is always an integer from 1 to 10.
For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. 
If you're unsure about the format, look at the sample tests.
*/
function multiTable(number) {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
  return output;
}
// console.log(multiTable(5));

/* (10) Keep Hydrated!
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/
function litres(time) {
  return Math.floor(time * 0.5);
}
// console.log(litres(6.7));

/* (11) Find the position
When provided with a letter, return its position in the alphabet.

Input :: "a"
Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/
function position(letter) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return (
    `Position of alphabet: ` +
    (letters.split("").findIndex((char) => char === letter) + 1)
  );
  // [OR]
  // return `Position of alphabet: ${letters.indexOf(letter) + 1}`;
}
// console.log(position("z"));

/* (12) Remove String Spaces
Write a function that removes the spaces from the string, then return the resultant string.
Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/
function noSpace(x) {
  return x.split(" ").join("");
}
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

/* (13) Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within 
an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((i) => Number(i));
}

// console.log(digitize(35231));

/* (14) Remove First and Last Character Part Two
You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause 
the resulting string to be empty, return an empty value 
(represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

// input => a sequence of character sequences separated by commas => string
// output => a new string containing the same character sequences except the first and the last ones
//  but this time separated by spaces. => string or null
function array(string) {
  const stringArray = string.split(",");
  return stringArray.length < 3
    ? null
    : stringArray
        .join(" ")
        .slice(
          stringArray.join(",").indexOf(","),
          stringArray.join(",").lastIndexOf(",")
        )
        .trim();
  // [OR]
  // return string.split(",").slice(1, -1).join(" ") || null;
}
// console.log(array("A1,B2,C3,D4,E5"));

/* (15) Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; 
month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.

Constraint:
1 <= month <= 12
*/
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};
// console.log(quarterOf(11));

/* (16) Geometry Basics: Distance between points in 2D
This series of katas will introduce you to basics of doing geometry with computers.
Point objects have attributes x and y.
Write a function calculating distance between Point a and Point b.

Input coordinates fit in range 
−50⩽x,
y⩽50
Tests compare expected result and actual answer with tolerance of 1e-6.
*/
function distanceBetweenPoints(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
  // [OR] Math.hypot() calculate the square root of the sum of squares of its arguments
  // return Math.hypot(b.x - a.x, b.y - a.y);
}
// console.log(distanceBetweenPoints({ x: 1, y: 1 }, { x: 2, y: 2 }));

/* (17) Area of a Polygon (Easy)
Write the function polygonArea(A,B,C,D) that finds the area of polygons of this type:
Assume D always equals B/2.
Assume the angles formed by AB and BC are right angles.
*/
function polygonArea(A, B, C, D) {
  return (1 / 2) * (A + C) * B;
}
// console.log(polygonArea(2, 5, 10, 2.5)); //30

/* (18) Hex to Decimal
Complete the function which converts hex number (given as a string) to a decimal number.
*/
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
// console.log(hexToDec("-C"));

/* (19) Reverse Words
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
// console.log(reverseWords("yoda doesn't speak like this")); // "this like speak doesn't yoda"

/* (20) Color Ghost
Color Ghost
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

let Ghost = function () {
  let colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(Math.random() * 4)];
};
let ghost = new Ghost();
// console.log(ghost.color);

/* (21) How many lightsabers do you own?
Inspired by the development team at Vooza, write the function that
accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.
For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18
*/
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}
// console.log(howManyLightsabersDoYouOwn("Zach")); //18

/* (22) Do you speak "English"?
Given a string of arbitrary length with any ascii characters. 
Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct
 but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.
Return value as boolean values, true for the string to contains "English", false for it does not.
*/

function spEng(sentence) {
  return sentence.match(/english/i) ? true : false;
}
// console.log(spEng("english")); // true
// console.log(spEng("abcEnglishdef")); // true
// console.log(spEng("abcnEglishsef")); // false

/* (23) Did she say hallo?
You received a whatsup message from an unknown number. Could it be from that girl/boy 
with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish

Notes
you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/

function validateHello(greetings) {
  res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
  return res;
}
// console.log(validateHello("meh")); // false
// console.log(validateHello("hallo")); // true
// console.log(validateHello("ciao bella!")); // true

/* (24) A Needle in the Haystack
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

*/

function findNeedle(haystack) {
  return (
    "found the needle at position " +
    haystack.findIndex((item) => item === "needle")
  );
  // [OR]
  // return "found the needle at position " + haystack.indexOf("needle");
}
// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// ); // "found the needle at position 5"

/* (25) Remove the time
You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format 
for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, 
Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and 
returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2".
*/
function shortenToDate(longDate) {
  return longDate.split(",")[0];
}
// console.log(shortenToDate("Friday May 2, 7pm")); // "Friday May 2"

/* (26) 5 without numbers !!
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of
 the following characters: 0123456789*+-/

*/
function unusualFive() {
  return "five!".length;
}

// console.log(unusualFive()); // 5

/* (27) How good are you really?
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than 
the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. 
Do not forget them when calculating the average score!
*/
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, curr) => acc + curr, yourPoints) /
    (classPoints.length + 1) >
    yourPoints
    ? false
    : true;
}
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
// console.log(betterThanAverage([50, 50, 50], 50)); // false
// console.log(betterThanAverage([2, 3], 5)); // true

/* (28) Do I get a bonus?
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, 
and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. 
If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with £ (= "\u00A3"
*/

function bonusTime(salary, bonus) {
  return "\u00A3" + ((bonus && salary * 10) || salary);
}
// console.log(bonusTime(25000, true));
// console.log(bonusTime(10000, false));

/* (29) Who is going to pay for the wall?

Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. 
Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to 
get the neighborhood association to pay for it. 
He begins to solicit his neighbors to petition to get the association to build the wall. 
Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, 
and can only remember two letters from each of his neighbors’ names. 
As he collects signatures, he insists that his neighbors keep truncating their names 
until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. 
If the number of the characters in name is less than or equal to two, it will 
return an array containing only the name as is.

*/
function whoIsPaying(name) {
  return name.length <= 2 ? [name] : [name].concat(name.slice(0, 2)); // concat returns a new array
  // [OR]
  // return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}
// console.log(whoIsPaying("Mexico")); // ["Mexico", "Me"]
// console.log(whoIsPaying("Me")); // ["Me"]
// console.log(whoIsPaying("I")); // ["I"]

/* (30) Find the first non-consecutive number
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, 
so that's the first non-consecutive number.

If the whole array is consecutive then return null2.
The array will always have at least 2 elements1 and all elements will be numbers. 
The numbers will also all be unique and in ascending order. 
The numbers could be positive or negative and the first non-consecutive could be either too!

1 Can you write a solution that will return null2 for both [] and [ x ] though? 
(This is an empty array and one with a single number and is not tested for, 
but you can write your own example test. )

*/

function firstNonConsecutive(arr) {
  return (
    arr[arr.findIndex((num, index) => num + 1 !== arr[index + 1]) + 1] ?? null
  );
  // ?? =>  only treat null and undefined as false
  // || would treat other falsy values like 0 as false (0, "", false, NaN) so it is not suitable here
}
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
// console.log(firstNonConsecutive([1, 2, 3, 4])); // null
// console.log(firstNonConsecutive([1, 2, 0, 4])); // 0

/* (31) Merging sorted integer arrays (without duplicates)
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be sorted 
and not have any duplicate.
*/
function mergeArrays(a, b) {
  return Array.from(new Set([...a, ...b].sort((x, y) => x - y)));
}
// console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

/* (32) Convert a string to an array
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/
function stringToArray(string) {
  return string.split(" ");
}
// console.log(stringToArray("I love arrays they are my favorite")); // ["I", "love", "arrays", "they", "are", "my", "favorite"]

/* (33) Area or Perimeter
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square 
if its length and width are equal, otherwise it is a rectangle.

*/
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * (w + l);
};

// console.log(areaOrPerimeter(6, 10)); //32
// console.log(areaOrPerimeter(3, 3)); //9

/* (34) What is between?
Complete the function that takes two integers (a, b, where a < b) and return 
an array of all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]

*/
function between(a, b) {
  let output = [];
  for (let i = a; i <= b; i++) {
    output.push(i);
  }
  return output;
}
// console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]

/* (35) Sum of multiples
Find the sum of all multiples of n below m

Keep in Mind
n and m should be natural numbers (positive integers). 
Otherwise, see the examples in your language about how to handle invalid input values.
m is excluded from the multiples

Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/

function sumMul(n, m) {
  let output = 0;
  m - n <= 0 && (output = "INVALID");
  for (i = n; i < m; i += n) {
    output += i;
  }
  return output;
}
// console.log(sumMul(2, 9)); //20
// console.log(sumMul(0, 0)); // "INVALID"
// console.log(sumMul(4, -7)); // "INVALID"

/* (36) Return Two Highest Values in List
In this kata, your job is to return the two distinct highest values in a list. 
If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

*/
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}
// console.log(twoHighest([15, 20, 20, 17])); // [20, 17]
// console.log(twoHighest([])); // []

/* (37) Switch it Up!
When provided with a number between 0-9, return it in words. Note that the input is guaranteed
 to be within the range of 0-9.

Input: 1
Output: "One".

If your language supports it, try using a switch statement.
*/
function switchItUp(number) {
  const numberWords = [
    { 0: "Zero" },
    { 1: "One" },
    { 2: "Two" },
    { 3: "Three" },
    { 4: "Four" },
    { 5: "Five" },
    { 6: "Six" },
    { 7: "Seven" },
    { 8: "Eight" },
    { 9: "Nine" },
  ];
  return numberWords[number][number];
  // [OR] Using switch statement
  // switch (number) {
  //   case 0:
  //     return "Zero";
  //   case 1:
  //     return "One";
  //   case 2:
  //     return "Two";
  //   case 3:
  //     return "Three";
  //   case 4:
  //     return "Four";
  //   case 5:
  //     return "Five";
  //   case 6:
  //     return "Six";
  //   case 7:
  //     return "Seven";
  //   case 8:
  //     return "Eight";
  //   case 9:
  //     return "Nine";
  // }
}
// console.log(switchItUp(1)); // "One"
// console.log(switchItUp(5)); // "Five"

/* (38) Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/
const reverseSeq = (n) => {
  return new Array(n).fill(1).map((_, i) => n - i);
};
// console.log(reverseSeq(5)); // [5,4,3,2,1]

/* (39) Is there a vowel in there?
Given an array of numbers, check if any of the numbers are the character codes 
for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
*/
function isVow(a) {
  // ASCII CODES // [a, e, i, o, u] => [97, 101, 105, 111, 117]
  return String.fromCharCode(...a)
    .split("")
    .map((char) =>
      ["a", "e", "i", "o", "u"].includes(char) ? char : char.charCodeAt(0)
    );
}
// console.log(isVow([118, 117, 120, 121, 97, 101, 105, 111, 117, 98])); // [118,"u",120,121,"a","e","i","o","u",98]

/* (40) Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
even => *8 
odd => *9
*/
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
// console.log(simpleMultiplication(2)); //16
// console.log(simpleMultiplication(3)); //27

/* (41) Sort and Star
You will be given a list of strings. You must sort it alphabetically
 (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// ); // "b***i***t***c***o***i***n"
// console.log(
//   twoSort([
//     "turns",
//     "out",
//     "random",
//     "test",
//     "cases",
//     "are",
//     "easier",
//     "than",
//     "writing",
//     "out",
//     "basic",
//     "ones",
//   ])
// ); // "a***r***e"

/* (42) Printing Array elements with Comma delimiters
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
Note: the input data can be: boolean array, array of objects, array of string arrays, 
array of number arrays... 😕
*/
function printArray(array) {
  return array.toString();
  // [OR]
  // return array.join(",");
}
// console.log(
//   printArray([
//     ["hello", "this", "is", "an", "array!"],
//     [1, 2, 3, 4, 5],
//   ])
// ); // "hello,this,is,an,array!,1,2,3,4,5"
// console.log(
//   printArray([
//     { firstName: "Ruslan", lastName: "López" },
//     { firstName: "John", lastName: "Doe" },
//   ])
// ); // "[object Object],[object Object]"

/* (43) get ascii value of character
 */
function getASCII(c) {
  // char to ASCII => char.charCodeAt(0)
  // ASCII to char String.fromCharCode()
  return c.charCodeAt(0);
}
// console.log(getASCII("A")); // 65
// console.log(getASCII(" ")); // 32

/* (44) String cleaning
Your boss decided to save money by purchasing some cut-rate optical character recognition software for 
scanning in the text of old novels to your database. 
At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers
 at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and 
remove all of the numbers. 
Your program will take in a string and clean out all numeric characters, and return a string 
with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

*/
function stringClean(s) {
  return s.replace(/[0-9]/g, "");
}
// console.log(stringClean("(E3at m2e2!!)")); // "(Eat me!!)"

/* (45) Generate range of integers
Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

Examples
(1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
(1, 15, 20) -> [1]
Note
start < stop
step > 0
*/
function generateRange(min, max, step) {
  return new Array(Math.floor((max - min) / step + 1))
    .fill(1)
    .map((_, i) => min + i * step); // 0> 2 + 0 * 2 = 2+0 = 2 , 1> 2 + 1 * 2 = 2+2 = 4
  // [OR]
  // let output = [];
  // for (let i = min; i <= max; i += step) {
  //   output.push(i);
  // }
  // return output;
}
// console.log(generateRange(2, 10, 2)); // [2,4,6,8,10]
// console.log(generateRange(1, 10, 1)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(generateRange(1, 10, 4)); // [1,5,9]

/* (46) Sum of differences in array
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0
*/
function sumOfDifferences(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  return arr.length < 1 ? 0 : sortedArr[0] - sortedArr[arr.length - 1];
  // [OR]
  // return arr.length < 1 ? 0 : Math.max(...arr) - Math.min(...arr);
}
// console.log(sumOfDifferences([-3, -2, -1])); // -1,-2,-3 => (-1 - -2) + (-2 - -3) = 1 + 1 = 2
// console.log(sumOfDifferences([1, 2, 10])); // 10,2,1 => (10 - 2) + (2 - 1) = 8 + 1 = 9
// console.log(sumOfDifferences([])); // 0
// console.log(sumOfDifferences([1])); // 0

/* (47) Welcome to the City
Create a method that takes as input a name, city, and state to welcome a person. 
Note that name will be an array consisting of one or more values that should be joined together with one space between each, 
and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/
function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
// console.log(
//   sayHello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois")
// ); // "Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!"

/* (48) You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/
function check(a, x) {
  return a.includes(x);
}
// console.log(check(["t", "e", "s", "t"], "e")); // true
// console.log(check([1, 2, 3, 4], 5)); // false

/* (49) Define a card suit
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/
function defineSuit(card) {
  // .slice(-1) => get the last character of the string
  return {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  }[card.slice(-1)];
}
// console.log(defineSuit("3♣")); // 'clubs'
// console.log(defineSuit("3♦")); // 'diamonds'
// console.log(defineSuit("3♥")); // 'hearts'
// console.log(defineSuit("3♠")); // 'spades'

/* (50) Add Length
What if we need the length of the words separated by a space to be added at the end of that same word
and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with 
the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/
function addLength(str) {
  return str.split(" ").map((word) => word + " " + word.length);
}
// console.log(addLength("apple ban")); // ["apple 5", "ban 3"]
// console.log(addLength("you will win")); //["you 3", "will 4", "win 3"]

/* (51) Multiple of index
Return a new array consisting of elements which are multiple of their own index 
in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/
function multipleOfIndex(array) {
  return array.filter((num, index) => num % index === 0 || num === 0);
}
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]
// console.log(multipleOfIndex([0, 2, 3, 6, 9])); // [0, 2,6]

/* (52) Stringy Strings
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/
function stringy(size) {
  return `${"10".repeat(size / 2)}${size % 2 ? 1 : ""}`;
  // [OR]
  // let output = "";
  // for (let i = 1; i <= size; i++) {
  //   output += i % 2;
  // }
  // return output;
}

// console.log(stringy(6)); // '101010'
// console.log(stringy(4)); // '1010'
// console.log(stringy(15)); // '101010101010101'
// console.log(stringy(25)); // '1010101010101010101010101'

/* (53) pick a set of first elements
Write a function to get the first element(s) of a sequence. Passing a parameter n 
(default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

*/
function first(arr, n = 1) {
  return arr.slice(0, n);
}
// console.log(first(["a", "b", "c", "d", "e"])); // ['a']
// console.log(first(["a", "b", "c", "d", "e"], 2)); // ['a', 'b']
// console.log(first(["a", "b", "c", "d", "e"], 0)); // []

/* (54) To square(root) or not to square(root)
Write a method, that will get an integer array as parameter and will process every number 
from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/
function squareOrSquareRoot(array) {
  return array.map((num) =>
    Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num
  );
}
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [2,9,3,49,4,1]

/* (55) Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
// console.log(nameShuffler("john McClane")); // "McClane john"

/* (56) Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/
function areYouPlayingBanjo(name) {
  return `${name} ${
    /r/i.test(name[0]) ? "plays banjo" : "does not play banjo"
  }`;
  // [OR]
  // return (
  //   name +
  //   (name[0].toLowerCase() === "r" ? " plays banjo" : " does not play banjo")
  // );
}
// console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"
// console.log(areYouPlayingBanjo("Martin")); // "Martin does not play banjo"

/* (57) Reversing Words in a String

You need to write a function that reverses the words in a given string. 
Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/
function reverse(string) {
  return string.split(" ").reverse().join(" ");
  //[or]
  // [firstName, lastName] = string.split(" ");
  // return lastName + " " + firstName;
}
// console.log(reverse("Hi There.")); // "There. Hi"

/* (58) Returning String
Create a function that accepts a parameter representing a name and returns the message: 
"Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
// console.log(greet("Bob"));

/* (59) Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
*/
let templateStrings = function (noun, adjective) {
  return `${noun} are ${adjective}`;
};
// console.log(templateStrings("Animals", "Good")); // "Animals are Good"

/* (60) Name on billboard
You can print your name on a billboard ad. Find out how much it will cost you. 
Each character has a default price of £30, 
but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).

->>You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, 
ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).
*/
function billboard(name, price = 30) {
  return "i".repeat(name.length).repeat(price).length;
  // [OR]
  // return name.repeat(price).length;
  // [OR]
  // let totalprice=0;
  // for(let i=0; i<name.length;i++){
  //   totalprice+=price;
  // }
  // return totalprice;
}
// console.log(billboard("Jeong-Ho Aristotelis")); // 600
// console.log(billboard("Abishai Charalampos")); //570
// console.log(billboard("Hadufuns John", 20)); // 260

/* (61) Simple Comparison?
Write a function that will compare two values, one will be a number and one will be a string. 
Return true if they are the same character (regardless of their different data types) 
and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion 
I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt 
and .Number().

*/
function add(a, b) {
  return a == b ? true : false;
}
// console.log(add(1, "1")); // true
// console.log(add("1", 0)); // false

/* (62) Volume of a Cuboid
Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: 
the length, width and height of the cuboid.

Write a function to help Bob with this calculation.

*/
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
// console.log(Kata.getVolumeOfCuboid(1, 2, 2)); // 4

/* (63) Duck Duck Goose
Given an array of Player objects and a position (first position is 1), 
return the name of the chosen Player.
name is a property of Player objects, e.g Player.name

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/
class Player {
  constructor(name) {
    this.name = name;
  }
}
const players = ["a", "b", "c", "d", "e", "f"].map((name) => new Player(name));
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}
// console.log(duckDuckGoose(players, 1)); // a
// console.log(duckDuckGoose(players, 3)); // c
// console.log(duckDuckGoose(players, 6)); // f
// console.log(duckDuckGoose(players, 8)); // b

/* (64) Logical calculator
Given an array of Boolean values and a logical operator, return a Boolean result based on 
sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False

booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True

booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False

Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"

Output
A Boolean value (True or False).

*/
function logicalCalc(array, op) {
  const operator = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => (a ^ b ? true : false),
  };
  return array.reduce((acc, cur) => operator[op](acc, cur));
}
// console.log(logicalCalc([true, true, true, false], "AND")); // false
// console.log(logicalCalc([true, true, true, false], "OR")); // true
// console.log(logicalCalc([true, true, true, false], "XOR")); // true

/* (65) Remove duplicates from list
Define a function that removes duplicates from an array of non negative numbers 
and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

*/
function distinct(a) {
  return [...new Set(a)];
}
// console.log(distinct([1, 1, 2])); // [1,2]
// console.log(distinct([1, 2, 1, 1, 3, 2])); // [1,2,3]

/* (66) Take an Arrow to the knee, Functionally
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), 
Tools.FromCharCode() (C#) method to convert the number to a character. 
It is recommended to map over the array of numbers and convert each number 
to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a
*/
const arrowFunc = function (arr) {
  return arr.map((num) => String.fromCharCode(num)).join("");
  // [OR]
  // return String.fromCharCode(...arr);
};
// console.log(arrowFunc([84, 101, 115, 116])); // Test

/* (67) How many stairs will Suzuki climb in 20 years?
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. 
Some days he climbs more stairs than others depending on the number of students he must train in the morning. 
He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

-->> 20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. 
You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.

*/
function stairsIn20(s) {
  return s.flat().reduce((acc, cur) => acc + cur, 0) * 20;
}
const sunday = [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
    6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
    5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
    9871, 5990, 6309, 7825,
  ],
  monday = [
    9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932,
    7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105,
    9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098,
    6099, 5828, 7217, 9387,
  ],
  tuesday = [
    8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758,
    8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684,
    8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756,
    5717, 7555, 9447, 7703,
  ],
  wednesday = [
    6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047,
    6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031,
    8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652,
    5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357,
    7378, 9598, 5405, 9493,
  ],
  thursday = [
    6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752,
    8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063,
    6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858,
    5360, 6638, 8012, 8701,
  ],
  friday = [
    5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589,
    6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473,
    5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072,
    8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455,
    8720, 5725, 6960, 5127,
  ],
  saturday = [
    5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354,
    8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625,
    7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242,
    9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184,
    7960, 9455, 5633, 9085,
  ];
const stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
// console.log(stairsIn20(stairs)); //54636040

/* (68) Grasshopper - Array Mean
Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together 
and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4
*/
function findAverage(nums) {
  return nums.reduce((acc, cur) => acc + cur, 0) / nums.length;
  // [OR]
  // let total = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   total += nums[i];
  // }
  // return total / nums.length;
}
// console.log(findAverage([1])); //1
// console.log(findAverage([1, 3, 5, 7])); //4

/* (69) A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, 
and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/

function warnTheSheep(queue) {
  const position = queue.reverse().findIndex((e) => e == "wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
// console.log(
//   warnTheSheep([
//     "sheep",
//     "sheep",
//     "sheep",
//     "sheep",
//     "sheep",
//     "wolf",
//     "sheep",
//     "sheep",
//   ])
// ); //Oi! Sheep number 2! You are about to be eaten by a wolf!

// console.log(
//   warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
// ); //Oi! Sheep number 5! You are about to be eaten by a wolf!

// console.log(warnTheSheep(["sheep", "sheep", "wolf"])); //Pls go away and stop eating my sheep

/* (70) UEFA EURO 2016
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/
function uefaEuro2016(teams, scores) {
  const winningTeam = scores.indexOf(Math.max(...scores));
  return scores[0] === scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    : `At match ${teams[0]} - ${teams[1]}, ${teams[winningTeam]} won!`;
}
// console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); // "At match Germany - Ukraine, Germany won!"
// console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2])); // "At match Belgium - Italy, Italy won!"
// console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1])); // "At match Portugal - Iceland, teams played draw."

/* (71) SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, 
create a program that returns true if the sum of the squares of each element 
in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); 
// returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

*/
function arrayMadness(a, b) {
  return (
    a.reduce((acc, cur) => cur ** 2 + acc, 0) >
    b.reduce((acc, cur) => cur ** 3 + acc, 0)
  );
}
// console.log(arrayMadness([4, 5, 6], [1, 2, 3])); // true
// console.log(arrayMadness([5, 6, 7], [4, 5, 6])); // false

/* (72) Crash Override
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override
 are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, 
will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name 
and one for the first letter of the surname are already given. 
See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, 
you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name 
so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

*/
function aliasGen(first, last) {
  var firstName = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "Data",
    L: "Logic",
    X: "Xerox",
  };
  var surname = {
    A: "Analogue",
    B: "Bomb",
    C: "Catalyst",
    D: "Data",
    L: "Lazer",
  };
  return /[A-Z]/i.test(first[0]) && /[A-Z]/i.test(last[0])
    ? firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()]
    : "Your name must start with a letter from A - Z.";
}
// console.log(aliasGen("Larry", "Brentwood")); // Logic Bomb
// console.log(aliasGen("123abc", "Petrovic")); // Your name must start with a letter from A - Z.
// console.log(aliasGen("xaaq5", "lunjr")); // Xerox Lazer

/* (73) Enumerable Magic #20 - Cascading Subsets
Create a method each_cons that accepts a list and a number n, and returns cascading subsets 
of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/
function eachCons(array, n) {
  return Array.from({ length: array.length - n + 1 }, (_, i) =>
    array.slice(i, i + n)
  );
  // [OR]
  // let output = [];
  // for (let i = 0; i <= array.length - n; i++) {
  //   output.push(array.slice(i, i + n));
  // }
  // return output;
}
// console.log(eachCons([3, 5, 8, 13]), 1); //[[3], [5], [8], [13]]
// console.log(eachCons([3, 5, 8, 13], 2)); //[[3, 5], [5, 8], [8, 13]]
// console.log(eachCons([3, 5, 8, 13], 3)); //[[3, 5, 8], [5, 8, 13]]

/* (74) Implement Array.prototype.filter()
What we want to implement is Array.prototype.filter() function, 
just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined 
for the purposes of this Kata.
*/
Array.prototype.filter = function (func) {
  let output = [];
  // this refer to the array
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      // call the function with each element
      output.push(this[i]);
    }
  }
  return output;
};
// console.log([1, 2, 3, 4, 5].filter((num) => num > 3)); //[4, 5]

/* (75) ES6 string addition
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. 
Your task is to find out what this is and write a function that will 
add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods 
that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.

*/
function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}
// console.log(joinStrings("string1", "string2")); // 'string1 string2'
// console.log(joinStrings(1, "string2")); // '1 string2'

/* (76) Polish alphabet
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/
function correctPolishLetters(string) {
  return string.replace(/[ąćęłńóśźż]/gi, (char) => {
    switch (char) {
      case "ą":
        return "a";
      case "ć":
        return "c";
      case "ę":
        return "e";
      case "ł":
        return "l";
      case "ń":
        return "n";
      case "ó":
        return "o";
      case "ś":
        return "s";
      case "ź":
        return "z";
      case "ż":
        return "z";
    }
  });
  // [OR]
  // const polish = {
  //   ą: "a",
  //   ć: "c",
  //   ę: "e",
  //   ł: "l",
  //   ń: "n",
  //   ó: "o",
  //   ś: "s",
  //   ź: "z",
  //   ż: "z",
  // };
  // return string
  //   .split("")
  //   .map((char) => polish[char] || char)
  //   .join("");
}
// console.log(correctPolishLetters("Jędrzej Błądziński")); // "Jedrzej Bladzinski"

/* (77) Count words
Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we made for your code:

Function have to count words and not spaces. You have to be sure that you doing it right
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
Doublecheck that words with chars like -, ', ` are counted right.
*/
function countWords(str) {
  return str.split(/\s/).filter((item) => item !== "").length;
  // \s = matches any whitespace char includes space or newline
}
// console.log(countWords("Hello")); // 1
// console.log(countWords("Hello, World!")); // 2
// console.log(countWords("With! Symbol@ #Around! (Every) %Word$")); // 5
// console.log(countWords("Dear   Victoria, I love  to press   space button.")); // 8
//  work with non-whitespace (ex. breakspace) chars
// console.log(countWords("Hello\u00A0World")); // 2

/* (78) Neutralisation
Given two strings comprised of + and -, return a new string which shows how 
the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.

Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length.
*/

function neutralise(s1, s2) {
  return [...s1].map((char1, i) => (char1 === s2[i] ? char1 : 0)).join("");
  // [OR]
  // let output = "";
  // for (let i = 0; i < s1.length; i++) {
  //   output += s1[i] === s2[i] ? s1[i] : 0;
  // }
  // return output;
}
// console.log(neutralise("--++--", "++--++")); // 000000
// console.log(neutralise("-+-+-+", "-+-+-+")); // -+-+-+
// console.log(neutralise("-++-", "-+-+")); // -+00

/* (79) The Wide-Mouthed frog!
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. 
But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. 
If this one is an alligator (case-insensitive) return small otherwise return wide.

*/
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
// console.log(mouthSize("toucan")); // wide
// console.log(mouthSize("alligator")); // small

/* (80) Exclamation marks series #1: Remove an exclamation mark from the end of string
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, 
you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/
function remove(string) {
  return string[string.length - 1] === "!" ? string.slice(0, -1) : string;
  // [OR]
  // return string.replace(/!$/, ""); // $ => end of string
  // [OR]
  // return string.endsWith("!") ? string.slice(0, -1) : string;
}
// console.log(remove("Hi!")); // "Hi"
// console.log(remove("Hi!!!")); // "Hi!!"
// console.log(remove("!Hi")); // "!Hi"
// console.log(remove("!Hi!")); // "!Hi"
// console.log(remove("Hi! Hi!")); // "Hi! Hi"

/* (81) Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

*/
function greet(name, owner) {
  return `Hello ${name === owner ? "boss" : "guest"}`;
}
// console.log(greet("Daniel", "Daniel")); // 'Hello boss'
// console.log(greet("Greg", "Daniel")); // 'Hello guest'

/* (82) Alan Partridge II - Apple Turnover
Backstory

As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

Lynn: Alan, there’s that teacher chap.
Alan: Michael, if he hits me, will you hit him first?
Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
Alan: Yeah, chicken stock.
Phil: Hello Alan.
Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
Lynn: What do you mean?
Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, 
else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).

*/
function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}
// console.log(apple("50")); // "It's hotter than the sun!!"
// console.log(apple(4)); // "Help yourself to a honeycomb Yorkie for the glovebox."

/* (83) Safen User Input Part I - htmlspecialchars
Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns 
a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more)
 which contains form fields so visitors can send emails or leave a comment on your website with ease. 
 However, with ease comes danger. 
 Every now and then, a hacker visits your website and attempts to compromise it through the use of 
 XSS (Cross Site Scripting). 
 This is done by injecting script tags into the website through form fields which may contain malicious 
 code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;

*/
function htmlspecialchars(formData) {
  return formData.replace(/[<>"&]/g, (char) => {
    return {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "&": "&amp;",
    }[char];
  });
  //[OR]
  // return formData.replace(
  //   /[<>"&]/g,
  //   (char) =>
  //     ({
  //       "<": "&lt;",
  //       ">": "&gt;",
  //       '"': "&quot;",
  //       "&": "&amp;",
  //     }[char])
  // );
  // [OR]
  // return formData
  //   .split("")
  //   .map(
  //     (char) =>
  //       ({
  //         "<": "&lt;",
  //         ">": "&gt;",
  //         '"': "&quot;",
  //         "&": "&amp;",
  //       }[char] || char)
  //   )
  //   .join("");
}

// console.log(htmlspecialchars("<h2>Hello World</h2>")); // "&lt;h2&gt;Hello World&lt;/h2&gt;"
// console.log(htmlspecialchars("Hello, how would you & I fare?")); // "Hello, how would you &amp; I fare?"

/* (84) Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string 
for false.
*/
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
console.log(boolToWord(true)); // "Yes"
console.log(boolToWord(false)); // "No"
