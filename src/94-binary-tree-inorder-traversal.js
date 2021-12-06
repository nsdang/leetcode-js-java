/**

Definition for a binary tree node.
function TreeNode(val, left, right) {
this.val = (val===undefined ? 0 : val)
this.left = (left===undefined ? null : left)
this.right = (right===undefined ? null : right)
}
/
/*
@param {TreeNode} root
@return {number[]}
*/
var inorder = [];
var inorderTraversal = function(root) {
inorder = [];
if (!root || root.length === 0) return inorder;
traversal(root);
return inorder;
};
var traversal = function(root) {
if (!root) return;
traversal(root.left);
inorder.push(root.val);
traversal(root.right);
}