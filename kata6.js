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
console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
console.log(multiplicationTable(1)); // [[1]]
console.log(multiplicationTable(2)); // [[1,2],[2,4]]
