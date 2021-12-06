/**

@param {number[]} nums1
@param {number} m
@param {number[]} nums2
@param {number} n
@return {void} Do not return anything, modify nums1 in-place instead.
*/
// var merge = function(nums1, m, nums2, n) {
// let index = 0;
// let temp = [];
// for (let i = 0; i < m; i++){
// temp[i] = nums1[i];
// }
// for (let i = m; i < m+n; i++) {
// temp[i] = nums2[index];
// index++;
// }
// temp = temp.sort((a,b) => a-b);
// for (let i = 0; i < m+n; i++){
// nums1[i] = temp[i];
// }
// };
var merge = function(nums1, m, nums2, n) {
    let lastInsertI = m+n-1;
    m--;
    n--;
    
    while (lastInsertI >= 0){
        if (m < 0){
            nums1[lastInsertI] = nums2[n];
            n--;
        } else if (n < 0){
            return;
        } else if (nums1[m] > nums2[n]){
            nums1[lastInsertI] = nums1[m];
            m--;
        } else {
            nums1[lastInsertI] = nums2[n];
            n--;
        }
        lastInsertI--;
        console.log(nums1)
    }
    }