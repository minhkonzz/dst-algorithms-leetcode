/**
 * Time Complexity: O(WORDS_LENGTH * MAX_WORD_LENGTH)
 * Space Complexity: O(1)
 * @param {string[]} words
 * @return {string}
 */

function isPalindromicString(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] != s[r]) return false;
    ++l;
    --r;
  }
  return true;
}

const firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindromicString(word)) return word;
  }
  return "";
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"])) // "ada"
console.log(firstPalindrome(["notapalindrome","racecar"])) // "racecar"
