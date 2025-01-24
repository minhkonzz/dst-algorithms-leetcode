const climbStairs = function (n) {
   if (n == 1) return 1;
   let a = 1, b = 1, next;
   for (let i = 1; i < n; i++) {
      next = a + b;
      a = b;
      b = next;
   }
   return next;
};
