const isPalindrome = function (s) {
   let l = 0;
   let r = s.length - 1;
   while (l < r) {
      if (s[l] !== s[r]) return false;
      ++l;
      --r;
   }
   return true;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
   let l = 0, r = 1;
   let res = "";

   if (s.length === 1) return s;

   while (l + res.length < s.length) {
      const sub = s.substring(l, r);
      if (isPalindrome(sub) && sub.length > res.length) res = sub;

      if (r === s.length) {
         ++l;
         r = l + 1;
      } else 
         ++r;
  }

  return res;
};

// Ví dụ sử dụng
const input = "babad";
const result = longestPalindrome(input);
console.log(result);
