/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root)  return false;
    return searchPathSum(root, targetSum - root.val);
};

var searchPathSum = (r,s) => {
    if (!r.left && !r.right)    return s === 0;
    else if (!r.left) return searchPathSum(r.right, s-r.right.val);
    else if (!r.right) return searchPathSum(r.left, s-r.left.val);
    return searchPathSum(r.left, s-r.left.val) || searchPathSum(r.right, s-r.right.val);
}
