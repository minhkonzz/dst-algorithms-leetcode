/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

const findDuplicates = function(nums) {
    if (nums.length < 2) return [] // edge case
    const res = []
    for (let i = 0; i < nums.length; ++i) {
        const p = Math.abs(nums[i])
        const index = p - 1
        if (nums[index] < 0) res.push(p)
        else nums[index] = -nums[index]
    }
    return res
};