/**
 * Time Complexity:
 * Space Complexity:
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

const nextGreatestLetter = function (letters, target) {
  for (const letter of letters) {
    if (letter > target) return letter;
  }
  return letters[0];
};

console.log(nextGreatestLetter(["c","f","j"], "a")) // "c"
console.log(nextGreatestLetter(["c","f","j"], "c")) // "f"
console.log(nextGreatestLetter(["x","x","y","y"], "z")) // "x"
