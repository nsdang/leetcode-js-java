/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 var rotate = function(matrix) {
    transpose(matrix);
    reflect(matrix);
};

var transpose = (matrix) => {
    let n = matrix.length;
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // return matrix;
}

var reflect = (matrix) => {
    let n = matrix.length;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < Math.floor(n/2); j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = temp;
        }
    }
    // return matrix;
}

// var rotate = function(matrix) {
//     let n = matrix.length;
//     for (let i = 0; i < Math.floor((n+1)/2); i++){
//         for (let j = 0; j < Math.floor(n/2); j++){
//             console.log(n-1-j, i);
//             console.log(n-1-i,n-j-1);
//             console.log(j,n-1-i);
//             console.log(i,j);
//             let temp = matrix[n-1-j][i];
//             matrix[n-1-j][i] = matrix[n-1-i][n-j-1];
//             matrix[n-1-i][n-j-1] = matrix[j][n-1-i];
//             matrix[j][n-1-i] = matrix[i][j];
//             matrix[i][j] = temp;
//         }
//     }
// };