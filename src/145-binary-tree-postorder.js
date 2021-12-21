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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    var result = [];
    postTra(root, result);
    return result;
};


var postTra = (root, result) => {
    if (root){
        postTra(root.left, result);
        postTra(root.right, result); 
        result.push(root.val);
    }
}