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
console.log(stringToArray("I love arrays they are my favorite")); // ["I", "love", "arrays", "they", "are", "my", "favorite"]
