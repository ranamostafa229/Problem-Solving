/* (1) Human readable duration format 
 write a function which formats a duration, given as a number of seconds, in a human-friendly way.
The function must accept a non-negative integer. If it is zero, it just returns "now". 
Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
A component will not appear at all if its value happens to be zero 
=> 1 minute and 0 seconds (x) should be 1 minute)
*/
//  input => number
// output => string (separated by a comma and a space (", ").
// Except the last component, which is separated by " and ", just like it would be written in English.)
//* For seconds = 62, your function should return
// "1 minute and 2 seconds"

function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) return "now";

  // units in seconds
  const units = [
    ["year", 31536000],
    ["day", 86400], //365 * 24 * 60 * 60 // 24 * 60 * 60
    ["hour", 3600], // 60 * 60
    ["minute", 60], // 60
    ["second", 1],
  ];

  let parts = [];
  for (let [unit, value] of units) {
    let count = Math.floor(seconds / value);
    if (count > 0) {
      seconds %= value;
      parts.push(count + " " + (count > 1 ? unit + "s" : unit));
    }
  }

  return parts.length === 1
    ? parts[0]
    : parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
}
console.log(formatDuration(1));
