/**

@param {number[]} nums

@return {number}
*/
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums.splice(i, nums.lastIndexOf(nums[i]) - i);
  }

  return nums.length;
};
