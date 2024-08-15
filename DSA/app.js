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
const stringLargestNumber = (sent) => {
  sent = sent.split(" ");
  let longestStr = sent[0];
  sent.forEach((element, i) => {
    // console.log(element, i);
    if (element.length > longestStr.length) {
      longestStr = element;
    }
  });
  console.log("longest word", longestStr);
};
stringLargestNumber("This is paragraph");
