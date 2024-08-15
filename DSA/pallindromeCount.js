const countDigits = (num) => {
  let count = 0;
  num = Math.abs(num);
  //   console.log("num abs", num);

  do {
    num = Math.floor(num / 10);
    count++;
    // console.log("count", count);
    // console.log("num", num);
  } while (num > 0);
  console.log("Digits number", count);
};

countDigits(-1236545);

const pallindromNumber = (num) => {
  let originalNumber = num;
  let reverseNumber = 0;

  do {
    let digit = num % 10;
    reverseNumber = reverseNumber * 10 + digit;
    num = Math.floor(num / 10);
  } while (num > 0);
  console.log(reverseNumber);
  if (reverseNumber === originalNumber) {
    console.log(`${originalNumber} is a palindrome`);
  } else {
    console.log(`${originalNumber} is not a palindrome`);
  }
};

pallindromNumber(1234);
pallindromNumber(1221);
