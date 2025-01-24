const isPalindromeNumber = function (x) {
   if (x < 0 || (x > 9 && x < 101 && x % 11 != 0)) return false;
   const numStr = x + "";
   if (x < 1000) return numStr.at(0) == numStr.at(-1);
   let l = 1, r = numStr.length - 2;
   while (l < r) {
      if (numStr[l] != numStr[r]) return false;
      if (r == l + 1) break;
      ++l;
      --r;
   }
   return true;
};
