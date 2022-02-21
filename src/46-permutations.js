/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let subResult = [];
    let result = [];
    
    var f = function(sub, nums){
        if (sub.length === nums.length) {
            let temp = [].concat(sub);
            result.push(temp);
            return;
        }
    
        for (let i of nums){
            if (!sub.includes(i)){
                sub.push(i);
                f(sub,nums);
                sub.pop();
            }
        }
    }
    
    f(subResult, nums);
    return result;
};




// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function(nums) {
//   const output = [];
//   /**
//    * The goal is break down the problem by finding permutations in subarrays.
//    * So we will maintain a subarray of fixed elements and a subarray for 
//    * exploring permutations.
//    *
//    *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
//    * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
//    *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
//    *                                 [2, 3], [1]    [2, 3, 1]
//    *                                 [3, 1], [2]    [3, 1, 2]
//    *                                 [3, 2], [1]    [3, 2, 1]                                 
//    */
//   const dfs = (curr, rest) => {
//     // base case. Found a permutation because there's nothing else to explore.
//     if (rest.length === 0) {
//       output.push(curr);
//       return;
//     }
//     for (let i = 0; i < rest.length; i++) {
//       dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
//     }
//   }
//   dfs([], nums);
  
//   return output;
// };