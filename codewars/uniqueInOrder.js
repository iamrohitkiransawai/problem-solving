/**
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of 
 * items without any elements with the same value next to each other and preserving the original order of elements.
 * For ex.
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 * @see https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
 * /

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let prevVal = null;
  let arrayOfStrVal = Array.isArray(iterable)
    ? [...iterable]
    : iterable.split("");
  return arrayOfStrVal
    .map((value) => {
      if (prevVal === null || prevVal !== value) {
        prevVal = value;
        return value;
      } else if (prevVal === value) {
        return null;
      }
    })
    .filter((currVal) => currVal !== null);
};

uniqueInOrder("AAAABBBCCDAABBB");
uniqueInOrder("ABBCcAD");
uniqueInOrder([1, 2, 2, 3, 3]);

/**
 * One liner solution
 * return [...iterable].filter((a, i) => a !== iterable[i-1])
 */
