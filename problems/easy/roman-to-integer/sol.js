/**
 * @param {string} s
 * @return {number}
 */

const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let result = 0;
  let i = 0;

  while (i < s.length) {
    let current = romanNumerals[s[i]];
    let next = romanNumerals[s[i + 1]] || 0;

    if (current >= next) {
      result += current;
      i++;
    } else {
      result += next - current;
      i += 2;
    }
  }

  return result;
};
