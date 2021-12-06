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
@return {boolean}
*/
/* Solution 1 /
/
var isBalanced = function(root){
if(!root) return true;
if (Math.abs(getHeight(root.left)-getHeight(root.right)) <= 1){
console.log(getHeight(root.left),getHeight(root.right));
return isBalanced(root.left) && isBalanced(root.right);
}
return false;
}

var getHeight = (root) => {
if(!root) return 0;
let leftHeight = getHeight(root.left);
let rightHeight = getHeight(root.right);
return Math.max(leftHeight, rightHeight)+1;
}
/
/ Solution 2 */
var isBalance = true;

var isBalanced = function(root) {
isBalance = true;
isHeightBalanced(root);
return isBalance;
};

var isHeightBalanced = (root) => {
if (root === null) return 0;
let leftHeight = isHeightBalanced(root.left);
let rightHeight = isHeightBalanced(root.right);
if (Math.abs(leftHeight - rightHeight) > 1){
isBalance = false;
}
return Math.max(leftHeight, rightHeight) + 1;
}