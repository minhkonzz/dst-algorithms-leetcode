/**
 * Time Complexity: O(m * n * 4^k) - 260ms - Beats 91.06%
 * Space Complexity: O(k) - 54.60mb - Beats 49.49%
 * k: length of the word
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const countChars = function (chars) {
  const map = {};
  for (const e in chars) {
    map[e] = (map[e] || 0) + 1;
  }
  return map;
};

const search = function (board, word, row, col, index, m, n) {
  if (index == word.length) return true;
  if (
    row < 0 ||
    col < 0 ||
    row >= m ||
    col >= n ||
    board[row][col] != word[index]
  )
    return false;
  let temp = board[row][col];
  board[row][col] = "#";

  if (
    search(board, word, row + 1, col, index + 1, m, n) ||
    search(board, word, row - 1, col, index + 1, m, n) ||
    search(board, word, row, col + 1, index + 1, m, n) ||
    search(board, word, row, col - 1, index + 1, m, n)
  )
    return true;

  board[row][col] = temp;
  return false;
};

const exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  /* ==== Edge cases ==== */
  if (word.length > m * n) return false;

  const charsCountInWord = countChars(word);
  const chars = Object.keys(charsCountInWord);
  const charsCountInBoard = countChars(board.flat());

  for (const e in chars) {
    if (charsCountInBoard[e] < charsCountInWord[e]) return false;
  }
  /* ===================== */

  for (let row = 0; row < m; ++row) {
    for (let col = 0; col < n; ++col) {
      if (search(board, word, row, col, 0, m, n)) return true;
    }
  }
  return false;
};
