const myAtoi = function (s) {
   let sign = 1;
   let i = 0;
   let num = 0;

   while (s[i] === " ") {
      i++;
   }

   if (s[i] === "-" || s[i] === "+") {
      sign = s[i] === "-"? -1 : 1;
      i++;
   }

   while (i < s.length && s[i] >= "0" && s[i] <= "9") {
      num = num * 10 + (s[i] - "0");
      i++;

      if (num > Math.pow(2, 31) - 1) {
         return sign === 1? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
      }
   }

   return num * sign;
}

console.log(typeof myAtoi("-042"));
