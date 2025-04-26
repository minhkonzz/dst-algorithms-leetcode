/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {number}
 */

const countSegments = function (s) {
  if (!s) return 0;
  return s.split(" ").filter(String).length;
};

console.log(countSegments("Hello, my name is John")) // ["Hello,", "my", "name", "is", "John"] => 5 
console.log(countSegments("   ")) // 0
console.log(countSegments("")) // 0