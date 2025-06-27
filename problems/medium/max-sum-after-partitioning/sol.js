/**
 * Time Complexity: O(n * k)
 * Space Complexity: O(n)
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

const maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  const dp = new Array(n + 1).fill(0); // dp[i] là tổng lớn nhất từ arr[0] đến arr[i-1]

  for (let i = 1; i <= n; ++i) {
    let max = 0; // Giá trị lớn nhất trong đoạn hiện tại
    // Thử các đoạn có độ dài từ 1 đến k kết thúc tại i-1
    for (let j = 1; j <= Math.min(k, i); ++j) {
      max = Math.max(max, arr[i - j]); // Lấy max trong đoạn từ i-j đến i-1
      dp[i] = Math.max(dp[i], dp[i - j] + max * j); // Cập nhật dp[i]
    }
  }

  return dp[n];
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)); // 84
console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)); // 83
console.log(maxSumAfterPartitioning([1], 1)); // 1
