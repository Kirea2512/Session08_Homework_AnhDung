// Bài 1
// let n = +prompt("Nhập số nguyên dương");
// for (let i = 1; i <= n; i = i + 1) {
//   console.log(i);
// }

// Bài 2
// let n = +prompt("Nhập số nguyên dương");
// let mul = 1;
// for (let i = 1; i <= n; i = i + 1) {
//   mul = mul * i;
// }
// console.log(mul);

// Bài 3
// let n = 100;
// for (let i = 1; i <= n; i = i + 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// Bài 4
// let a = +prompt("Nhập số nguyên dương a");
// let b = +prompt("Nhập số nguyên dương b");
// for (let i = 1; i <= a; i = i + 1) {
//   if (i % b === 0) {
//     console.log(i);
//   }
// }

// Bài 5
// let r = Math.floor(Math.random() * 10);
// while (true) {
//   let n = +prompt("Nhập số ngẫu nhiên từ 1 đến 10");
//   if (n <= 10) {
//     if (n === r) {
//       console.log("Đúng");
//       break;
//     } else if (n < r) {
//       console.log("Nhỏ hơn");
//     } else {
//       console.log("Lớn hơn");
//     }
//   } else {
//     break;
//   }
// }

// Bài 6
// let i, n;
// for (i = 1; i <= 9; i = i + 1) {
//   for (n = 2; n <= 9; n = n + 1) {
//     let a = i * n;
//     console.log(i + "*" + n + "=" + a);
//   }
//   console.log("------------");
// }

// Bài 7
// while (true) {
//   let n = +prompt("Nhập vào một số nguyên dương bất kì");
//   let sum = 0;
//   for (let i = 1; i < n; i = i + 1) {
//     if (n % i === 0) {
//       sum = sum + i;
//     }
//   }
//   if (sum === n) {
//     console.log("Là số hoàn hảo");
//   } else {
//     console.log("Không phải là số hoàn hảo");
//   }
// }

// Bài 8
// let n = +prompt("Nhập vào một số nguyên dương bất kì");
// let check = true;
// if (n < 2) {
//   console.log("vui lòng điền số lớn hơn 1");
// } else {
//   for (let i = 2; i < n; i = i + 1) {
//     if (n % i === 0) {
//       check = false;
//       break;
//     }
//   }
// }
// if (check == true) {
//   console.log("Đây là số nguyên tố");
// } else {
//   console.log("Đây không phải là số nguyên tố");
// }

// Bài 9
// let n = +prompt("Nhập vào một số nguyên dương bất kì");
// let a = 0;
// let b = 1;
// console.log("Dãy fibonacci:");
// for (let i = 0; i <= n; i = i + 1) {
//   console.log(a);
//   temp = a + b;
//   a = b;
//   b = temp;
// }
