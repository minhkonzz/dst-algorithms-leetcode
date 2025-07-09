/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */

const findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};
