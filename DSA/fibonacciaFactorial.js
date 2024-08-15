// n*(n-1)/2
// const fibonacciNumber = (num) => {
//   if (num == 0) return 0;
//   if (num == 1) return 1;
//   let a = 0;
//   let b = 1;
//   let fib = 0;
//   let fibo = [a, b];
//   //   let digit = 0;
//   for (let i = 2; i <= num; i++) {
//     fib = a + b;
//     fibo.push(fib);
//     console.log("fib", fib);
//     // digit = digit * 10 + fib;
//     // console.log("reverse number", digit);
//     a = b;
//     b = fib;
//     // console.log("b", b);
//   }
//   console.log("fibonacci", fibo);

//   return fib;
// };

// console.log(fibonacciNumber(8));

const factorialNumber = (num) => {
  // if(num ==1) return 1

  let sum = 0;
  let sumArr = [];
  let factorial = 1;
  let actorialArr = [];
  for (let i = 1; i <= num; i++) {
    sum += i;
    sumArr.push(sum);
    factorial *= i;
    actorialArr.push(factorial);
  }
  console.log("factorial number ", factorial);
  console.log("factorial numbers are ", actorialArr);

  console.log("sum number ", sum);
  console.log("sum numbers are ", sumArr);
};

factorialNumber(5); //1+2+3+4+5
