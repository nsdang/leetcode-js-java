/*************************** 
Problem:

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

****************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    //sort the nums array
    nums.sort(function(a, b){return a-b});
    var sumArr = [];

    //main logic
    // for loop with three pointers
    // i from index 0 -> n-1
    // j from index i+1 -> <k
    // k from index n-1 -> >j
    for (var i = 0; i < nums.length-2; i++){
        let j = i+1;
        let k = nums.length-1;
        let sum = nums[i]+nums[j]+nums[k];

        while (j < k){
            let sum = nums[i]+nums[j]+nums[k];

            if (sum == target) return sum;
            else if (sum < target)  j++;
            else    k--;

            sumArr.push(sum);
        }
    }

    //Loop through sumArr to find the sum closest to target
    let result = sumArr[0];
    let closet = Math.abs(target - sumArr[0]);
    for (let i = 0; i < sumArr.length; i++) {
      if (Math.abs(target - sumArr[i]) < closet) {
        closet = Math.abs(target - sumArr[i]);
        result = sumArr[i];
      }
    }
    return result;
};

