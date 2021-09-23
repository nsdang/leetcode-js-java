/**

@param {number[]} nums

@param {number} target

@return {number}
*/
var searchInsert = function (nums, target) {
  if (target < nums[0]) return 0;
  else if (target > nums[nums.length - 1]) return nums.length;

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) end = middle - 1;
    else start = middle + 1;
  }
  return start;
};
