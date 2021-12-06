/**

@param {number} n
@return {number}
*/
// Bottom Up
var climbStairs = function(n) {
    let memo = [];
    memo[1] = 1;
    memo[2] = 2;
    
    for (let i = 3; i <= n; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
    console.log (memo);
    return memo[n];
    };
    
    // Top Down
    // let memo = [];
    // var climbStairs = (n) => {
    // if (n <= 2) return n;
    // else if (memo[n] !== undefined) return memo[n];
    // memo[n] = climbStairs(n-1) + climbStairs(n-2);
    // return memo[n];
    // }