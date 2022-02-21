/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // divide and conquer    
    let start = 0;
    let end = nums.length - 1;
    while (start <= end){
        let mid = Math.floor((start+end)/2);
        
        if (target <= nums[end] && nums[mid] > nums[end]){
            start = mid + 1;
        }
        else if (target > nums[end] && nums[mid] < nums[end]){
            end = mid - 1;
        }
        else {
            if (nums[mid] === target)   return mid;
            else if (nums[mid] < target)    start = mid + 1;
            else    end = mid - 1;
        }
    }
    return -1;
};

