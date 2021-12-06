/**

Definition for a binary tree node.
function TreeNode(val, left, right) {
this.val = (val===undefined ? 0 : val)
this.left = (left===undefined ? null : left)
this.right = (right===undefined ? null : right)
}
*/
var cbt = (nums, start, end) => {
    if (start > end) return null;
    let middle = start + Math.ceil((end-start)/2);
    return node = new TreeNode(nums[middle], cbt(nums, start, middle-1),cbt(nums, middle+1, end));
    }
    
    /**
    
    @param {number[]} nums
    @return {TreeNode}
    */
    var sortedArrayToBST = function(nums) {
    if (nums.length <= 0) return null;
    return cbt(nums, 0, nums.length-1);
    };