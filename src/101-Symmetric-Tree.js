/**

Definition for a binary tree node.
function TreeNode(val, left, right) {
this.val = (val===undefined ? 0 : val)
this.left = (left===undefined ? null : left)
this.right = (right===undefined ? null : right)
}
*/
var check = (root1, root2) => {
    if (!root1 && !root2) return true;
    else if (!root1 || !root2) return false
    else if (root1.val !== root2.val) return false;
    
    var val1 = check(root1.left, root2.right);
    if (!val1) return false;
    
    var val2 = check(root1.right, root2.left);
    return val1 && val2;
    }
    
    /**
    
    @param {TreeNode} root
    @return {boolean}
    */
    var isSymmetric = function(root) {
    return check(root.left, root.right);
    };