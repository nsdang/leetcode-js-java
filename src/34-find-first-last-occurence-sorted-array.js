/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    return [f(nums,target,true), f(nums,target,false)];
};

var f = function (nums, target, isFirst){
    let start = 0;
    let end = nums.length - 1;
    let result = -1;
    while (start <= end){
        let mid = Math.floor((start+end)/2);
        
        if (nums[mid] < target) start = mid + 1;
        else if (nums[mid] > target) end = mid - 1;
        else {
            result = mid;
            if (isFirst)    end = mid - 1;
            else    start = mid + 1;
        }
    }
    return result;
}