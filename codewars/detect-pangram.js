/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram.
 * Return True if it is, False if not. Ignore numbers and punctuation.
 * @see https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 */

function isPangram(string) {
  //   let isAlpha = /^[a-z]$/i;
  const allChars = string
    .toUpperCase()
    .split("")
    .reduce((acc, currVal) => {
      let charCodeVal = currVal.charCodeAt();
      if (charCodeVal >= 65 && charCodeVal <= 90) {
        if (acc[currVal]) {
          acc[currVal] += 1;
        } else {
          acc[currVal] = 1;
        }
        return acc;
      }
    }, {});

  console.log(allChars);

  //   console.log(allChars);
}

isPangram("The quick brown fox jumps over the lazy dog.");

/**
 * @todo - In this problem, regular expression works like magic but I'm very weak in Regex. Practice Regex
 * @todo - Another approach was with the help of character codes. but forgot character codes for alphabets
 */
