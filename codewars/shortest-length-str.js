/**
 * @see https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
 */

function findShort(s) {
  return s.split(" ").reduce((acc, currVal) => {
    if (currVal.length < acc) acc = currVal.length;
    return acc;
  }, Number.POSITIVE_INFINITY);
}
