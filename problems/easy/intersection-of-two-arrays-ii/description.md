Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**Follow up:**

- What if the given array is already sorted? How would you optimize your algorithm?
    - If the arrays are already sorted, we can use a two-pointer approach which would be more efficient with O(n + m) time complexity and O(1) space (excluding the output array).
- What if `nums1`'s size is small compared to `nums2`'s size? Which algorithm is better?
    - If **`nums1`** is significantly smaller than **`nums2`**, we can use a hash map to count the frequency of elements in the smaller array and then iterate through the larger array to find intersections. This would be more space-efficient.
- What if elements of `nums2` are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
    - If nums2 is too large to fit in memory, we can:
        - Sort nums1 and then process num2 in chunks, using binary search to find matches in the sorted .
        - Alternatively, if we can sort both arrays, we can use an external sort and then use the two-pointer approach.