const { construct2DArray } = require('./sol.js');

// Test case 1: Example 1
const original1 = [1,2,3,4];
const m1 = 2, n1 = 2;
console.log("Test case 1:");
console.log(construct2DArray(original1, m1, n1)); // Expected: [[1,2],[3,4]]

// Test case 2: Valid 1x3
const original2 = [1,2,3];
const m2 = 1, n2 = 3;
console.log("Test case 2:");
console.log(construct2DArray(original2, m2, n2)); // Expected: [[1,2,3]]

// Test case 3: Impossible dimensions
const original3 = [1,2,3,4];
const m3 = 2, n3 = 3;
console.log("Test case 3:");
console.log(construct2DArray(original3, m3, n3)); // Expected: []

// Test case 4: Another valid case
const original4 = [1,2,3,4,5,6];
const m4 = 3, n4 = 2;
console.log("Test case 4:");
console.log(construct2DArray(original4, m4, n4)); // Expected: [[1,2],[3,4],[5,6]]
