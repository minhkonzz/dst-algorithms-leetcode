/**
* @param {Array} c (cluster)
* @return {boolean}
*/

var ivc = function (c) {
   const c_len = c.length;
   let i = 0;
   let l = 0;
   let r = c_len - 1;
   while (i < c_len / 2) {
      if (c[l] !== c[r])
         return false;
      i++;
      l += 1;
      r -= 1;
   }
   return true;
}

var ge = function (s, cur_c) {
   return s + cur_c * 4;
}

/**
* @param {Array} nodes
* @return {boolean}
*/
var isSymmetric = function (nodes) {
   const rl = nodes.length;
   if (rl < 3)
      return false;
   if (nodes[1] !== nodes[2])
      return false;
   let cur_c = 1;
   let s = 3;
   let e = ge(s, cur_c);
   while (e <= rl) {
      const c = nodes.slice(s, e);
      if (!ivc(c))
         return false;
      s = e;
      e = ge(s, cur_c++);
   }
   return true;
};

console.log(isSymmetric([1, 2, 2, null, 3, null, 3])); // false
