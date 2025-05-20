/**
 * Time Complexity: O(n * op1 * op2)
 * Space Complexity: O(op1 * op2)
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */

const minArraySum = function (nums, k, op1, op2) {
  const originalSum = nums.reduce((a, b) => a + b, 0);
  if (op1 == 0 && op2 == 0) return originalSum;

  // Khởi tạo DP với giá trị -Infinity, trừ dp[0][0] = 0
  const dp = Array.from({ length: op1 + 1 }, () =>
    Array.from({ length: op2 + 1 }, () => -Infinity)
  );
  dp[0][0] = 0;

  for (const x of nums) {
    const options = [];
    // Option 0: Không làm gì
    options.push({ cost1: 0, cost2: 0, gain: 0 });

    // Option 1: Áp dụng Operation 1
    const afterOp1 = Math.ceil(x / 2);
    options.push({ cost1: 1, cost2: 0, gain: x - afterOp1 });

    // Option 2: Áp dụng Operation 2 (nếu x >= k)
    if (x >= k) {
      const afterOp2 = x - k;
      options.push({ cost1: 0, cost2: 1, gain: x - afterOp2 });

      // Option 3: Operation 2 rồi Operation 1
      const afterOp2ThenOp1 = Math.ceil((x - k) / 2);
      options.push({ cost1: 1, cost2: 1, gain: x - afterOp2ThenOp1 });
    }

    // Option 4: Operation 1 rồi Operation 2 (nếu sau Op1 >= k)
    const afterOp1ForOption4 = Math.ceil(x / 2);
    if (afterOp1ForOption4 >= k) {
      const afterOp1ThenOp2 = afterOp1ForOption4 - k;
      options.push({ cost1: 1, cost2: 1, gain: x - afterOp1ThenOp2 });
    }

    // Cập nhật DP theo thứ tự ngược để tránh ghi đè
    const currentDp = dp.map((row) => [...row]);
    for (let a = op1; a >= 0; --a) {
      for (let b = op2; b >= 0; --b) {
        if (currentDp[a][b] === -Infinity) continue;
        for (const option of options) {
          const newA = a + option.cost1;
          const newB = b + option.cost2;
          if (newA > op1 || newB > op2) continue;
          if (dp[newA][newB] < currentDp[a][b] + option.gain) {
            dp[newA][newB] = currentDp[a][b] + option.gain;
          }
        }
      }
    }
  }

  // Tìm giá trị giảm tối đa có thể
  let maxGain = 0;
  for (let a = 0; a <= op1; ++a) {
    for (let b = 0; b <= op2; ++b) {
      maxGain = Math.max(maxGain, dp[a][b]);
    }
  }

  return originalSum - maxGain;
};

console.log(minArraySum([2,8,3,19,3], 3, 1, 1)) // 23
console.log(minArraySum([2,4,3], 3, 2, 1)) // 3
console.log(minArraySum([2, 0], 2, 1, 2)) // 0
