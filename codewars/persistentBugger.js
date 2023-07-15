/**
 * Write a function, persistence, that takes in a positive parameter num and returns its
 * multiplicative persistence, which is the number of times you must multiply the digits in num
 * until you reach a single digit.
 *
 * For example (Input --> Output):
 * 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
 * 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
 * 4 --> 0 (because 4 is already a one-digit number)
 *
 * @see https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 */

function persistence(num) {
  //code me
  let count = 0;
  while (num >= 10) {
    num = [...num.toString()].reduce((acc, currVal) => {
      acc = acc * Number(currVal);
      return acc;
    }, 1);
    count += 1;
  }
  return count;
}

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(25));
let num = 999;
const result = num
  .toString()
  .split("")
  .map(Number) // Number is a function and it accepts number. Easy way of converting array of string values to number
  .reduce((acc, curr) => acc * curr)
  .toString();
console.log(result);

/**
 * Optimal solutions
 * function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
 */
