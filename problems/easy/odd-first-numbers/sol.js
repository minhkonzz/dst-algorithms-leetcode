function solve1(arr) {
   return arr.filter(function(e) {
       let _e = Math.abs(e);
       while (true) {
           if (_e < 10) break;
           _e /= 10;
       }
       return Math.trunc(_e) % 2 !== 0; 
   });
}

function solve2(arr) {
   return arr.filter(function(e) {
     return +(Math.abs(e).toFixed(0).at(0)) % 2 !== 0; 
   });
}

console.log(solve1([123, 2000, 24, 0, 12, 9999, 56]));