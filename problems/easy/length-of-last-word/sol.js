/**
 * @param {string} s
 * @return {number}
*/

const lengthOfLastWord = function (s) {
   let len = 0, i = s.length - 1;
   while (true) {
      const si = s[i];
      if (len > 0 && si == " ") break;
      if (si != " ") ++len;
      if (i == 0) break;
      --i;
   }
   return len;
};
