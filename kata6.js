/* (1) Multiplication table
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/
function multiplicationTable(size) {
  return [...Array(size)].map((_, i) =>
    [...Array(size)].map((_, j) => (i + 1) * (j + 1)),
  );
  // [OR]
  // let table = [];
  // for (let i = 0; i < size; i++) {
  //   let row = [];
  //   for (let j = 0; j < size; j++) {
  //     row.push((i + 1) * (j + 1));
  //   }
  //   table.push(row);
  // }
  // return table;
}
// console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
// console.log(multiplicationTable(1)); // [[1]]
// console.log(multiplicationTable(2)); // [[1,2],[2,4]]

/* (2) Common array elements
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

*/
function common(a, b, c) {
  const countA = {};
  const countB = {};
  const countC = {};

  a.forEach((num) => (countA[num] = (countA[num] || 0) + 1));
  b.forEach((num) => (countB[num] = (countB[num] || 0) + 1));
  c.forEach((num) => (countC[num] = (countC[num] || 0) + 1));

  let sum = 0;
  for (const num in countA) {
    const minCount = Math.min(countA[num], countB[num] || 0, countC[num] || 0);
    sum += num * minCount;
  }

  return sum;
}
console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2])); // 5
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])); // 7
