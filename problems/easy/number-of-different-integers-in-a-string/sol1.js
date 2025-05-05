/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} word
 * @return {number}
 */

const numDifferentIntegers = function (word) {
  word = word.replace(/\D/g,' ').match(/\d+/g);
  if (!word) return 0;
  const set = new Set();
  for (const num of word) {
    set.add(BigInt(num));
  }
  return set.size;
};

console.log(numDifferentIntegers("a123bc34d8ef34")); // 3
console.log(numDifferentIntegers("0a0")); // 1
console.log(numDifferentIntegers("gi851a851q8510v")); // 2
console.log(numDifferentIntegers("4w31am0ets6sl5go5ufytjtjpb7b0sxqbee2blg9ss")); // 8
