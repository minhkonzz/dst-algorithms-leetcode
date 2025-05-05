/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} word
 * @return {number}
 */

var numDifferentIntegers = function (word) {
  if (word.length == 1 && +word[0]) return 1;
  const set = new Set();
  let num = "";
  for (const char of word) {
    if (!Number.isNaN(+char)) {
      if (num[0] == 0) num = "";
      num += char;
      continue;
    }
    if (num) {
      set.add(num);
      num = "";
    }
  }
  if (num) set.add(num);
  return set.size;
};

console.log(numDifferentIntegers("a123bc34d8ef34")); // 3
console.log(numDifferentIntegers("0a0")); // 1
console.log(numDifferentIntegers("gi851a851q8510v")); // 2
console.log(numDifferentIntegers("4w31am0ets6sl5go5ufytjtjpb7b0sxqbee2blg9ss")); // 8
