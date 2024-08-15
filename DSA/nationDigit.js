// sum of natural number

// const sumOfNaturalNumber = (num) => {
//   //   let sum = 0;
//   //   console.log(num);

//   //   for (let i = 0; i <= num; i++) {
//   //     sum += i;
//   //     console.log(sum);
//   //   }
//   let sum = (num * (num + 1)) / 2;
//   console.log("sum of natural number is", sum);
// };
// sumOfNaturalNumber(6);

const sumOfDigits = (digits) => {
  let sum = 0;
  while (digits > 0) {
    sum += digits % 10;
    digits = Math.floor(digits / 10);
    console.log("sum", sum);
    console.log("digits", digits);
  }
  console.log("sum of digits", sum);
};

sumOfDigits(123456);
