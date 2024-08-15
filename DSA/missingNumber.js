const missingNumber = (num) => {
  let actual_sum = 0;
  let expectedSum = 0;
  for (let i = 0; i < num.length; i++) {
    actual_sum += num[i];
    expectedSum += i;
  }
  expectedSum += num.length;
  console.log("expectedSum", expectedSum);
  console.log("actual_sum", actual_sum);

  console.log("missing number is", actual_sum - expectedSum);
};

missingNumber([0, 2, 5, 3, 1]);
