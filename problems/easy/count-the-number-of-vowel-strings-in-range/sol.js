/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

const vowelStrings = function (words, left, right) {
  const vowelChars = new Set("aeiou");
  let res = 0;
  while (left <= right) {
    const current = words[left];
    if (vowelChars.has(current.at(0)) && vowelChars.has(current.at(-1))) ++res;
    ++left;
  }
  return res;
};

console.log(vowelStrings(["are","amy","u"], 0, 2)) // 2
console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4)) // 3
