const isPalindromeNumber = function (x) {
   if (x < 0) return false;
   if (x < 10) return true;
   let r = x, p = 0, l = 0;
   while (r !== 0) {
      l = r % 10;
      r = Math.floor(r / 10);
      p = p * 10 + l;
   }
   return x === p;
};
