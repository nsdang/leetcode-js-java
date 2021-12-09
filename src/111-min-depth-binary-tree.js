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
 * @return {number}
 */
 var minDepth = function(root) {
    // return getDepth(root,0);
    if (!root) return 0;
    return getDepth(root, 1);
};

var getDepth = (r, d) => {
    if (!r.left && !r.right) return d;
    else if (!r.left) return getDepth(r.right, d+1);
    else if (!r.right) return getDepth(r.left, d+1);
    return Math.min(getDepth(r.left, d+1), getDepth(r.right, d+1))
}

// var minDepth = function(root) {
//     if (!root) return 0;
//     let arrNode = [];
//     arrNode.push(root);
//     let minD = 0;
//     while (arrNode.length > 0){
//         minD++;
//         let size = arrNode.length;
//         for (let i = 0; i < size; i++){
//             var node = arrNode.shift();
//             if (!node.left && !node.right)  return minD;
//             if (node.left) arrNode.push(node.left);
//             if (node.right) arrNode.push(node.right);
//         }
//     }
//     return minD;
// }