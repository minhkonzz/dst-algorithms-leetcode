/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[][]} coordinates
 * @return {boolean}
 */

function isCollinear(p1, p2, p3) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  return (y2 - y1) * (x3 - x2) == (y3 - y2) * (x2 - x1);
}

const checkStraightLine = function (coordinates) {
  const n = coordinates.length;
  if (n < 3) return true;
  let p1 = 0, p2 = 1, p3 = 2;
  while (p3 < n) {
    if (!isCollinear(coordinates[p1++], coordinates[p2++], coordinates[p3++]))
      return false;
  }
  return true;
};

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])) // true
console.log(checkStraightLine([[4,2], [8,6], [14,12]])) // true
