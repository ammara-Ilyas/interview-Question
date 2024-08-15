//////////   larget number

// const highestNumber = (num) => {
//   let max = -Infinity;
//   let second = -Infinity;
//   for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     if (element > max) {
//       //   console.log("max", max);
//       //   console.log("ele", element);
//       //   console.log("min", second);
//       second = max;
//       max = element;
//     } else if (max > element && element > second) {
//       second = element;
//     }
//   }
//   console.log("second", second);
//   console.log("max of numbers", max);
// };

// highestNumber([1, 2, 3, 4, 2, 5, 7, 1, 3, 0]);
// const lowestNumber = (num) => {
//   let max = Infinity;
//   let second = Infinity;
//   for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     if (element < max) {
//       second = max;
//       max = element;
//     } else if (max < element && element < second) {
//       second = element;
//     }
//   }
//   console.log("second", second);
//   console.log("max of numbers", max);
// };

// lowestNumber([1, 2, 3, 4, 2, 5, 7, 1, 3, 0]);
// const stringLargestNumber = (sent) => {
//   sent = sent.split(" ");
//   let longestStr = sent[0];
//   sent.forEach((element, i) => {
//     // console.log(element, i);
//     if (element.length > longestStr.length) {
//       longestStr = element;
//     }
//   });
//   console.log("longest word", longestStr);
// };
// stringLargestNumber("This is paragraph");

let arr = [0, 1, 2, 4, 5, 6];
console.log(arr.includes(5));
console.log("min in array", Math.min(...arr));
console.log("max in array", Math.max(...arr));

// const intersection = (arr1, arr2) => {
//   const filtered = arr1.filter((ele, i) => {
//     return arr2.find((elem) => elem === ele);
//   });
//   return filtered;
// };
// console.log(intersection([1, 2, 3, 4, 5], [4, 5, 6, 7]));

const unionArr = (arr1, arr2) => {
  let arr3 = new Set([...arr1, ...arr2]);
  return Array.from(arr3);
};
console.log(unionArr([1, 2, 3, 4], [3, 4, 5, 6]));
