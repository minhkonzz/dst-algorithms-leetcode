/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let ans,
      l = 1,
      r = n,
      mid = Math.floor(r / 2);
    while (true) {
      ans = isBadVersion(mid);
      if (!ans && isBadVersion(mid + 1)) return mid + 1;
      if (ans && !isBadVersion(mid - 1)) return mid;
      if (!ans) {
        l = mid;
        mid = mid + Math.floor((mid + r) / 2);
      } else {
        right = mid;
        mid = Math.floor((l + mid) / 2);
      }
    }
  };
};
