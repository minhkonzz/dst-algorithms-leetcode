/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const areAlmostEqual = function (s1, s2) {
  let mismatchingCharacters = 0,
    N = s1.length,
    charactersFreq = Array(26).fill(0); // Frequency array for lowercase letters

  if (s1 === s2) {
    // If both strings are already equal, return true
    return true;
  }

  for (let i = 0; i < N; i++) {
    const charCode1 = s1.charCodeAt(i) - 97, // Convert character to 0-based index
      charCode2 = s2.charCodeAt(i) - 97;

    if (s1[i] !== s2[i]) {
      // Count positions where characters mismatch
      mismatchingCharacters++;
    }

    charactersFreq[charCode1]++; // Increase count for s1[i]
    charactersFreq[charCode2]--; // Decrease count for s2[i]
  }

  for (let i = 0; i < 26; i++) {
    if (charactersFreq[i] !== 0) {
      // If frequency mismatch, return false
      return false;
    }
  }

  return mismatchingCharacters === 2; // Exactly two mismatches allow one swap
};
