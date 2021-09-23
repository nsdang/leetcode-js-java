/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    if (nums.length < 4 || nums.length > 200) return [];

    const result = [];

    nums.sort(function(a, b){return a-b});

    for (var i = 0; i < nums.length-3; i++){
        if (i !== 0 && nums[i] === nums[i-1]) continue;

        let j = i+1;
        let k = nums.length-1;

        while (j < k){
            let sum = nums[i]+nums[j]+nums[k];

            if (sum == target) {
                result.push([nums[i],nums[j],nums[k]]);
                j++;
            }
            else if (sum < target)  j++;
            else    k--;
        }
    }
    console.log(result)
    return result;
};

fourSum([1,0,-1,0,-2,2],0)