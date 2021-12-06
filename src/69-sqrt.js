/**

@param {number} x

@return {number}
*/
var mySqrt = function(x) {
    if (x === 1) return 1;
    
    let start = 1;
    let end = x/2;
    let result = null;
    
    while (start <= end){
    let middle = Math.floor((end + start)/2);
    if (middle * middle === x) return middle;
    else if (middle * middle > x) end = middle - 1;
    else{
    start = middle + 1;
    result = middle;
    }
    console.log (start, middle, end, x)
    }
    
    return result;
    };
    
    // var mySqrt = function (x) {
    // let left = 1;
    // let right = x;
    // let ans = null;
    // while (left <= right) {
    // let mid = parseInt((left + right) / 2);
    
    // if (mid * mid === x) return mid;
    // if (mid * mid > x) {
    // right = mid - 1;
    // } else {
    // ans = mid;
    // left = mid + 1;
    // }
    // }
    // return ans;
    // };