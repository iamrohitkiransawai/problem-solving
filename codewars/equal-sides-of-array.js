/**
 *
 * @see https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
 */

function findEvenIndex(arr) {
  //Code goes here!

  var left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

/**
 * One line solution is given below. Please check use of slice method
 */

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(
  findEvenIndex([
    8995, -5140, 6308, -212, 134, -1044, -8247, -5999, -951, -9175, 2994, -9737,
    1932, -330, -5508, 3450, 7485, -7267, -7363, -3521, -1767, -7125, 1912,
    -4068, 6501, -4120, -9318, -8799, 9033, -9214, 217, 1766, 9549, 8938, 2501,
    -7818, 4420, 2674, -1830, 5350, 959, 5006, -7000, 4083, -7533, 7441, -9179,
    3320, 6714, -2957, -9577, -5856, -9928, -165, 3666, 8839, -7621, 6707, 1257,
    -4126, 6264, 7078, -5051, -9176, -1814, -5404, -1862, -905, 928, 5281, 5219,
    -1450, -1488, -7544, -5412, -5541, -6402, -1585, 3863, -2540, 334, 3164,
    -61, 3383, 5762, 5174, -9518, -9666, -4954, 4800, 6781, 5070, 650, -6913,
    -3626, 3120, 5892, -9278, -3864, -4939, -9050, -799, 795, 8557, 3293, -6781,
    4191, -8063, 9581, 3092, -4547, 5698, -73946,
  ])
);
