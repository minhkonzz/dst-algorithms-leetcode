const countNums = function (numStr) {
   let c, rs = "", count = 1, i = 0;
   while (i < numStr.length) {
      c = numStr[i];
      if (c === numStr[i + 1]) ++count;
      else {
         rs += `${count}${c}`;
         count = 1;
      }
      ++i;
   }
   return rs;
};

const countAndSay = function (n) {
   let prev = "1", i = 1;
   while (i < n) {
      prev = countNums(prev);
      ++i;
   }
   return prev;
};

console.log(countAndSay(4));