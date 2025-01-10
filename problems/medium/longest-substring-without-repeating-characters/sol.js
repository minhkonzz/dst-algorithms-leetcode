/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstringSimple = function(s) {
   let i = 0, max = 0, tstr = "";
   while (i < s.length) {
      const _i = tstr.indexOf(s[i]);
      if (_i > -1) {
         const _l = tstr.length;
         tstr = tstr.slice(_i + 1);
         max = Math.max(max, _l);
      }
      tstr += s[i++];
   }
   return max;
};

const lengthOfLongestSubstringUsingHashMap = function(s) {
   const charIndexMap = {}; // Bảng băm để lưu vị trí các ký tự
   let max = 0, start = 0;
   for (let i = 0; i < s.length; i++) {
      if (charIndexMap[s[i]] !== undefined && charIndexMap[s[i]] >= start) {
         start = charIndexMap[s[i]] + 1; // Cập nhật vị trí bắt đầu
      }
      charIndexMap[s[i]] = i; // Cập nhật vị trí của ký tự hiện tại
      max = Math.max(max, i - start + 1); // Tính độ dài chuỗi con
   }
   return max;
};

const lengthOfLongestSubstringUsingASCIIArr = function(s) {
   const charIndexMap = new Array(128).fill(-1); // Mảng để lưu vị trí ký tự cho ASCII
   let max = 0, start = 0, i = 0;
   while (i < s.length) {
      const charCode = s.charCodeAt(i); // Lấy mã ký tự ASCII
      if (charIndexMap[charCode] >= start) {
         start = charIndexMap[charCode] + 1; // Cập nhật vị trí bắt đầu
      }
      charIndexMap[charCode] = i; // Cập nhật vị trí ký tự hiện tại
      max = Math.max(max, i - start + 1); // Tính độ dài chuỗi con
      ++i;
   }
   return max;
};

console.time('myTimer');
console.log(lengthOfLongestSubstringUsingASCIIArr("pwwkew"));
console.timeEnd('myTimer');



