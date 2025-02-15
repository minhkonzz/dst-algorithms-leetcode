const letterCombinations = (digits) => {
  if (digits.length === 0) return [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const result = [];
  const backtrack = (index, path) => {
    if (path.length === digits.length) {
      result.push(path.join(""));
      return;
    }
    const digit = digits[index];
    const letters = map[digit];
    for (const letter of letters) {
      path.push(letter);
      backtrack(index + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return result;
};
