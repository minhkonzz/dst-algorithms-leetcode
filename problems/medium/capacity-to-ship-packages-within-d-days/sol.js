function solve(weights, days) {
   function isValidTime(weights, days, cap) {
      let totalDays = 1;
      let _cap = 0;
      for (let i = 0; i < weights.length; i++) {
         _cap += weights[i];
         if (_cap > cap) {
            totalDays++;
            _cap = weights[i];
         }
      }
      return totalDays <= days;
   }

   let { l, r } = weights.reduce((acc, cur) => ({ l: Math.max(acc.l, cur), r: acc.r + cur }), { l: 0, r: 0 });
   console.log(l, r);   
   while (l < r) {
      const mid = l + (r - l) / 2;
      console.log(mid)
      if (isValidTime(weights, days, mid)) r = mid;
      else l = mid + 1;
   }
   return l;
}

console.log(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16], 5));

