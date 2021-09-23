/**

@param {number[]} nums

@return {number}
*/
var maxSubArray = function (nums) {
  let globalMaxSum = nums[0];
  let localMaxSum = nums[0];

  // We start the for loop at index 1 because localMaxSum + globalMaxSum has already been solved!
  // Now we can actually take the previous solution and apply it to index 1.
  for (let i = 1; i < nums.length; i++) {
    // We keep track of the previous solution (localMaxSum[i - 1]) and we memoization it by storing it in localMaxSum
    // As we iterate the array, do we keep nums[i] or do we keep accumlating our memoized solution?
    localMaxSum = Math.max(nums[i], localMaxSum + nums[i]);
    // Greedy algorithm, compare local solution to the global solution
    globalMaxSum = Math.max(localMaxSum, globalMaxSum);
  }

  return globalMaxSum;
};
