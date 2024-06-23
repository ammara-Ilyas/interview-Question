// async function foo() {
//   return "hello";
// }
// console.log(a);
// console.log(b);
// var a = (b = 5);
// console.log(1 < 2 < 3);
// let str1 = "Java";

// let str2 = "Script";
// console.log("cookies");
// let result = str1 + str2;
// result = str1.concat(str2);

// console.log("Concatenated String: " + result);
// console.log(3 > 2 > 1);
// let max = -1;
// let sec = -1;
// let res = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       sec = max;
//       max = arr[i];
//     } else if (arr[i] < sec && arr[i] != max) {
//       arr[i] = sec;
//     }

//   }
//   return sec;
// };
// let c = res([1, 2, 3, 4, 5, 2, 4, 8, 6, 7, 2, 0]);
// console.log(c);
// const a = 5 + "5" - 5;
// console.log(a);
// let obj = {
//   id: 2,
//   a: undefined,

//   b: null,
//   d: "hello",
// };
// let c = Object.entries(obj);
// console.log(c);
// let d = c.filter(([str, val]) => {
//   return val != null;
// });
// console.log(d);
// let za = [1, 2, 3, 4];
// console.log(Math.min(za));
// let result = foo()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// console.log(result);
console.log("c", [1, 2] == [1, 2]);
const str = "hi i am good girl";
// let arr = str.split(" ");
// console.log(arr);
// let newArr = arr.map((val) => {
//   return val[0].toLocaleUpperCase() + val.slice(1);
// });
// console.log(newArr);
// console.log(str);
// let todo = document.getElementById("todo");
// console.log(todo);
// let input = document.getElementById("input");
// let btn = document.getElementById("btn");
// let arr = [];

// btn.addEventListener("click", () => {
//   arr.push(input);
//   console.log(input.value);
// });
// let tod = arr.map((val) => {
//   return val;
// });
// todo.innerHTML = tod;

// this    key word
// function doSomething() {
//   console.log(this);
// }

// doSomething();
//////////////////NAN
// isNaN("Hello"); // Returns true
// isNaN(345); // Returns false
// isNaN("1"); // Returns false, since '1' is converted to Number type which results in 0 ( a number)
// isNaN(true); // Returns false, since true converted to Number type results in 1 ( a number)
// isNaN(false); // Returns false
// isNaN(undefined); // Returns true
// let arr = [1, 2, 3, 4];
// let arr2 = [4, 2, 5, 7];

// const ans = arr.filter((ele) => {
//   return arr2.includes(ele);
// });
// const arr3 = new Set(...[...arr, ...arr2]);
// console.log("arr", arr3);

// console.log("ans", ans);
/////////////call()
const person = {
  fullName: () => {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
person.fullName.call(person1);
const person7 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person8 = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.apply(person8, ["Oslo", "Norway"]);
const person9 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person9.fullName.bind(member);
console.log(fullName);
////////////curry function
function add(a) {
  return function (b) {
    return function (c) {
      return function () {
        return a + b + c;
      };
    };
  };
}
console.log("currying");
console.log(add(3)(4)(5)());
///////////////////closure
const clos = (a, b, c) => {
  return {
    getPlus2: function (d) {
      return a + b + d;
    },
    getPlus3: function (e, f) {
      return a + b + c + e + f;
    },
  };
};
console.log("closure");
let store = clos(2, 3, 6);
console.log(store.getPlus2(2));
console.log(store.getPlus3(5, 3));
/////////////////////infinite currying////////////////////
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log("infinite currying");
console.log(add(3)(4)(5)(10)(20)());
////////////////memomize/////////
let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
// console.log("momomize");
// console.time();
// let sumFunc = calc(150);
// console.log(sumFunc);
// console.timeEnd();
const memomizeFunc = (func) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("calculating first time");
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
};
console.log("momomize");
console.time();
let sumFunc = memomizeFunc(calc);
console.log(sumFunc(150));
console.timeEnd();
/////////////debouncing

// const debouncing = (func, delay) => {
//   return function (...args) {
//     let timer;
//     if (timer) {
//       return clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };
// const onScroll = () => {
//   console.log("scroll ");
// };
// console.log("debouncing");
// const scrollingEvent = debouncing(onScroll, 1000);
// window.addEventListener("scroll", scrollingEvent);
// // console.log(scrollingEvent);
// ////////////throttle
// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }
// function onResize() {
//   console.log("Window resized");
// }
// console.log("throttle");
// const throttledResize = throttle(onResize, 300);

// window.addEventListener("resize", throttledResize);
// const lArr = [1, 2, 2, 1, 5];
// let first = -Infinity;
// let sec = -Infinity;
// for (const num of lArr) {
//   if (num > first) {
//     console.log("first calling");

//     sec = first;
//     first = num;
//   } else if (num > sec && num < first) {
//     console.log("sec calling");
//     sec = num;
//   }
//   console.log("num ", num);
//   console.log(" first", first);
//   console.log(" sec", sec);
// }
// console.log("finall first", first);
// console.log("finall sec", sec);
console.log("true false");
isNaN("Hello"); // Returns true
isNaN(345); // Returns false
isNaN("1"); // Returns false, since '1' is converted to Number type which results in 0 ( a number)
isNaN(true); // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false); // Returns false
isNaN(undefined); // Returns true
