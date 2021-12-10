/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    else if (numRows === 2) return [[1],[1,1]];
    
    let result = [[1],[1,1]];
    let row;
    for (let i = 2; i < numRows; i++){
        row = [1];
        for (let j = 0; j < result[i-1].length-1; j++){
            row.push(result[i-1][j] + result[i-1][j+1]);
        }
        row.push(1);
        result.push(row);
    }
    return result;
};