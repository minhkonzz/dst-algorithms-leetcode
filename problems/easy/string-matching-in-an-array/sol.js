/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {string[]} words
 * @return {string[]}
 */

const stringMatching = function(words) {
   const joined = words.join()
   return words.filter(w => joined.split(w).length > 2)
};

console.log(stringMatching(["mass","as","hero","superhero"]));